namespace Fanex.Athena.Controllers.Report.UnitTests.Result.ResultReport
{
    using Base.UnitTests;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.NVC.Authentication.Infrastructure;
    using NSubstitute;
    using NUnit.Framework;
    using Report.Result.ResultPopup;
    using System.Threading.Tasks;
    using UnitTest.Common.Extensions;

    [TestFixture]
    public partial class SGResultPopupControllerTest : CultureBaseControllerHelperTest
    {
        [Test]
        public async Task Index_WhenCall_CallBetListApi()
        {
            // Arrange
            const string CustId = "123";
            const string GamePlayId = "345";
            const string ExpectedResult = "aaaaaaaaaaaa";
            const string Url = "/SGResultPopup/Index";
            const string Language = "vi-VN";
            StubUserSessionData(new NVCUserAuthInfo
            {
                Language = Language
            });
            var betListApiClient = Substitute.For<IBetListApiClient>();

            betListApiClient.PostStringAsync(Url, Arg.Any<object>(), SessionService.UserSession.Language).Returns(ExpectedResult);
            using (var controller = CreateController(betListApiClient))
            {
                // Action
                var result = await controller.Index(CustId, GamePlayId);

                // Assert
                Assert.Multiple(() =>
                {
                    betListApiClient.Received(1).PostStringAsync(
                        Url,
                        Arg.Is<object>(
                            x => (string)x.GetValue("custId") == CustId &&
                                (string)x.GetValue("gamePlayId") == GamePlayId &&
                                (string)x.GetValue("languageCode") == Language), Language);
                    Assert.That(result, Is.EqualTo(ExpectedResult));
                });
            }
        }

        private SGResultPopupController CreateController(IBetListApiClient betListApiClient)
        {
            return new SGResultPopupController(betListApiClient)
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings
            };
        }
    }
}