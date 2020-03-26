// -----------------------------------------------------------------------
// <copyright file="AuthorizationService.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Service.StatelessCore
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using Fanex.Athena.DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Extension.Utility.Interfaces;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Service.Interface;

    public class AuthorizationService : IAuthorizationService
    {
        private const int OneHourInSecond = 3600;
        private readonly IAthorizationDataAccess _authorizationDataAccess;
        private readonly ICustomMemoryCacheService _cache;
        private readonly IUserService userService;

        public AuthorizationService(IAthorizationDataAccess authorizationDataAccess, ICustomMemoryCacheService cache, IUserService userService)
        {
            _authorizationDataAccess = authorizationDataAccess;
            _cache = cache;
            this.userService = userService;
        }

        public bool HasPermissions(int userId, params string[] permissionKeys)
        {
            var userFuntion = userService.GetPermissions(userId, N88Settings.Settings.SiteId, string.Empty, N88Settings.Settings.Environment);

            return userFuntion.Any(x => permissionKeys.Contains(x.Function.Key, StringComparer.InvariantCultureIgnoreCase) && x.Policy > (int)Policy.None);
        }

        public bool HasHostPermissions(int userId, params string[] permissionKeys)
        {
            var userFuntion = userService.GetPermissions(userId, N88Settings.Settings.SiteId, string.Empty, N88Settings.Settings.Environment);

            return userFuntion.Any(x => permissionKeys.Contains(x.Function.Key, StringComparer.InvariantCultureIgnoreCase) && x.Policy == (int)Policy.Host);
        }

        public bool IsAllowedEditCommission(UserAuthInfo userAuthInfo)
        {
            if (userAuthInfo.ApplicationMode == AppMode.Parasitic)
            {
                if (userAuthInfo.IsSuperAdmin)
                {
                    return true;
                }
                return userAuthInfo.PortalFunctionList != null && userAuthInfo.PortalFunctionList.Any(i => i.FunctionKey
                      == PermissionKeys.CustomerInfoCommissionGroupList ||
                      (i.SubFunctionKeys != null && i.SubFunctionKeys.Contains(PermissionKeys.CustomerInfoCommissionGroupList)));
            }
            return userAuthInfo.FunctionList != null && userAuthInfo.FunctionList.Any(x => x.FunctionKey == PermissionKeys.CustomerInfoCommissionGroupList);
        }

        public bool IsAllowedSpecialBA(UserAuthInfo userAuthInfo)
        {
            if (userAuthInfo.ApplicationMode == AppMode.Parasitic)
            {
                if (userAuthInfo.IsSuperAdmin)
                {
                    return true;
                }
                return userAuthInfo.PortalFunctionList != null && (userAuthInfo.PortalFunctionList.Any(i => i.FunctionKey
                     == PermissionKeys.CustomerInfoSpecialBA
                     || (i.SubFunctionKeys != null && i.SubFunctionKeys.Contains(PermissionKeys.CustomerInfoSpecialBA))));
            }
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

        public bool HasPermissionOnData(IEnumerable<OneAuthCurrency> currencyAgents, int custId, long transId)
        {
            if (custId == 0 && transId == 0)
            {
                return true;
            }

            var item = _authorizationDataAccess.IsCustomerBelonging(custId, transId);

            return currencyAgents.Any(i => i.CurrencyId == item.Item1 && i.AgentId.Contains(item.Item2));
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