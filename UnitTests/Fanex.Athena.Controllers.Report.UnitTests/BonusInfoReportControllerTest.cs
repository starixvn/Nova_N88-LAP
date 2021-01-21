namespace Fanex.Athena.Controllers.Report.UnitTests
{
    using System.Linq;
    using Base.UnitTests;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using Model.Core.DTO.Configuration;
    using Model.Report.ViewModel;

    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public class BonusInfoReportControllerTest : CultureBaseControllerHelperTest
    {
        private IReportSettingService _reportSettingService;

        [SetUp]
        public void SetUp()
        {
            _reportSettingService = Substitute.For<IReportSettingService>();
        }

        [TearDown]
        public void TearDown()
        {
            _reportSettingService = null;
        }

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();
            SetUpDefaultFakeData();
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectViewLink()
        {
            //Arrange
            _reportSettingService.GetSetting(Arg.Any<string>(), Arg.Any<string>()).Returns(FakeHelper.Create<ReportSetting>());
            const string expectedResult = "~/Views/Desktop/Report/BonusInfo/Main.cshtml";

            using (var controller = CreateController())
            {
                //Act
                var actualResult = controller.Index();

                //Assert
                Assert.AreEqual(expectedResult, actualResult.ViewName);
            }
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectViewModel()
        {
            //Arrange
            var fakeReportSetting = FakeHelper.Create<ReportSetting>();

            _reportSettingService.GetSetting(Arg.Any<string>(), Arg.Any<string>()).Returns(fakeReportSetting);

            var expectedResult = new BonusInfoViewModel
            {
                BaseCurrency = DefaultUserSession.DefaultBaseCurrency,
                OwnBrand = DefaultUserSession.BrandList.First(_ => _.Id == DefaultLicenseeSession.LicenseeId),
                Brands = DefaultUserSession.BrandList,
                Today = fakeReportSetting.MaxDate,
                MaxDate = fakeReportSetting.MaxDate,
                MinDate = fakeReportSetting.MinDate,
                LimitMonthRange = fakeReportSetting.LimitMonthRange
            };

            using (var controller = CreateController())
            {
                //Act
                var actualResult = controller.Index();

                //Assert
                Assert.That(actualResult.Model, Tobe.SameProperties(expectedResult));
            }
        }

        private BonusInfoReportController CreateController()
        {
            return new BonusInfoReportController(_reportSettingService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            };
        }
    }
}