namespace Fanex.Athena.Controllers.Report.UnitTests
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Base.UnitTests;
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.DataAccess.Report.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Report.DTO.AbnormalBet;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using Fanex.Athena.VendorAdapter.Interfaces;
    using Model.Core.DTO.Configuration;
    using Model.Report.ViewModel;

    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public class ExtraPayoutReportControllerTest : CultureBaseControllerHelperTest
    {
        private IReportSettingService _reportSettingService;
        private ICacheRefAdapter _cacheRefAdapter;

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();
            _reportSettingService = Substitute.For<IReportSettingService>();
            _cacheRefAdapter = Substitute.For<ICacheRefAdapter>();
            SetUpDefaultFakeData();
        }

        [Test]
        public void Index_WhenGet_ReturnCorrectViewResult()
        {
            // Arrange
            var product = new Product
            {
                ProductCode = Product.SPR,
                ProductID = 1,
                ProductName = "SPR"
            };

            using (var controller = CreateController(product))
            {
                // Action
                var viewResult = controller.Index() as ViewResult;
                var viewModel = viewResult.Model as ExtraPayoutViewModel;

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(viewResult.ViewName, Is.EqualTo("~/Views/Desktop/Report/ExtraPayout/Main.cshtml"));
                    Assert.That(viewModel.CurrencyList, Is.EqualTo(SessionService.UserSession.CurrencyList));
                });
            }
        }

        [Test]
        public void GetPromotionTypes_WhenGet_ReturnCorrectPromotion()
        {
            // Arrange
            var product = new Product[]
            {
                new Product {ProductCode = Product.VGA},
                new Product {ProductCode = Product.CC},
                new Product {ProductCode = Product.SBC},
                new Product {ProductCode = Product.SPR}
            };

            var productCode = "VGA,CC,SBC,SPR";

            using (var controller = CreateController(product))
            {
                // Action
                var result = controller.GetPromotionTypes(productCode);

                // Assert
                Assert.Multiple(() =>
                {
                    Assert.That(result, Is.InstanceOf<ActionResult>());
                });
            }
        }

        private ExtraPayoutReportController CreateController(params Product[] products)
        {
            var productList = products == null ? new List<Product>() : products.ToList();
            var productService = Substitute.For<IProductService>();
            productService.GetSingleWalletProductAccess(
                SessionService.LicenseeSession.LicenseeId,
                SessionService.UserSession.Language,
                FunctionNames.ExtraPayout).Returns(new ProductAccess(productList));

            var reportSetting = new ReportSetting
            {
                MinDate = new DateTime(2021, 2, 15),
                MaxDate = new DateTime(2021, 3, 30),
            };

            _reportSettingService.GetSetting(PermissionKeys.ReportExtraPayout, SessionService.LicenseeSession.LicenseeName).
                Returns(reportSetting);

            _cacheRefAdapter.GetBettype(Arg.Any<string>()).Returns("");

            return new ExtraPayoutReportController(_reportSettingService, _cacheRefAdapter)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
                ProductServiceInstance = productService
            };
        }
    }
}