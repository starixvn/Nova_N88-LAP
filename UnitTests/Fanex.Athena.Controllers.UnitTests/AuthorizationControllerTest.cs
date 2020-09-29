namespace Fanex.Athena.Controllers.UnitTests
{
    using System;
    using System.Collections.Generic;
    using System.Web;
    using System.Web.Mvc;
    using Base.UnitTests;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models;
    using Fanex.N88.Core.Service.Interface;
    using Model.Core.DataDomain;
    using NSubstitute;
    using NUnit.Framework;
    using ONEbook.UM.Services;
    using Resources;

    [TestFixture]
    public partial class AuthorizationControllerTest : CultureBaseControllerHelperTest
    {
        private IMaintenanceService _maintenanceService;
        private IUserService _userService;
        private IFormsAuthenticationService _formAuthenticationService;
        private IFileSystem _fileSystem;
        private ISecurityService _sercurityService;
        private IGroupService _groupService;
        private ISiteService _siteService;
        private IFormsAuthenticationService _formsAuthenticationService;

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();

            _maintenanceService = Substitute.For<IMaintenanceService>();
            _userService = Substitute.For<IUserService>();
            _formAuthenticationService = Substitute.For<IFormsAuthenticationService>();
            _fileSystem = Substitute.For<IFileSystem>();
            _sercurityService = Substitute.For<ISecurityService>();
            _groupService = Substitute.For<IGroupService>();
            _siteService = Substitute.For<ISiteService>();
            _formsAuthenticationService = Substitute.For<IFormsAuthenticationService>();
        }

        [OneTimeTearDown]
        public override void FixtureTearDown()
        {
            _maintenanceService = null;
            _userService = null;
            _formAuthenticationService = null;
            _sercurityService = null;
            _groupService = null;
            _siteService = null;
            _formsAuthenticationService = null;
        }

        [SetUp]
        public void SetUp()
        {
            SetUpDefaultFakeData();
        }

        [TearDown]
        public void TearDown()
        {
            AppSettings.ClearReceivedCalls();
            _userService.ClearReceivedCalls();
            SessionService.ClearReceivedCalls();
            _sercurityService.ClearReceivedCalls();
        }

        [Test]
        public void Captcha_WhenCall_ReturnFileContent()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SessionService.CaptchaCode = null;

                // Action
                var result = controller.Captcha() as FileContentResult;

                // Assert
                Assert.That(result, Is.Not.Null);
            }
        }

        [Test]
        public void Captcha_WhenCall_AssignCaptchaToSession()
        {
            using (var controller = CreateController())
            {
                // Arrange
                SessionService.CaptchaCode = null;

                // Action
                controller.Captcha();

                // Assert
                Assert.That(SessionService.CaptchaCode.Length, Is.EqualTo(4));
            }
        }

        [Test]
        public void SignOut_WhenCall_CallSignOutFromService()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                _sercurityService.Received().Logout(DefaultUserSession.OnUserId);
                _formAuthenticationService.Received().SignOut();
            }
        }

        [Test]
        public void SignOut_UserDoesNotExist_NotCallLogoutFromUserService()
        {
            using (var controller = CreateController())
            {
                // Arrange
                StubUserSessionData(null);

                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    _sercurityService.DidNotReceive().Logout(Arg.Any<int>());
                    _formAuthenticationService.Received().SignOut();
                });
            }
        }

        [Test]
        public void SignOut_WhenCall_RedirectToLocationRestriction()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.RouteValues["action"], Is.EqualTo("LocationRestriction"));
                    Assert.That(result.RouteValues["controller"], Is.EqualTo("Utility"));
                });
            }
        }

        [Test]
        public void SignOut_WhenCall_ClearCookies()
        {
            using (var controller = CreateController())
            {
                // Arrange
                const string CookieName = "cookie1";
                controller.ControllerContext.HttpContext.Request.Cookies.Add(new HttpCookie(CookieName));

                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(controller.ControllerContext.HttpContext.Response.Cookies[0].Name, Is.EqualTo(CookieName));
                    Assert.That(controller.ControllerContext.HttpContext.Response.Cookies[0].Expires, Is.LessThan(DateTime.Now));
                });
            }
        }

        [Test]
        public void SignOut_WhenCall_ClearSession()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                controller.Session.Received().Clear();
            }
        }

        [Test]
        public void SignOut_WhenCall_ClearCache()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.SignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    controller.Response.Cache.Received().SetNoStore();
                    controller.Response.Cache.Received().SetExpires(Arg.Any<DateTime>());
                    controller.Response.Cache.Received().SetCacheability(HttpCacheability.NoCache);
                });
            }
        }

        [Test]
        public void InternalSignOut_WhenCall_CallSignOutFromService()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.InternalSignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    _sercurityService.Received().Logout(DefaultUserSession.OnUserId);
                    _formAuthenticationService.Received().SignOut();
                });
            }
        }

        [Test]
        public void InternalSignOut_WhenCall_RedirectToOneTokenRestriction()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.InternalSignOut() as RedirectToRouteResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.RouteValues["action"], Is.EqualTo("OneTokenRestriction"));
                    Assert.That(result.RouteValues["controller"], Is.EqualTo("Utility"));
                    Assert.That(result.RouteValues["code"], Is.EqualTo(100));
                });
            }
        }

        [Test]
        public void ChangePassword_WhenGet_ReturnCorrectViewNam()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.ChangePassword() as ViewResult;

                // Assert
                StringAssert.Contains("Authorization/ChangePass.cshtml", result.ViewName);
            }
        }

        [Test]
        public void ChangePassword_WhenGet_ReturnCorrectViewBag()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.ChangePassword() as ViewResult;

                // Assert
                Assert.That(result.ViewBag.PageData as Dictionary<string, string>, Is.Not.Null);
            }
        }

        [Test]
        public void ChangePassword_WhenPost_InvalidNewPassword_ReturnErrorResult()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.ChangePassword("oldpassword", "abc") as JsonResult;
                var data = result.Data as dynamic;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(data.errCode, Is.EqualTo(ErrorType.Unknown));
                    Assert.That(data.errMsg, Is.EqualTo(ViewResources.PasswordNoteMsg));
                });
            }
        }

        [Test]
        public void ChangePassword_WhenPost_ValidData_CallServiceCorrectly()
        {
            using (var controller = CreateController())
            {
                // Arrange
                const string OldPassword = "oldpassword";
                const string NewPassword = "1234aa";
                const string NewHashPassword = "56E8A2D78170E87C928E480797CC73";
                var user = new User() { Username = "abc", Password = "8058E861808058FDD87DD98889A08D" };

                _userService.Get(Arg.Any<int>()).Returns(user);

                // Action
                var result = controller.ChangePassword(OldPassword, NewPassword) as JsonResult;

                // Assert
                Assert.Multiple(() =>
                {
                    _sercurityService.Received().UpdatePassword(Arg.Any<int>(), Arg.Any<int>(), NewHashPassword);
                });
            }
        }

        private AuthorizationController CreateController()
        {
            return new AuthorizationController(
               _maintenanceService,
               _formAuthenticationService,
               _userService,
               _groupService,
               _sercurityService,
               _siteService)
            {
                ControllerContext = ControllerContext,
                LangService = LangService,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings,
                n88Settings = new N88Settings()
            };
        }
    }
}