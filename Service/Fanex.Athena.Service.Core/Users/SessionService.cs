namespace Fanex.Athena.Service.Core.Users
{
    using DataAccess.Core.Common.Interfaces;
    using DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Extension.Utility;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.Core.Configuration;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models;
    using Fanex.N88.Core.Models.ValueObject;
    using Fanex.N88.Core.Service.Interface;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    [CLSCompliant(false)]
    public class SessionService : ISessionService
    {
        private readonly ILicenseeDataAccess _licenseeDataAccess;
        private readonly IUserService _userService;
        private readonly ISessionStorage _sessionStorage;
        private readonly IAppSettings _appSettings;
        private readonly IBrandService _brandService;
        private readonly N88Settings _n88Settings;
        private readonly IProductService _productService;

        public SessionService(
            ILicenseeDataAccess licenseeDataAccess,
            IUserService userService,
            IAppSettings appSettings,
            ISessionStorage sessionStorage,
            IBrandService brandService,
            IProductService productService,
            N88Settings n88Settings = null)
        {
            _licenseeDataAccess = licenseeDataAccess;
            _sessionStorage = sessionStorage;
            _appSettings = appSettings;
            _userService = userService;
            _n88Settings = n88Settings ?? N88Settings.Settings;
            _brandService = brandService;
            _productService = productService;
        }

        public NVCLicenseeAuthInfo LicenseeSession => _sessionStorage.Licensee;

        public NVCUserAuthInfo UserSession => _sessionStorage.User;

        public IEnumerable<MenuItem> MenuSession => _sessionStorage.Menu;

        public string CaptchaCode
        {
            get { return _sessionStorage.CaptchaCode; }
            set { _sessionStorage.CaptchaCode = value; }
        }

        public void CreateNewSession(
            User user,
            int onuserId,
            string language = "en-US")
        {
            AssignUserSession(user, onuserId, language);
            AssignLicenseeSession();
            AssignMenuSession(user.Id);
        }

        private void AssignMenuSession(int userId)
        {
            var menuItems = _userService.GetMenuItem(userId, _n88Settings.SiteId, _n88Settings.Environment, true)
                .OrderBy(x => x.DisplayOrder)
                .ToList();

            _sessionStorage.Menu = menuItems;
        }

        private void AssignUserSession(User user, int onuserId, string language)
        {
            var napFunctions = _userService.GetPermissions(user.Id, _n88Settings.SiteId, string.Empty, _n88Settings.Environment).ToList();
            var functions = GetUserFunction(napFunctions).ToList();
            var brandList = _brandService.GetAllowedBrands(_appSettings.LicenseeId, functions, BrandSetting.Setting?.Brands);
            var ownBrand = brandList.First(_ => _.Id == _appSettings.LicenseeId);
            var settings = GetUserSetting(_userService.GetSettings(user.Id)).ToList();

            var userAuthInfo = new NVCUserAuthInfo
            {
                UserId = user.Id,
                OnUserId = onuserId,
                UserName = user.Username,
                IsLicenseeUser = user.IsLicenseeUser,
                Language = language,
                FunctionList = functions,
                CurrencyList = ownBrand.CurrencyList,
                CurrencyAgentList = ownBrand.CurrencyAgentList,
                DefaultBaseCurrency = string.IsNullOrEmpty(user.DefaultBaseCurrencyCode) ? _appSettings.DefaultBaseCurrency : user.DefaultBaseCurrencyCode,
                SupportMultiBrand = BrandSetting.Setting?.SupportMultiBrand ?? false,
                BrandList = brandList,
                IsShowIpvn = functions.Any(x => x.FunctionKey == PermissionKeys.BetlistViewIpvn),
                SettingList = settings,
                Level = user.Level
            };

            _sessionStorage.User = userAuthInfo;
        }

        private void AssignLicenseeSession()
        {
            var licensee = _licenseeDataAccess.GetLicenseeSettingById(_appSettings.LicenseeId);
            var NVCLicenseeAuthInfo = new NVCLicenseeAuthInfo
            {
                LicenseeId = licensee.Id,
                LicenseeName = licensee.Name,
                IsAllowedCustomerComm = licensee.IsAllowedCustomerComm,
                IsEnableBA = licensee.IsEnableBA,
                OfferedSubProductList = _productService.GetOfferedSubProducts(_appSettings.LicenseeId)
            };

            _sessionStorage.Licensee = NVCLicenseeAuthInfo;
        }

        private static IEnumerable<NVCFunctionAuthInfo> GetUserFunction(List<FunctionPolicy> napFunctions)
        {
            var functions = new List<NVCFunctionAuthInfo>();

            napFunctions.ForEach(function =>
            {
                if (function.Policy != (int)Policy.None)
                {
                    functions.Add(new NVCFunctionAuthInfo
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

        private static IEnumerable<NVCSettingAuthInfo> GetUserSetting(IEnumerable<Setting> napSettings)
        {
            return napSettings.Select(_ => new NVCSettingAuthInfo
            {
                SettingKey = _.Key,
                SettingValue = _.Value
            });
        }
    }
}