namespace Fanex.Athena.Api.Report.UnitTests
{
    using Fanex.Athena.Api.Base.UnitTests;
    using Fanex.Athena.Model.Report.MetaModel;
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

    public class WinLossReportControllerTest : BaseApiControllerHelperTest
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
        public async Task GetData_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<WinLossMetaModel>();
            var expectedResult = FakeHelper.Create<object>();
            _reportApiClient.PostAsync<dynamic>("Api/WinLossReport/GetData", metaModel, SessionLanguage).Returns(Task.FromResult<dynamic>(expectedResult));

            using (var controller = CreateController())
            {
                //Act
                var actualResult = await controller.GetData(metaModel).ConfigureAwait(false);

                //Assert
                Assert.AreEqual(expectedResult, actualResult);
            }
        }

        [Test]
        public async Task ExportData_WhenCall_ReturnCorrectData()
        {
            //Arrange
            var metaModel = FakeHelper.Create<ExportWinLossMetaModel>();
            var fakeData = new Tuple<Stream, string>(new MemoryStream(new byte[] { 1, 2 }), "application/octet-stream");
            _reportApiClient.PostAsync("Api/WinLossReport/ExportData", metaModel, SessionLanguage).Returns(Task.FromResult(fakeData));

            var expectedResult = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(fakeData.Item1)
            };
            expectedResult.Content.Headers.ContentType = new MediaTypeHeaderValue(fakeData.Item2);

            using (var controller = CreateController())
            {
                //Act

                var actualResult = await controller.ExportData(metaModel).ConfigureAwait(false);

                //Assert
                var actualStream = await actualResult.Content.ReadAsByteArrayAsync();
                fakeData.Item1.Seek(0, SeekOrigin.Begin);
                var expectedStream = await expectedResult.Content.ReadAsByteArrayAsync();

                Assert.AreEqual(actualStream, expectedStream);
                Assert.AreEqual(expectedResult.Content.Headers.ContentType, actualResult.Content.Headers.ContentType);
            }
        }

        private WinLossReportController CreateController()
        {
            return new WinLossReportController(_reportApiClient, LangService)
            {
                SessionService = SessionService
            };
        }
    }
}