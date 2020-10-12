namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    using Fanex.NVC.Authentication.Infrastructure;
    using System.Collections.Generic;

    public interface IAuthorizationService
    {
        bool HasPermissions(int userId, params string[] permissionKeys);

        bool HasHostPermissions(int userId, params string[] permissionKeys);

        bool HasPermissionOnData(IDictionary<int, int[]> currencyAgents, int custId, long transId);

        bool IsAllowedEditCommission(NVCUserAuthInfo userAuthInfo);

        bool IsAllowedSpecialBA(NVCUserAuthInfo userAuthInfo);

        bool CheckCustomerBelongsTo(IDictionary<int, int[]> currencyAgents, int custId, int currencyId = 0);

        bool CheckProductBelongsTo(string licenseeName, int productId, int[] limitedProductIds = null);
    }
}