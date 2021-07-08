namespace Fanex.Athena.Web.UnitTests.ActionFilter
{
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.NVC.Authentication.Infrastructure;
    using NSubstitute;
    using NUnit.Framework;
    using System.Collections.Generic;
    using System.Web.Mvc;

    public class RequireCurrencyPermissionAttributeTest
    {
        private ISessionStorage _sessionStorage;

        private RequireCurrencyPermissionAttribute _attribute;

        [SetUp]
        public void Setup()
        {
            _sessionStorage = Substitute.For<ISessionStorage>();
            _sessionStorage.Licensee.Returns(new NVCLicenseeAuthInfo
            {
                LicenseeId = 402
            });

            _attribute = new RequireCurrencyPermissionAttribute(_sessionStorage);
        }

        [Test]
        public void OnActionExecuting_IsOwnBrand_HasNoCurrency_RedirectResult()
        {
            //Arrange
            _attribute.OnlyOwnBrand = true;
            _sessionStorage.User.Returns(new NVCUserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand { Id = 402, TpCurrencyList = new Dictionary<int, string>() },
                    new Brand { Id = 436, TpCurrencyList = new Dictionary<int, string>() { { 1, "inh" } } }
                }
            });

            var filterContext = CreateFilterContext();

            //Action
            _attribute.OnActionExecuting(filterContext);
            var result = filterContext.Result as RedirectToRouteResult;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.RouteValues["controller"], Is.EqualTo("Utility"));
                Assert.That(result.RouteValues["action"], Is.EqualTo("OneTokenRestriction"));
                Assert.That(result.RouteValues["code"], Is.EqualTo(600));
            });
        }

        [Test]
        public void OnActionExecuting_IsOwnBrand_HasCurrency_NoRedirectResult()
        {
            //Arrange
            _attribute.OnlyOwnBrand = true;
            _sessionStorage.User.Returns(new NVCUserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand { Id = 402, TpCurrencyList = new Dictionary<int, string>() { { 1, "inh" } } },
                    new Brand { Id = 436, TpCurrencyList = new Dictionary<int, string>() }
                }
            });

            var filterContext = CreateFilterContext();

            //Action
            _attribute.OnActionExecuting(filterContext);

            // Assert
            Assert.IsNull(filterContext.Result);
        }

        [Test]
        public void OnActionExecuting_IsNotOwnBrand_HasNoCurrency_RedirectResult()
        {
            //Arrange
            _attribute.OnlyOwnBrand = false;
            _sessionStorage.User.Returns(new NVCUserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand { Id = 402, TpCurrencyList = new Dictionary<int, string>() },
                    new Brand { Id = 436, TpCurrencyList = new Dictionary<int, string>() }
                }
            });

            var filterContext = CreateFilterContext();

            //Action
            _attribute.OnActionExecuting(filterContext);
            var result = filterContext.Result as RedirectToRouteResult;

            // Assert
            Assert.Multiple(() =>
            {
                Assert.That(result.RouteValues["controller"], Is.EqualTo("Utility"));
                Assert.That(result.RouteValues["action"], Is.EqualTo("OneTokenRestriction"));
                Assert.That(result.RouteValues["code"], Is.EqualTo(600));
            });
        }

        [Test]
        public void OnActionExecuting_IsNotOwnBrand_HasCurrency_NoRedirectResult()
        {
            //Arrange
            _attribute.OnlyOwnBrand = false;
            _sessionStorage.User.Returns(new NVCUserAuthInfo
            {
                BrandList = new List<Brand>
                {
                    new Brand { Id = 402, TpCurrencyList = new Dictionary<int, string>() },
                    new Brand { Id = 436, TpCurrencyList = new Dictionary<int, string>() { { 1, "inh" } } },
                }
            });

            var filterContext = CreateFilterContext();

            //Action
            _attribute.OnActionExecuting(filterContext);

            // Assert
            Assert.IsNull(filterContext.Result);
        }

        private ActionExecutingContext CreateFilterContext()
        {
            return new ActionExecutingContext(
                MvcHelper.CreateControllerContext(),
                Substitute.ForPartsOf<ActionDescriptor>(),
                new Dictionary<string, object>());
        }
    }
}