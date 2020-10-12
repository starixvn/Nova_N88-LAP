namespace Fanex.Athena.Controllers.UnitTests
{
    using System.Web.Mvc;

    using Fanex.Athena.Model.Auth.MetaModel;

    using NSubstitute;

    using NUnit.Framework;

    using UnitTest.Common.Helpers;

    public partial class AuthorizationControllerTest
    {
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
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(101));
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
                    Assert.That(result.ViewBag.errCode, Is.EqualTo(102));
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
    }
}