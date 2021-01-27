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
    using Fanex.NVC.Authentication.Infrastructure;
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
        private ISessionStorage _sessionStorage;
        private ISessionService _sessionService;
        private IUserService _userService;
        private IBrandService _brandService;
        private N88Settings _n88Settings;

        [OneTimeSetUp]
        public void SetUp()
        {
            _sessionStorage = Substitute.For<ISessionStorage>();

            _appSettings = Substitute.For<IAppSettings>();
            _licenseeDataAccess = Substitute.For<ILicenseeDataAccess>();
            _userService = Substitute.For<IUserService>();
            _brandService = Substitute.For<IBrandService>();
            _brandService.GetAllowedBrands(Arg.Any<int>(), Arg.Any<IEnumerable<NVCFunctionAuthInfo>>(), Arg.Any<BrandCollection>())
                .Returns(new List<Brand> { new Brand { Id = 0 } });
            var licenseeList = new List<Licensee>
            {
                new Licensee
                {
                    Id = 1,
                    Name = "12bet"
                }
            };
            _licenseeDataAccess.GetLicenseeSettingById(Arg.Any<int>()).Returns(licenseeList[0]);
            _n88Settings = new N88Settings();
            _sessionService = new SessionService(
                _licenseeDataAccess,
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
            _sessionService = null;
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
            const string UserDefaultBaseCurrencyCode = "USd";
            const bool IsLicenseeUser = true;
            _sessionService.CreateNewSession(UserId, OnUserId, UserName, UserDefaultBaseCurrencyCode, IsLicenseeUser);
        }
    }
}