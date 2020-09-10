namespace Fanex.Athena.Service.Core.UnitTests.Users
{
    using System.Collections.Generic;
    using System.IO;
    using System.Web;
    using System.Web.SessionState;
    using Core.Users;
    using Core.Users.Interfaces;
    using DataAccess.Core.Common.Interfaces;
    using DataAccess.Core.Users.Interfaces;
    using Extension.Utility;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Service.Interface;
    using Model.Core.DTO.Common;
    using NSubstitute;
    using NUnit.Framework;
    using UnitTest.Common.Helpers;

    [TestFixture]
    public partial class SessionServiceTest
    {
        private const int DefaultUserId = 1;

        private IAppSettings _appSettings;
        private ILicenseeDataAccess _licenseeDataAccess;
        private ICurrencyDataAccess _currencyDataAccess;
        private ISessionStorage _sessionStorage;
        private ISessionService _sessionService;
        private IUserService _userService;
        private IBrandService _brandService;
        private N88Settings _n88Settings;

        [OneTimeSetUp]
        public void SetUp()
        {
            _sessionStorage = Substitute.For<ISessionStorage>();
            _sessionStorage.AssignSessions(
                Arg.Do<UserAuthInfo>(x => _sessionStorage.UserAuthInfo.Returns(x)),
                Arg.Do<LicenseeAuthInfo>(x => _sessionStorage.LicenseeAuthInfo.Returns(x)));

            _appSettings = Substitute.For<IAppSettings>();
            _licenseeDataAccess = Substitute.For<ILicenseeDataAccess>();
            _userService = Substitute.For<IUserService>();
            _brandService = Substitute.For<IBrandService>();
            var licenseeList = new List<Licensee>
            {
                new Licensee
                {
                    Id = 1,
                    Name = "12bet"
                }
            };
            _licenseeDataAccess.GetLicenseeSettingById(Arg.Any<int>()).Returns(licenseeList[0]);
            _currencyDataAccess = Substitute.For<ICurrencyDataAccess>();
            _n88Settings = new N88Settings();
            _sessionService = new SessionService(
                _licenseeDataAccess,
                _currencyDataAccess,
                _userService,
                _appSettings,
                _sessionStorage,
                _brandService,
                _n88Settings);
        }

        [OneTimeTearDown]
        public void TearDown()
        {
            _licenseeDataAccess = null;
            _currencyDataAccess = null;
            _sessionService = null;
        }

        [Test]
        public void UpdateLanguage_UserSessionAndLanguageCodeNotNull_UserSessionLanguageIsCorrect()
        {
            // Arrange
            const string LanguageCode = "vi-VN";
            CreateDefaultNewSession();

            // Action
            _sessionService.UpdateLanguage(LanguageCode);

            // Assert
            Assert.That(_sessionService.UserSession.Language, Is.EqualTo(LanguageCode));
        }

        [Test]
        public void UpdateLanguage_UserSessionAndLanguageCodeNotNull_ReturnTrue()
        {
            // Arrange
            const string LanguageCode = "vi-VN";
            CreateDefaultNewSession();

            // Action
            var result = _sessionService.UpdateLanguage(LanguageCode);

            // Assert
            Assert.That(result, Is.True);
        }

        [Test]
        public void UpdateLanguage_LanguageCodeIsEmpty_ReturnFalse()
        {
            // Arrange
            CreateDefaultNewSession();

            // Action
            var result = _sessionService.UpdateLanguage(string.Empty);

            // Assert
            Assert.That(result, Is.False);
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndPositive_ReturnCorrectXmlString()
        {
            // Arrange
            var currencyUserList = new List<CurrencyUser>
            {
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 1,
                    CurrencyName = "USD",
                    AgentId = 2,
                    AgentIdList = new[] { 1, 2 }
                },
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 20,
                    CurrencyName = "UUS",
                    AgentId = 3,
                    AgentIdList = new[] { 3, 4, 5 }
                }
            };
            _currencyDataAccess.GetCurrenciesByLicensee(Arg.Any<int>()).Returns(currencyUserList);
            CreateDefaultNewSession();
            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(_sessionService.UserSession.CurrencyAgentList, 0, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndNegative_ReturnCorrectXmlString()
        {
            // Arrange
            var currencyUserList = new List<CurrencyUser>
            {
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 1,
                    CurrencyName = "USD",
                    AgentId = 2,
                    AgentIdList = new[] { 1, 2 }
                }
            };
            _currencyDataAccess.GetCurrenciesByLicensee(Arg.Any<int>()).Returns(currencyUserList);
            CreateDefaultNewSession();
            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(_sessionService.UserSession.CurrencyAgentList, -2, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsNumberAndExcludeTestDataParamIsFalse_ReturnCorrectXmlString()
        {
            // Arrange
            var currencyUserList = new List<CurrencyUser>
            {
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 1,
                    CurrencyName = "USD",
                    AgentId = 2,
                    AgentIdList = new[] { 1, 2 }
                },
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 2,
                    CurrencyName = "EUR",
                    AgentId = 3,
                    AgentIdList = new[] { 3 }
                }
            };
            _currencyDataAccess.GetCurrenciesByLicensee(Arg.Any<int>()).Returns(currencyUserList);
            CreateDefaultNewSession();
            var expectedResult = "<ROOT><Agent AgentId=\"3\" Currency=\"2\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(_sessionService.UserSession.CurrencyAgentList, 2, false);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXml_CurrencyIdIsListAndContainUUSCurrency_ReturnCorrectXmlString()
        {
            // Arrange
            var currencyUserList = new List<CurrencyUser>
            {
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 1,
                    CurrencyName = "USD",
                    AgentId = 2,
                    AgentIdList = new[] { 1, 2 }
                },
                new CurrencyUser
                {
                    IsActive = true,
                    CurrencyId = 20,
                    CurrencyName = "UUS",
                    AgentId = 3,
                    AgentIdList = new[] { 3 }
                }
            };
            _currencyDataAccess.GetCurrenciesByLicensee(Arg.Any<int>()).Returns(currencyUserList);
            CreateDefaultNewSession();
            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(_sessionService.UserSession.CurrencyAgentList, new[] { 1, 20 }, true);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void GenerateAgentListXmlByAgentIdList_WhenCall_ReturnCorrectXmlString()
        {
            // Arrange
            var currencyAgentList = new Dictionary<int, IEnumerable<int>>
            {
                [1] = new List<int> { 1 }
            };
            CreateDefaultNewSession();
            var expectedResult = "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/></ROOT>";

            // Action
            var result = AuthParameterHelper.GenerateAgentListXml(_sessionService.UserSession.CurrencyList, currencyAgentList);

            // Assert
            Assert.That(result, Is.EqualTo(expectedResult));
        }

        [Test]
        public void CaptchaCode_Get_ValueIsGotCorrectly()
        {
            // Arrange
            var captcha = FakeHelper.Create<string>();
            CreateDefaultNewSession();
            _sessionStorage.CaptchaCode.Returns(captcha);

            // Action
            var result = _sessionService.CaptchaCode;

            // Assert
            Assert.That(result, Is.EqualTo(captcha));
        }

        private static void MockHttpContext()
        {
            var httpContext = new HttpContext(
                            new HttpRequest(string.Empty, "http://tempuri.org", string.Empty),
                            new HttpResponse(new StringWriter()));

            var sessionContainer = new HttpSessionStateContainer(
                "id",
                new SessionStateItemCollection(),
                new HttpStaticObjectsCollection(),
                10,
                true,
                HttpCookieMode.AutoDetect,
                SessionStateMode.InProc,
                false);
            SessionStateUtility.AddHttpSessionStateToContext(httpContext, sessionContainer);
            HttpContext.Current = httpContext;
        }

        private void CreateDefaultNewSession()
        {
            MockHttpContext();
            const int UserId = 1;
            const int OnUserId = 2;
            const string UserName = "user1";
            _sessionService.CreateNewSession(UserId, OnUserId, UserName);
        }
    }
}