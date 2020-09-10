namespace Fanex.Athena.Api.Report.UnitTests
{
    using Fanex.Athena.Api.Base.UnitTests;
    using Fanex.Athena.Model.Report.MetaModel.Marketing;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.UnitTest.Common.Helpers;
    using NSubstitute;
    using NUnit.Framework;
    using System;
    using System.IO;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
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

        [Test]
        public async Task NewlyRegisterUsersSummary_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<NewlyRegisterUsersSummaryMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/NewlyRegisterUsers/GetSummaryData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.NewlyRegisterUsersSummary(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        [Test]
        public async Task NewlyRegisterUsersDetails_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<NewlyRegisterUsersDetailsMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/NewlyRegisterUsers/GetDetailsData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.NewlyRegisterUsersDetails(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        [Test]
        public async Task NewlyRegisterUsersExport_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<NewlyRegisterUsersExportMetaModel>();
            var fakeData = new Tuple<Stream, string>(new MemoryStream(new byte[] { 1, 2 }), "application/octet-stream");
            _reportApiClient.PostAsync("Api/NewlyRegisterUsers/ExportData", metaModel, SessionLanguage).Returns(Task.FromResult(fakeData));

            var expectedResult = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(fakeData.Item1)
            };
            expectedResult.Content.Headers.ContentType = new MediaTypeHeaderValue(fakeData.Item2);

            using (var controller = CreateController())
            {
                //Act

                var actualResult = await controller.NewlyRegisterUsersExport(metaModel).ConfigureAwait(false);

                //Assert
                var actualStream = await actualResult.Content.ReadAsByteArrayAsync();
                fakeData.Item1.Seek(0, SeekOrigin.Begin);
                var expectedStream = await expectedResult.Content.ReadAsByteArrayAsync();

                Assert.AreEqual(actualStream, expectedStream);
                Assert.AreEqual(expectedResult.Content.Headers.ContentType, actualResult.Content.Headers.ContentType);
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