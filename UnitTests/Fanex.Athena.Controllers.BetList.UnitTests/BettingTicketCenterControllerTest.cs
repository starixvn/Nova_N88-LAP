namespace Fanex.Athena.Controllers.BetList.UnitTests
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    using Base.UnitTests;

    using DataAccess.Core.Configuration.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models;
    using Fanex.N88.Core.Models.ValueObject;
    using Fanex.N88.Core.Service.Interface;
    using Model.BetList.ViewModel;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;
    using Model.Core.DTO.Configuration;
    using NSubstitute;

    using NUnit.Framework;

    using UnitTest.Common.Helpers;

    public class BettingTicketCenterControllerTest : CultureBaseControllerHelperTest
    {
        private static readonly DateTime BalanceUpDate = new DateTime(2018, 11, 2);

        private IProductService _productService;

        private IBalanceUpDataAccess _balanceUpDataAccess;

        private IUserService _userService;

        private N88Settings _n88Settings;

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();

            _productService = Substitute.For<IProductService>();
            _balanceUpDataAccess = Substitute.For<IBalanceUpDataAccess>();
            _userService = Substitute.For<IUserService>();

            _balanceUpDataAccess.GetBalanceUp().Returns(new BalanceUp
            {
                BalanceUpDay = BalanceUpDate
            });

            SetUpDefaultFakeData();
        }

        [OneTimeTearDown]
        public override void FixtureTearDown()
        {
            base.FixtureTearDown();

            _productService = null;
            _balanceUpDataAccess = null;
            _userService = null;
        }

        [TestCase(PermissionKeys.BetHistorySingleCustomer, "~/Views/Desktop/BetList/BettingTicketCenter/SingleCustomer.cshtml")]
        [TestCase(PermissionKeys.BetHistoryRefNo, "~/Views/Desktop/BetList/BettingTicketCenter/RefNo.cshtml")]
        [TestCase(PermissionKeys.BetHistoryRunning, "~/Views/Desktop/BetList/BettingTicketCenter/Running.cshtml")]
        [TestCase(PermissionKeys.BetHistoryAdvancedSearch, "~/Views/Desktop/BetList/BettingTicketCenter/AdvancedSearch.cshtml")]
        public void Index_CheckByPermission_ReturnCorrectView(string permissionKey, string expectedView)
        {
            // Arrange
            CreateAndStubUserSession(permissionKey);
            MockProductService();

            using (var controller = CreateController())
            {
                // Action
                var result = controller.Index() as ViewResult;

                // Assert
                Assert.That(expectedView, Is.EqualTo(result.ViewName));
            }
        }

        [Test]
        public void Index_NotHaveAnyPermissionTab_ReturnDefaultView()
        {
            // Arrange
            CreateAndStubUserSession("AnotherPermissionKey");
            MockProductService();

            using (var controller = CreateController())
            {
                // Action
                var result = controller.Index() as RedirectToRouteResult;

                // Assert
                Assert.That("Utility", Is.EqualTo(result.RouteValues["controller"].ToString()));
                Assert.That("AccessDenied", Is.EqualTo(result.RouteValues["action"].ToString()));
            }
        }

        [Test]
        public void RefNo_WhenCall_ReturnCorrectViewResult()
        {
            MockProductService();

            using (var controller = CreateController())
            {
                // Arrange
                _productService.GetSingleWalletProductAccess(
                    DefaultLicenseeSession.LicenseeId,
                    DefaultUserSession.Language).Returns(new ProductAccess(new List<Product>()));

                // Action
                var result = controller.RefNo() as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/BetList/BettingTicketCenter/RefNo.cshtml"));
                    Assert.That(result.Model, Is.EqualTo(DefaultLicenseeSession.IsAllowedCustomerComm));
                });
            }
        }

        [Test]
        public void RefNo_WhenCall_ReturnCorrectViewBag()
        {
            using (var controller = CreateController())
            {
                // Arrange
                CreateAndStubUserSession(PermissionKeys.BetHistoryRefNo);
                var productKN = new Product { ProductCode = Product.KN, ProductName = FakeHelper.Create<string>() };
                var productLT = new Product { ProductCode = Product.LT, ProductName = FakeHelper.Create<string>() };
                var productSB = new Product { ProductCode = Product.SB, ProductName = FakeHelper.Create<string>() };
                var offerProducts = new ProductAccess(new List<Product> { productKN, productLT, productSB });

                _productService.GetSingleWalletProductAccess(
                    DefaultLicenseeSession.LicenseeId,
                    DefaultUserSession.Language).Returns(offerProducts);

                var expectedProductsNote = string.Format(
                    ViewResources.BettingTicketCenter_RefnoTabNote2,
                    productKN.ProductName + ", " + productLT.ProductName,
                    BalanceUpDate.ToString(FormatKey.DateFormat));

                // Action
                var result = controller.RefNo() as ViewResult;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result.ViewBag.SelectedBaseCurrency, Is.EqualTo(DefaultUserSession.DefaultBaseCurrency));
                    Assert.That(result.ViewBag.ProductsRequireUseNameNote, Is.EqualTo(expectedProductsNote));
                });
            }
        }

        [Test]
        public void Running_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                var historyDate = FakeHelper.Create<DateTime>();
                AppSettings.HistoryDate.Returns(historyDate);

                MockProductService();

                // Action
                var result = controller.Running() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/BetList/BettingTicketCenter/Running.cshtml"));
            }
        }

        [Test]
        public void Running_WhenCall_ReturnCorrectViewModel()
        {
            using (var controller = CreateController())
            {
                // Arrange
                CreateAndStubUserSession(PermissionKeys.BetHistoryRunning);
                var productCodes = MockProductService();

                // Action
                var result = controller.Running() as ViewResult;
                var viewModel = result.Model as BettingTicketCenterViewModel;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(viewModel.CurrencyList, Is.EqualTo(DefaultUserSession.CurrencyList));
                    Assert.That(viewModel.ProductOptionList.Count(), Is.EqualTo(productCodes.Count()));
                    Assert.That(viewModel.IsAllowedCustomerComm, Is.EqualTo(DefaultLicenseeSession.IsAllowedCustomerComm));
                });
            }
        }

        [Test]
        public void SingleCustomer_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                var historyDate = FakeHelper.Create<DateTime>();
                AppSettings.HistoryDate.Returns(historyDate);

                MockProductService();

                // Action
                var result = controller.SingleCustomer() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/BetList/BettingTicketCenter/SingleCustomer.cshtml"));
            }
        }

        [Test]
        public void SingleCustomer_WhenCall_ReturnCorrectViewModel()
        {
            using (var controller = CreateController())
            {
                // Arrange
                CreateAndStubUserSession(PermissionKeys.BetHistorySingleCustomer);
                var productCodes = MockProductService();

                // Action
                var result = controller.SingleCustomer() as ViewResult;
                var viewModel = result.Model as BettingTicketCenterViewModel;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(viewModel.LiveStatusList, Is.Not.Empty);
                    Assert.That(viewModel.StatusList, Is.Not.Empty);
                    Assert.That(viewModel.PlatformList, Is.Not.Empty);
                    Assert.That(viewModel.ProductOptionList.Count(), Is.EqualTo(productCodes.Count()));
                    Assert.That(viewModel.IsAllowedCustomerComm, Is.EqualTo(DefaultLicenseeSession.IsAllowedCustomerComm));
                });
            }
        }

        [Test]
        public void AdvancedSearch_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {
                // Arrange
                var historyDate = FakeHelper.Create<DateTime>();
                AppSettings.HistoryDate.Returns(historyDate);

                MockProductService();

                // Action
                var result = controller.AdvancedSearch() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/BetList/BettingTicketCenter/AdvancedSearch.cshtml"));
            }
        }

        [TestCase(true)]
        [TestCase(false)]
        public void AdvancedSearch_WhenCall_ReturnCorrectViewModel(bool hasExchangePermission)
        {
            using (var controller = CreateController())
            {
                // Arrange
                CreateAndStubUserSession(PermissionKeys.BtcAdvancedSearch);
                var productCodes = MockProductService();

                // Action
                var result = controller.AdvancedSearch() as ViewResult;
                var viewModel = result.Model as BettingTicketCenterViewModel;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(viewModel.CurrencyList, Is.EqualTo(DefaultUserSession.CurrencyList));
                    Assert.That(viewModel.LiveStatusList, Is.Not.Empty);
                    Assert.That(viewModel.StatusList, Is.Not.Empty);
                    Assert.That(viewModel.ProductOptionList.Count(), Is.EqualTo(productCodes.Count()));
                    Assert.That(viewModel.MinDate, Is.EqualTo(BalanceUpDate));
                    Assert.That(viewModel.IsAllowedCustomerComm, Is.EqualTo(DefaultLicenseeSession.IsAllowedCustomerComm));
                });
            }
        }

        private BettingTicketCenterController CreateController()
        {
            _n88Settings = new N88Settings();

            return new BettingTicketCenterController(_productService, _balanceUpDataAccess, _userService, _n88Settings)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
            };
        }

        private IEnumerable<Product> MockProductService()
        {
            var productCodes = FakeHelper.CreateMany<Product>(3).ToList();
            _productService.GetSingleWalletProductAccess(
                DefaultLicenseeSession.LicenseeId,
                DefaultUserSession.Language,
                Arg.Is<string>(x =>
                string.IsNullOrEmpty(x) ||
                x == FunctionNames.BettingTicketCenterAdvancedSearch ||
                x == FunctionNames.BettingTicketCenterRunning ||
                x == FunctionNames.BettingTicketCenter)).Returns(new ProductAccess(productCodes));

            return productCodes;
        }

        private void CreateAndStubUserSession(string permissionKey)
        {
            var functionPolicy = new FunctionPolicy()
            {
                Policy = (byte)Policy.Host,
                Function = new Function
                {
                    Key = permissionKey
                }
            };

            _userService.GetPermissions(Arg.Any<int>(), Arg.Any<int>(), Arg.Any<string>(), Arg.Any<string>()).Returns(new List<FunctionPolicy> { functionPolicy });
        }
    }
}
