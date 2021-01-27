namespace Fanex.Athena.Controllers.Base.UnitTests
{
    using Extension.Utility;
    using Fanex.NVC.Authentication.Infrastructure;
    using NSubstitute;
    using NUnit.Framework;
    using Service.Core.Common.Interfaces;
    using Service.Core.Users.Interfaces;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using UnitTest.Common.Helpers;

    [TestFixture]
    public abstract class CultureBaseControllerHelperTest
    {
        protected static readonly NVCUserAuthInfo DefaultUserSession = new NVCUserAuthInfo
        {
            CurrencyList = new Dictionary<int, string> { { 1, "UUS" } },
            UserId = 1,
            Language = "lan",
            UserName = "alex.vn",
            OnUserId = 999,
            FunctionList = new List<NVCFunctionAuthInfo>(),
            DefaultBaseCurrency = "EUR",
            CurrencyAgentList = new Dictionary<int, int[]>(),
            BrandList = new List<Brand>
            {
                new Brand { Id = 402, Name = "N88", CurrencyAgentList = new Dictionary<int, int[]>() }
            }
        };

        protected static readonly NVCLicenseeAuthInfo DefaultLicenseeSession = new NVCLicenseeAuthInfo
        {
            LicenseeId = 402,
            LicenseeName = "N88"
        };

        protected UrlHelper Url { get; set; }

        protected ControllerContext ControllerContext { get; set; }

        protected ILanguageService LangService { get; set; }

        protected ISessionService SessionService { get; set; }

        protected IAppSettings AppSettings { get; set; }

        protected IDictionary<int, string> UserCurrencyList => SessionService.UserSession.CurrencyList;

        [OneTimeSetUp]
        public virtual void FixtureSetUp()
        {
            LangService = Substitute.For<ILanguageService>();
            SessionService = Substitute.For<ISessionService>();
            AppSettings = Substitute.For<IAppSettings>();
            SetUpForContexts();
        }

        [OneTimeTearDown]
        public virtual void FixtureTearDown()
        {
            Url = null;
            ControllerContext = null;
            LangService = null;
            SessionService = null;
            AppSettings = null;
        }

        protected void SetUpDefaultFakeData()
        {
            StubUserSessionData(DefaultUserSession);

            StubLicenseeSessionData(DefaultLicenseeSession);
        }

        protected void StubUserSessionData(NVCUserAuthInfo fakeUserSession)
        {
            SessionService.UserSession.Returns(fakeUserSession);
        }

        protected void StubLicenseeSessionData(NVCLicenseeAuthInfo fakeLicenseeSession)
        {
            SessionService.LicenseeSession.Returns(fakeLicenseeSession);
            if (fakeLicenseeSession != null)
            {
                AppSettings.LicenseeId.Returns(fakeLicenseeSession.LicenseeId);
            }
        }

        protected void StubGetValueAppSettings(string valueName, string fakeValue)
        {
            AppSettings.GetValue(valueName).Returns(fakeValue);
        }

        private void SetUpForContexts()
        {
            ControllerContext = MvcHelper.CreateControllerContext();
            Url = MvcHelper.CreateUrlHelper(ControllerContext.HttpContext);
        }
    }
}