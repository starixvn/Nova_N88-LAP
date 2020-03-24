namespace Fanex.Athena.Service.Core.Users
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web;
    using DataAccess.Core.Common.Interfaces;
    using DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Extension.Utility;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models.ValueObject;
    using Fanex.N88.Core.Service.Interface;
    using Model.Core.DTO.Common;

    public class SessionService : ISessionService
    {
        private const string DefaultPagePath = "BettingTicketCenter";
        private const string UserSessionKey = "UserSessionKey";

        private readonly ILicenseeDataAccess licenseeDataAccess;
        private readonly ICurrencyDataAccess currencyDataAccess;
        private readonly IUserService userService;
        private readonly ISessionStorage sessionStorage;
        private readonly IAppSettings appSettings;

        public SessionService(
            ILicenseeDataAccess licenseeDataAccess,
            ICurrencyDataAccess currencyDataAccess,
            IUserService userService,
            IAppSettings appSettings,
            ISessionStorage sessionStorage)
        {
            this.licenseeDataAccess = licenseeDataAccess;
            this.currencyDataAccess = currencyDataAccess;
            this.sessionStorage = sessionStorage;
            this.appSettings = appSettings;
            this.userService = userService;
        }

        #region Public Properties

        public LicenseeAuthInfo LicenseeSession
        {
            get
            {
                return sessionStorage.LicenseeAuthInfo;
            }
        }

        public UserAuthInfo UserSession
        {
            get
            {
                return sessionStorage.UserAuthInfo;
            }
        }

        public string CaptchaCode
        {
            get { return sessionStorage.CaptchaCode; }
            set { sessionStorage.CaptchaCode = value; }
        }

        public void AssignSessions(UserAuthInfo userSession, LicenseeAuthInfo licenseeSession)
        {
            sessionStorage.AssignSessions(userSession, licenseeSession);
        }

        public void CreateNewSession(
            int userId,
            int onuserId,
            string userName,
            string language = "en-US")
        {
            var functions = userService.GetPermissions(userId, N88Settings.Settings.SiteId, string.Empty, N88Settings.Settings.Environment).ToList();

            var userSession = new UserAuthInfo
            {
                UserId = userId,
                OnUserId = onuserId,
                UserName = userName,
                Language = language,
                DefaultReportUrl = GetDefaultUrl(functions),
                FunctionList = GetUserFunction(functions).ToList(),
                DefaultBaseCurrency = appSettings.DefaultBaseCurrency
            };

            AssignMenuToUserSession(userSession);
            AssignCurrenciesToUserSession(userSession);

            var licensee = licenseeDataAccess.GetLicenseeSettingById(appSettings.LicenseeId);
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

        private static string GetDefaultUrl(IEnumerable<FunctionPolicy> functionList)
        {
            if (!functionList.Any(x => x.Function.Key.Equals(PermissionKeys.BetHistory)))
            {
                var firstFunction = functionList.FirstOrDefault(x => x.Function.Parent !=null && x.Function.Parent.Id > 0 && x.Policy != 0 );
                if (firstFunction != null)
                {
                    return firstFunction.Function.Key;
                }
            }

            return DefaultPagePath;
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
            var currencyUsers = currencyUserList ?? currencyDataAccess.GetCurrenciesByLicensee(appSettings.LicenseeId);

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
            var menuItems = userService.GetMenuItem(userSessionInfo.UserId, N88Settings.Settings.SiteId,
                N88Settings.Settings.Environment, true)
                .OrderBy(x => x.DisplayOrder).ToList();

            userSessionInfo.MenuItemList = menuItems;
        }

        private IEnumerable<Function> GetUserFunction(List<FunctionPolicy> functionPolicies)
        {
            var functions = new List<Function>();

            functionPolicies.ForEach(function =>
            {
                if(function.Policy != (int)Policy.None)
                {
                    functions.Add(new Function
                    {
                        FunctionKey = function.Function.Key,
                        Policy = function.Policy,
                        ParentId = function.Function.Parent != null ? function.Function.Parent.Id : 0
                    });
                }
            });

            return functions;
        }
    }

    #endregion Public Properties
}