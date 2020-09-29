namespace Fanex.Athena.Api.Base.Attributes.UnitTests
{
    using Attributes;
    using Autofac;
    using Extension.Utility;
    using Fanex.NVC.Authentication.Infrastructure;
    using NSubstitute;
    using NUnit.Framework;
    using Service.Core.Users.Interfaces;
    using Service.StatelessCore.Interfaces;
    using System;
    using System.Net;
    using System.Net.Http;
    using System.Threading;
    using System.Threading.Tasks;
    using System.Web.Http.Controllers;
    using UnitTest.Common.Helpers;

    public class ApiFunctionAuthorizationAttributeTest
    {
        private const string KeyName = "__RequestVerificationToken";

        private IAntiForgeryService _antiForgeryService;

        private ISessionService _sessionService;

        private IAuthorizationService _authorizationService;

        [SetUp]
        public void SetUp()
        {
            _antiForgeryService = Substitute.For<IAntiForgeryService>();
            _sessionService = Substitute.For<ISessionService>();
            _authorizationService = Substitute.For<IAuthorizationService>();
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_AjaxRequestHeaderNotContainCSRF_UnauthorizeAccessResult()
        {
            // Arrange
            var attribute = new ApiFunctionAuthorizationAttribute();
            var actionContext = CreateActionContext(isAjax: true);

            // Action
            var result = attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), null);

            // Assert
            Assert.That(result.Result.StatusCode, Is.EqualTo(HttpStatusCode.Forbidden));
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_AjaxRequestHeaderContainCSRF_CallAntiForgeryValidate()
        {
            // Arrange
            const string CsrfValue = "abc";

            var attribute = new ApiFunctionAuthorizationAttribute();
            var actionContext = CreateActionContext(isAjax: true);
            actionContext.Request.Headers.Add(KeyName, CsrfValue);
            var builder = new ContainerBuilder();
            builder.RegisterInstance(_antiForgeryService);
            builder.RegisterInstance(_sessionService);
            WebApiHelper.SetupResolver(builder, actionContext);

            // Action
            attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), null);

            // Assert
            _antiForgeryService.Received(1).Validate(null, CsrfValue);
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_NotAjaxRequest_CallAntiForgeryValidate()
        {
            // Arrange
            var attribute = new ApiFunctionAuthorizationAttribute();
            var actionContext = CreateActionContext(isAjax: false);

            // Action
            attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), null);

            // Assert
            _antiForgeryService.Received(1).Validate();
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_AntiForgeryFail_ReturnUnauthorizeAccess()
        {
            // Arrange
            var attribute = new ApiFunctionAuthorizationAttribute();
            var actionContext = CreateActionContext();
            _antiForgeryService.When(x => x.Validate()).Throw(new Exception());

            // Action
            var result = attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), null);

            // Assert
            Assert.That(result.Result.StatusCode, Is.EqualTo(HttpStatusCode.Forbidden));
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_SessionIsNull_InvokeContinuationFunc()
        {
            // Arrange
            var attribute = new ApiFunctionAuthorizationAttribute();
            var actionContext = CreateActionContext();

            // Action
            var result = attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), null);

            // Assert
            Assert.That(result.Result.StatusCode, Is.EqualTo(HttpStatusCode.Forbidden));
        }

        [Test]
        public void ExecuteAuthorizationFilterAsync_SessionNotNull_CheckAuthorzationPermission()
        {
            // Arrange
            var permissionKeys = new[] { "abc", "def" };
            var attribute = new ApiFunctionAuthorizationAttribute(permissionKeys);
            _sessionService.UserSession.Returns(new NVCUserAuthInfo());
            _sessionService.LicenseeSession.Returns(new NVCLicenseeAuthInfo());
            var actionContext = CreateActionContext();
            var continuation = Substitute.For<Func<Task<HttpResponseMessage>>>();

            // Action
            attribute.ExecuteAuthorizationFilterAsync(actionContext, new CancellationToken(), continuation);

            // Assert
            _authorizationService.Received(1).HasPermissions(Arg.Any<int>(), permissionKeys);
        }

        private HttpActionContext CreateActionContext(bool isAjax = false)
        {
            var controllerContext = ApiControllerTestHelper.CreateControllerContext();
            if (isAjax)
            {
                controllerContext.Request.Headers.Add("X-Requested-With", "XMLHttpRequest");
            }

            var descriptor = Substitute.ForPartsOf<HttpActionDescriptor>();
            var actionContext = new HttpActionContext(controllerContext, descriptor);
            var builder = new ContainerBuilder();
            builder.RegisterInstance(_antiForgeryService);
            builder.RegisterInstance(_sessionService);
            builder.RegisterInstance(_authorizationService);
            WebApiHelper.SetupResolver(builder, actionContext);
            return actionContext;
        }
    }
}