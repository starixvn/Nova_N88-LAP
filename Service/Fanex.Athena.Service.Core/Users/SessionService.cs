namespace Fanex.Athena.Service.Core.Users
{
    using DataAccess.Core.Common.Interfaces;
    using DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Extension.Utility;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models.ValueObject;
    using Fanex.N88.Core.Service.Interface;
    using Model.Core.DTO.Common;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;

    public class SessionService : ISessionService
    {
        private const string UserSessionKey = "UserSessionKey";

        private readonly ILicenseeDataAccess _licenseeDataAccess;
        private readonly ICurrencyDataAccess _currencyDataAccess;
        private readonly IUserService _userService;
        private readonly ISessionStorage _sessionStorage;
        private readonly IAppSettings _appSettings;
        private readonly IBrandService _brandService;
        private readonly N88Settings _n88Settings;

        public SessionService(
            ILicenseeDataAccess licenseeDataAccess,
            ICurrencyDataAccess currencyDataAccess,
            IUserService userService,
            IAppSettings appSettings,
            ISessionStorage sessionStorage,
            IBrandService brandService,
            N88Settings n88Settings = null)
        {
            _licenseeDataAccess = licenseeDataAccess;
            _currencyDataAccess = currencyDataAccess;
            _sessionStorage = sessionStorage;
            _appSettings = appSettings;
            _userService = userService;
            _n88Settings = n88Settings ?? N88Settings.Settings;
            _brandService = brandService;
        }

        #region Public Properties

        public LicenseeAuthInfo LicenseeSession
        {
            get
            {
                return _sessionStorage.LicenseeAuthInfo;
            }
        }

        public UserAuthInfo UserSession
        {
            get
            {
                return _sessionStorage.UserAuthInfo;
            }
        }

        public string CaptchaCode
        {
            get { return _sessionStorage.CaptchaCode; }
            set { _sessionStorage.CaptchaCode = value; }
        }

        public void AssignSessions(UserAuthInfo userSession, LicenseeAuthInfo licenseeSession)
        {
            _sessionStorage.AssignSessions(userSession, licenseeSession);
        }

        public void CreateNewSession(
            int userId,
            int onuserId,
            string userName,
            string language = "en-US")
        {
            var napFunctions = _userService.GetPermissions(userId, _n88Settings.SiteId, string.Empty, _n88Settings.Environment).ToList();
            var functions = GetUserFunction(napFunctions).ToList();
            var brandList = _brandService.GetAllowedBrands(_appSettings.LicenseeId, functions, BrandSetting.Setting.Brands);

            var userSession = new UserAuthInfo
            {
                UserId = userId,
                OnUserId = onuserId,
                UserName = userName,
                Language = language,
                FunctionList = functions,
                DefaultBaseCurrency = _appSettings.DefaultBaseCurrency,
                BrandList = brandList
            };

            AssignMenuToUserSession(userSession);
            AssignCurrenciesToUserSession(userSession);

            var licensee = _licenseeDataAccess.GetLicenseeSettingById(_appSettings.LicenseeId);
            AssignSessions(userSession, GenerateLicenseeInfo(licensee));
        }

        public bool UpdateLanguage(string languageCode)
        {
            var userSession = UserSession;

            if (userSession != null && !string.IsNullOrEmpty(languageCode))
            {
                userSession.Language = languageCode;
                HttpContext.Current.Session[UserSessionKey] = userSession;
                return true;
            }

            return false;
        }

        private static LicenseeAuthInfo GenerateLicenseeInfo(Licensee selectedLicensee)
        {
            return new LicenseeAuthInfo
            {
                LicenseeId = selectedLicensee.Id,
                LicenseeName = selectedLicensee.Name,
                IsAllowedCustomerComm = selectedLicensee.IsAllowedCustomerComm,
                IsEnableBA = selectedLicensee.IsEnableBA
            };
        }

        public void AssignCurrenciesToUserSession(UserAuthInfo userSession, IEnumerable<CurrencyUser> currencyUserList = null)
        {
            var currencyUsers = currencyUserList ?? _currencyDataAccess.GetCurrenciesByLicensee(_appSettings.LicenseeId);

            var currencyList = currencyUsers
                .Where(x => x.IsActive)
                .Select(x => new { x.CurrencyId, x.CurrencyName })
                .ToDictionary(x => x.CurrencyId, x => x.CurrencyName);

            var currencyAgentList = currencyUsers
                .Where(x => x.IsActive)
                .Select(x => new { x.CurrencyId, x.AgentIdList })
                .ToDictionary(x => x.CurrencyId, x => x.AgentIdList.ToArray());

            userSession.CurrencyList = currencyList;
            userSession.CurrencyAgentList = currencyAgentList;
        }

        private void AssignMenuToUserSession(UserAuthInfo userSessionInfo)
        {
            var menuItems = _userService.GetMenuItem(userSessionInfo.UserId, _n88Settings.SiteId,
                _n88Settings.Environment, true)
                .OrderBy(x => x.DisplayOrder).ToList();

            userSessionInfo.MenuItemList = menuItems;
        }

        private IEnumerable<Function> GetUserFunction(List<FunctionPolicy> functionPolicies)
        {
            var functions = new List<Function>();

            functionPolicies.ForEach(function =>
            {
                if (function.Policy != (int)Policy.None)
                {
                    functions.Add(new Function
                    {
                        FunctionId = function.Function.Id,
                        FunctionKey = function.Function.Key,
                        Policy = function.Policy,
                        ParentId = function.Function.Parent?.Id ?? 0
                    });
                }
            });

            return functions;
        }
    }

    #endregion Public Properties
}