namespace Fanex.Athena.Service.StatelessCore
{
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Extension.Utility.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Service.Interface;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class AuthorizationService : IAuthorizationService
    {
        private const int OneHourInSecond = 3600;
        private readonly IAthorizationDataAccess _authorizationDataAccess;
        private readonly ICustomMemoryCacheService _cache;
        private readonly IUserService _userService;
        private readonly N88Settings _n88Settings;

        public AuthorizationService(IAthorizationDataAccess authorizationDataAccess, ICustomMemoryCacheService cache, IUserService userService, N88Settings n88Settings = null)
        {
            _authorizationDataAccess = authorizationDataAccess;
            _cache = cache;
            _userService = userService;
            _n88Settings = n88Settings ?? N88Settings.Settings;
        }

        public bool HasPermissions(int userId, params string[] permissionKeys)
        {
            var isHasPermission = false;

            if (permissionKeys.Length == 1)
            {
                var policy = _userService.GetPermission(userId, _n88Settings.SiteId, permissionKeys.FirstOrDefault());

                isHasPermission = policy > (int)Policy.None;
            }
            else
            {
                var userFuntion = _userService.GetPermissions(userId, _n88Settings.SiteId, string.Empty, _n88Settings.Environment);

                isHasPermission = userFuntion.Any(x => permissionKeys.Contains(x.Function.Key, StringComparer.InvariantCultureIgnoreCase) &&
                    x.Policy > (int)Policy.None);
            }

            return isHasPermission;
        }

        public bool HasHostPermissions(int userId, params string[] permissionKeys)
        {
            var isHasPermission = false;

            if (permissionKeys.Length == 1)
            {
                var policy = _userService.GetPermission(userId, _n88Settings.SiteId, permissionKeys.FirstOrDefault());

                isHasPermission = policy == (int)Policy.Host;
            }
            else
            {
                var userFuntion = _userService.GetPermissions(userId, _n88Settings.SiteId, string.Empty, _n88Settings.Environment);

                isHasPermission = userFuntion.Any(x => permissionKeys.Contains(x.Function.Key, StringComparer.InvariantCultureIgnoreCase) && x.Policy == (int)Policy.Host);
            }

            return isHasPermission;
        }

        public bool IsAllowedEditCommission(NVCUserAuthInfo userAuthInfo)
        {
            return userAuthInfo.FunctionList != null && userAuthInfo.FunctionList.Any(x => x.FunctionKey == PermissionKeys.CustomerInfoCommissionGroupList);
        }

        public bool IsAllowedSpecialBA(NVCUserAuthInfo userAuthInfo)
        {
            return userAuthInfo.FunctionList != null && userAuthInfo.FunctionList.Any(x => x.FunctionKey == PermissionKeys.CustomerInfoSpecialBA);
        }

        public bool HasPermissionOnData(IDictionary<int, int[]> currencyAgents, int custId, long transId)
        {
            if (custId == 0 && transId == 0)
            {
                return true;
            }

            var item = _authorizationDataAccess.IsCustomerBelonging(custId, transId);

            return currencyAgents.Any(i => i.Key == item.Item1 && i.Value.Contains(item.Item2));
        }

        public bool CheckCustomerBelongsTo(IDictionary<int, int[]> currencyAgents, int custId, int currencyId = 0)
        {
            var item = _authorizationDataAccess.IsCustomerBelonging(custId, 0);

            return currencyAgents.Any(i => i.Key == item.Item1 && i.Value.Contains(item.Item2) && (currencyId == 0 || item.Item1 == currencyId));
        }

        public bool CheckProductBelongsTo(string licenseeName, int productId, int[] limitedProductIds = null)
        {
            if (limitedProductIds != null && !limitedProductIds.Contains(productId))
            {
                return false;
            }

            var cacheKey = $"Lrf_CheckBelonging_ValidateProduct_{licenseeName}_{productId}";

            if (_cache.Contains(cacheKey))
            {
                return _cache.Get<bool>(cacheKey);
            }

            var isValidProduct = _authorizationDataAccess.IsProductBelonging(productId, licenseeName);
            _cache.Set(cacheKey, isValidProduct, OneHourInSecond);

            return isValidProduct;
        }
    }
}