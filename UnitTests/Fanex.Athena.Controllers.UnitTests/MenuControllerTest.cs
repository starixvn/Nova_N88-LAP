namespace Fanex.Athena.Controllers.UnitTests
{
    using System.Collections.Generic;
    using System.Web.Mvc;

    using Base.UnitTests;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.N88.Core.Models;

    using NSubstitute;

    using NUnit.Framework;

    [TestFixture]
    public partial class MenuControllerTest : CultureBaseControllerHelperTest
    {
        private ILicenseeSettingService _licenseeSettingService;

        [SetUp]
        public void SetUp()
        {
            _licenseeSettingService = Substitute.For<ILicenseeSettingService>();
            SetUpDefaultFakeData();
        }

        [TearDown]
        public void TearDown()
        {
            _licenseeSettingService = null;
        }

        [Test]
        public void Index_WhenCall_ReturnCorrectView()
        {
            using (var controller = CreateController())
            {

                // Action
                var result = controller.Index() as ViewResult;

                // Assert
                StringAssert.Contains("Menu/Index.cshtml", result.ViewName);
            }
        }

        private MenuController CreateController()
        {
            return new MenuController()
            {
                LangService = LangService,
                SessionServiceInstance = SessionService,
                AppSettingInstance = AppSettings,
                LicenseeSettingServiceInstance = _licenseeSettingService
            };
        }
    }
}