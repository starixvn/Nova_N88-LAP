namespace Fanex.Athena.Controllers.UnitTests
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Security.Cryptography;
    using System.Text;
    using System.Web.Mvc;

    using Fanex.Athena.Model.Auth.MetaModel;
    using Fanex.N88.Core.Models;
    using Fanex.N88.Core.Models.ParameterObject;
    using Fanex.N88.Core.Models.ValueObject;
    using Fanex.N88.Core.Service.Interface;
    using NSubstitute;

    using NUnit.Framework;

    using UnitTest.Common.Helpers;

    public partial class AuthorizationControllerTest
    {
        private const int InvalidCaptchaError = 101;
        private const int InvalidUserNameError = 102;
        private const int InvalidPasswordError = 103;
        private const int UserNotExistError = 104;
        private const int UserHasNoPermissionError = 105;

        private const int SSOExpiredTimeInSeconds = 30;

        [Test]
        public void SignIn_WhenGet_IsInternalDomain_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("InternalSubDomain", MvcHelper.TestingRequestDomain);

                // Action
                var result = controller.SignIn() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
            }
        }

        [Test]
        public void SignIn_WhenGet_IsInternalDomain_ReturnCorrectViewBag()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("InternalSubDomain", MvcHelper.TestingRequestDomain);

                // Action
                var result = controller.SignIn() as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.LogInToken, Is.Not.Null);
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(0));
                    Assert.That(result.ViewBag.errMsg, Is.Empty);
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_InvalidCaptcha_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "0");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = "anything",
                    PassWord = "anything",
                    Captcha = "WrongCaptcha"
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(SessionService.CaptchaCode, Is.Not.EqualTo("OriginalCaptcha"));
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(InvalidCaptchaError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_UserNameIsEmpty_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = string.Empty
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(InvalidUserNameError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_PassWordIsEmpty_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = "User name",
                    PassWord = string.Empty
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(103));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_Authentication_UserIsNotExist_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");
                User user = null;
                _userService.Get(Arg.Any<string>(), Arg.Any<int>()).Returns(user);

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = "User name",
                    PassWord = "password"
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(InvalidUserNameError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_Authentication_WrongPassword_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");
                var user = new User() { Username = "abc", Password = "8058E861808058FDD87DD98889A08D" };
                _userService.Get(Arg.Any<string>(), Arg.Any<int>()).Returns(user);
                HashAlgorithm _hashAlgorithm = new SHA256Managed();
                var crypPassword = _hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes("wrongpassword"));

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = user.Username,
                    PassWord = BitConverter.ToString(crypPassword).Replace("-", string.Empty).ToLowerInvariant()
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(InvalidPasswordError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_Authentication_IsNotExistNapSite_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");

                var group = new Group() { IsActive = false };
                _groupService.Get(Arg.Any<short>()).Returns(group);

                var user = new User() { Username = "abc", Password = "password", Group = group };
                _userService.Get(Arg.Any<string>(), Arg.Any<int>()).Returns(user);

                HashAlgorithm _hashAlgorithm = new SHA256Managed();
                var crypPassword = _hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes("password"));

                SiteLevel siteLevel = new SiteLevel() { IsActive = false, Site = new Site() { Id = 0 } };
                List<SiteLevel> listSiteLevel = new List<SiteLevel>() { siteLevel };

                _userService.GetSiteLevel(Arg.Any<int>(), Arg.Any<string>()).Returns(listSiteLevel);

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = user.Username,
                    PassWord = BitConverter.ToString(crypPassword).Replace("-", string.Empty).ToLowerInvariant()
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(UserNotExistError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }

        [Test]
        public void SignIn_WhenPost_Authentication_IsNotExistNapGroup_ReturnSignInViewWithError()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubGetValueAppSettings("AllowAutomationCaptchaCode", "1");
                SessionService.CaptchaCode.Returns("OriginalCaptcha");

                var group = new Group() { IsActive = false };
                _groupService.Get(Arg.Any<short>()).Returns(group);

                var user = new User() { Username = "abc", Password = "password", Group = group };
                _userService.Get(Arg.Any<string>(), Arg.Any<int>()).Returns(user);

                HashAlgorithm _hashAlgorithm = new SHA256Managed();
                var crypPassword = _hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes("password"));

                SiteLevel siteLevel = new SiteLevel() { IsActive = true, Site = new Site() { Id = 0} };
                List<SiteLevel> listSiteLevel = new List<SiteLevel>() { siteLevel };

                _userService.GetSiteLevel(Arg.Any<int>(), Arg.Any<string>()).Returns(listSiteLevel);

                // Action
                var result = controller.SignIn(new LoginMetaModel
                {
                    UserName = user.Username,
                    PassWord = BitConverter.ToString(crypPassword).Replace("-", string.Empty).ToLowerInvariant()
                }) as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(UserNotExistError));
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Authorization/SignIn.cshtml"));
                });
            }
        }
    }
}