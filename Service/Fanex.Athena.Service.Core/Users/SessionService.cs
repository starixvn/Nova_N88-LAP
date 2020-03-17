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
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models.ValueObject;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;

    public class SessionService : ISessionService
    {
        private const string DefaultReportPath = "LicenseeWinLossReport";

        private const string UserSessionKey = "UserSessionKey";

        private readonly IFunctionService _functionService;
        private readonly ILicenseeDataAccess _licenseeDataAccess;
        private readonly ICurrencyDataAccess _currencyDataAccess;
        private readonly N88.Core.Service.Interface.IUserService _napUserService;
        private readonly ISessionStorage _sessionStorage;
        private readonly IAppSettings _appSettings;

        public SessionService(
            IFunctionService functionService,
            ILicenseeDataAccess licenseeDataAccess,
            ICurrencyDataAccess currencyDataAccess,
            N88.Core.Service.Interface.IUserService napUserService,
            IAppSettings appSettings,
            ISessionStorage sessionStorage)
        {
            _functionService = functionService;
            _licenseeDataAccess = licenseeDataAccess;
            _currencyDataAccess = currencyDataAccess;
            _sessionStorage = sessionStorage;
            _appSettings = appSettings;
            _napUserService = napUserService;
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
            var functions = _napUserService.GetPermissions(userId, N88Settings.Settings.SiteId, string.Empty, N88Settings.Settings.Environment).ToList();

            var userSession = new UserAuthInfo
            {
                UserId = userId,
                OnUserId = onuserId,
                UserName = userName,
                Language = language,
                FunctionList = GetUserFunction(functions).ToList(),
                DefaultBaseCurrency = _appSettings.DefaultBaseCurrency
            };

            AssignMenuToUserSession(userSession);
            AssignCurrenciesToUserSession(userSession);

            var licensee = _licenseeDataAccess.GetLicenseeSettingById(_appSettings.LicenseeId);
            AssignSessions(userSession, GenerateLicenseeInfo(licensee));
        }

        public void UpdateLiceseeSession(int licenseeId)
        {
            var userSession = UserSession;
            var licenseeList = _licenseeDataAccess.GetByUser(userSession.UserId);

            if (licenseeId > 0)
            {
                var selectedLicensee = licenseeList.SingleOrDefault(i => i.Id == licenseeId);
                var functionList = _functionService.GetUserFunctionList(licenseeId, userSession.UserId).ToList();

                userSession.FunctionList = functionList;
                userSession.DefaultReportUrl = GetDefaultReportUrl(functionList);

                AssignCurrenciesToUserSession(userSession, licenseeId);

                AssignSessions(userSession, GenerateLicenseeInfo(selectedLicensee));
            }
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

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Sonar Code Smell", "S3995:UriReturnValuesShouldNotBeStrings",
           Justification = "Reviewed. Suppression is OK here.")]
        private static string GetDefaultReportUrl(IEnumerable<Model.Auth.Function> functionList)
        {
            if (!functionList.Any(x => x.FunctionKey.Equals(PermissionKeys.ReportLicenseeWinLoss)))
            {
                var firstFunction = functionList.FirstOrDefault(x => x.ParentId > 0 && x.IsActive);
                if (firstFunction != null)
                {
                    return firstFunction.Url;
                }
            }

            return DefaultReportPath;
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

            //if (licenseeId == LicenseeIdentity.KeenOcean)
            //{
            //    currencyUsers = KeanOceanBusinessHelper.ModifyCurrenciesForKeenOcean(currencyUsers);
            //}

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
            var menuItems = _napUserService.GetMenuItem(userSessionInfo.UserId, N88Settings.Settings.SiteId,
                N88Settings.Settings.Environment, true)
                .OrderBy(x => x.DisplayOrder).ToList();

            userSessionInfo.MenuItemList = menuItems;
        }

        public void AssignCurrenciesToUserSession(UserAuthInfo userSession, int licenseeId, IEnumerable<CurrencyUser> currencyUserList = null)
        {
            var currencyUsers = currencyUserList ?? _currencyDataAccess.GetCurrenciesByUser(licenseeId, userSession.UserId);

            if (licenseeId == LicenseeIdentity.KeenOcean)
            {
                currencyUsers = KeanOceanBusinessHelper.ModifyCurrenciesForKeenOcean(currencyUsers);
            }

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

        private IEnumerable<Function> GetUserFunction(List<FunctionPolicy> functionPolicies)
        {
            var functions = new List<Function>();

            functionPolicies.ForEach(function =>
            {
                functions.Add(new Function
                {
                    FunctionKey = function.Function.Key,
                    Policy = function.Policy,
                    ParentId = function.Function.Parent != null ? function.Function.Parent.Id : 0
                });
            });

            return functions;
        }
    }

    #endregion Public Properties
}