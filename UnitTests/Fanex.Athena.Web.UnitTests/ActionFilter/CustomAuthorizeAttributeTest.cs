using System.Web.Mvc;

using Fanex.Athena.Model.Auth;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.UnitTest.Common.Helpers;
using Fanex.Athena.Web.ActionFilter;
using Fanex.NVC.Authentication.Infrastructure;
using NSubstitute;

using NUnit.Framework;

namespace Fanex.Athena.Web.UnitTests.ActionFilter
{
    public class CustomAuthorizeAttributeTest
    {
        private readonly ControllerContext _controllerContext = MvcHelper.CreateControllerContext();

        private ISessionStorage _sessionStorage;

        private CustomAuthorizeAttribute _attribute;

        [SetUp]
        public void Setup()
        {
            _sessionStorage = Substitute.For<ISessionStorage>();
            _attribute = new CustomAuthorizeAttribute(_sessionStorage);
        }

        [Test]
        public void OnAuthorization_SkipAuthorization_NotGetUserSession()
        {
            // Arrange
            var filterContext = CreateFilterContext(true);

            // Action
            _attribute.OnAuthorization(filterContext);

            // Assert
            var temp = _sessionStorage.DidNotReceive().User;
        }

        [Test]
        public void OnAuthorization_NotAuthorized_AssignCorrectRouteValues()
        {
            // Arrange
            var filterContext = CreateFilterContext(false);

            // Action
            _attribute.OnAuthorization(filterContext);
            var result = filterContext.Result as RedirectToRouteResult;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.RouteValues["controller"], Is.EqualTo("Utility"));
                Assert.That(result.RouteValues["action"], Is.EqualTo("LocationRestriction"));
            });
        }

        [Test]
        public void OnAuthorization_NotAuthorized_FilterContextResultNull()
        {
            // Arrange
            var filterContext = CreateFilterContext(false);
            _sessionStorage.Licensee.Returns(new NVCLicenseeAuthInfo());
            _sessionStorage.User.Returns(new NVCUserAuthInfo());

            // Action
            _attribute.OnAuthorization(filterContext);
            var result = filterContext.Result as RedirectToRouteResult;

            // Assert
            Assert.That(result, Is.Null);
        }

        private AuthorizationContext CreateFilterContext(bool isSkipAuthorization)
        {
            var actionDescriptor = Substitute.ForPartsOf<ActionDescriptor>();
            actionDescriptor.IsDefined(typeof(AllowAnonymousAttribute), true).Returns(isSkipAuthorization);
            var filterContext = new AuthorizationContext(_controllerContext, actionDescriptor);
            return filterContext;
        }
    }
}