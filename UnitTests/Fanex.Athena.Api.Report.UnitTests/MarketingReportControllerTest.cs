namespace Fanex.Athena.Api.Report.UnitTests
{
    using Fanex.Athena.Api.Base.UnitTests;
    using Fanex.Athena.Model.Report.MetaModel.Marketing;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using NSubstitute;
    using NUnit.Framework;
    using System.Threading.Tasks;

    public class MarketingReportControllerTest : BaseApiControllerHelperTest
    {
        private IReportApiClient _reportApiClient;

        [SetUp]
        public void SetUp()
        {
            _reportApiClient = Substitute.For<IReportApiClient>();
        }

        [TearDown]
        public void TearDown()
        {
            _reportApiClient = null;
        }

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();
            MockSessionData();
        }

        [Test]
        public async Task PerformanceHighlight_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<PerformanceHighlightMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/PerformanceHighlight/GetData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.PerformanceHighlight(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        [Test]
        public async Task UserActivities_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<UserActivitiesMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/UserActivities/GetData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.UserActivities(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        [Test]
        public async Task AvgRevenue_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<AvgRevenueMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/Revenue/GetAvgData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.AvgRevenue(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        private MarketingReportController CreateController()
        {
            return new MarketingReportController(_reportApiClient, LangService)
            {
                SessionService = SessionService
            };
        }
    }
}