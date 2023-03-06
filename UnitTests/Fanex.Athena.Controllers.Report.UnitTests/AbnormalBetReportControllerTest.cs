namespace Fanex.Athena.Controllers.Report.UnitTests
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Base.UnitTests;
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.DataAccess.Report.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Report.DTO.AbnormalBet;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using Fanex.Athena.UnitTest.Common.NUnitExtensions;
    using Model.Core.DTO.Configuration;
    using Model.Report.ViewModel;

    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public class AbnormalBetReportControllerTest : CultureBaseControllerHelperTest
    {
        private IReportSettingService _reportSettingService;
        private ISportTypeDataAccess _sportService;
        private IAbnormalBetDataAcces _abnormalBetDataAcces;
        private IBetTypeService _betTypeService;

        [SetUp]
        public void SetUp()
        {
            _reportSettingService = Substitute.For<IReportSettingService>();
            _sportService = Substitute.For<ISportTypeDataAccess>();
            _abnormalBetDataAcces = Substitute.For<IAbnormalBetDataAcces>();
            _betTypeService = Substitute.For<IBetTypeService>();
        }

        [TearDown]
        public void TearDown()
        {
            _reportSettingService = null;
            _sportService = null;
            _abnormalBetDataAcces = null;
            _betTypeService = null;
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
            const string expectedResult = "~/Views/Desktop/Report/AbnormalBet/Main.cshtml";

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.Index() as ViewResult;

                //Assert
                Assert.AreEqual(expectedResult, actualResult.ViewName);
            }
        }

        [Test]
        public async Task Index_WhenCall_ReturnCorrectViewModel()
        {
            //Arrange
            var fakeReportSetting = FakeHelper.Create<ReportSetting>();

            _reportSettingService.GetSetting(Arg.Any<string>(), Arg.Any<string>()).Returns(fakeReportSetting);

            var expectedResult = new AbnormalBetViewModel
            {
                OwnBrand = DefaultUserSession.BrandList.First(_ => _.Id == DefaultLicenseeSession.LicenseeId),
                Brands = DefaultUserSession.BrandList,
                ReportSetting = fakeReportSetting
            };

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.Index() as ViewResult;
                var model = actualResult.Model as AbnormalBetViewModel;

                //Assert
                Assert.Multiple(() =>
                {
                    Assert.That(model.OwnBrand, Is.EqualTo(expectedResult.OwnBrand));
                    Assert.That(model.Brands, Is.EqualTo(expectedResult.Brands));
                    Assert.That(model.ReportSetting, Is.EqualTo(expectedResult.ReportSetting));
                });
            };
        }

        private AbnormalBetReportController CreateController()
        {
            return new AbnormalBetReportController(_reportSettingService, _sportService, _abnormalBetDataAcces, _betTypeService)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService
            };
        }
    }
}