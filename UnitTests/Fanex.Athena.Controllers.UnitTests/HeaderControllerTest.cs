namespace Fanex.Athena.Controllers.UnitTests
{
    using System.Web.Mvc;
    using Controllers.Base.UnitTests;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Model.Core.ViewModel;
    using NSubstitute;
    using NUnit.Framework;

    public class HeaderControllerTest : CultureBaseControllerHelperTest
    {
        private ILicenseeSettingService _licenseeSettingService;

        [SetUp]
        public void SetUp()
        {
            _licenseeSettingService = Substitute.For<ILicenseeSettingService>();
        }

        [OneTimeSetUp]
        public override void FixtureSetUp()
        {
            base.FixtureSetUp();

            SetUpDefaultFakeData();
        }

        [TearDown]
        public void TearDown()
        {
            SessionService.ClearReceivedCalls();
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectViewName()
        {
            using (var controller = CreateController())
            {
                // Action
                var result = controller.Index() as ViewResult;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Header/Index.cshtml"));
            }
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectViewModel()
        {
            using (var controller = CreateController())
            {
                // Arrange
                const bool HasRecheckIn = true;
                AppSettings.LocalTest.Returns(!HasRecheckIn);

                // Action
                var result = controller.Index() as ViewResult;
                var model = (HeaderPageViewModel)result.Model;

                // Assert
                Assert.That(result.ViewName, Is.EqualTo("~/Views/Desktop/Header/Index.cshtml"));
                Assert.Multiple(() =>
                {
                    Assert.That(model.Language, Is.EqualTo(DefaultUserSession.Language));
                    Assert.That(model.OnUserId, Is.EqualTo(DefaultUserSession.OnUserId));
                    Assert.That(model.Language, Is.EqualTo(DefaultUserSession.Language));
                    Assert.That(model.HasRecheckIn, Is.EqualTo(HasRecheckIn));
                    Assert.That(model.UserName, Is.EqualTo(DefaultUserSession.UserName));
                    Assert.That(model.CurrentLicenseeId, Is.EqualTo(DefaultLicenseeSession.LicenseeId));
                });
            }
        }

        private HeaderController CreateController()
        {
            return new HeaderController()
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings,
                LicenseeSettingServiceInstance = _licenseeSettingService
            };
        }
    }
}