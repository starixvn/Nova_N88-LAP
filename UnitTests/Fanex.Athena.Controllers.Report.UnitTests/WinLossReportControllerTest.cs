namespace Fanex.Athena.Controllers.Report.UnitTests
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Fanex.Athena.Controllers.Base.UnitTests;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.DTO.Configuration;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using NSubstitute;
    using NUnit.Framework;

    public class WinLossReportControllerTest : CultureBaseControllerHelperTest
    {
        private IReportSettingService _reportSettingService;
        private ITpService _tpService;

        [SetUp]
        public void SetUp()
        {
            _reportSettingService = Substitute.For<IReportSettingService>();
            _tpService = Substitute.For<ITpService>();
        }

        [TearDown]
        public void TearDown()
        {
            _reportSettingService = null;
            _tpService = null;
        }

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();
            SetUpDefaultFakeData();
        }

        [Test]
        public async Task Index_WhenCall_ReturnCorrectViewLink()
        {
            //Arrange
            _reportSettingService.GetSetting(Arg.Any<string>(), Arg.Any<string>()).Returns(FakeHelper.Create<ReportSetting>());
            const string expectedResult = "~/Views/Desktop/Report/WinLoss/Main.cshtml";

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.Index();

                //Assert
                Assert.AreEqual(expectedResult, actualResult.ViewName);
            }
        }

        [Test]
        public async Task Index_WhenCall_ReturnCorrectViewModel()
        {
            //Arrange
            var fakeTpProducts = FakeHelper.Create<IEnumerable<TpProduct>>();
            var fakeReportSetting = FakeHelper.Create<ReportSetting>();
            var fakeReportViewSetting = FakeHelper.Create<IEnumerable<ReportViewSetting>>();

            _reportSettingService.GetSetting(Arg.Any<string>(), Arg.Any<string>()).Returns(fakeReportSetting);
            _reportSettingService.GetViewSetting(Arg.Any<string>()).Returns(fakeReportViewSetting);
            _tpService.GetListTpProduct().Returns(fakeTpProducts);

            var expectedResult = new WinLossViewModel
            {
                BaseCurrency = DefaultUserSession.DefaultBaseCurrency,
                TpProducts = fakeTpProducts,
                DataView = fakeReportViewSetting,
                OwnBrand = DefaultUserSession.BrandList.First(_ => _.Id == DefaultLicenseeSession.LicenseeId),
                Brands = DefaultUserSession.BrandList,
                MaxDate = fakeReportSetting.MaxDate,
                MinDate = fakeReportSetting.MinDate,
                LimitMonthRange = fakeReportSetting.LimitMonthRange,
                TopBottomPlayerList = new Dictionary<string, string>()
            };

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.Index();

                //Assert
                Assert.That(actualResult.Model, Tobe.SameProperties(expectedResult));
            }
        }

        private WinLossReportController CreateController()
        {
            return new WinLossReportController(_reportSettingService, _tpService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            };
        }
    }
}