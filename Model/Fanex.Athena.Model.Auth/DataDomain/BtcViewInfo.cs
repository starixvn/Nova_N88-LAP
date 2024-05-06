using System.Collections.Generic;

namespace Fanex.Athena.Model.Auth.DataDomain
{
    public static class BtcViewInfo
    {
        public static readonly IEnumerable<string> TabList = new List<string>
        {
            PermissionKeys.BetHistoryAdvancedSearch,
            PermissionKeys.BetHistorySingleCustomer,
            PermissionKeys.BetHistoryRefNo,
            PermissionKeys.BetHistoryRunning,
            PermissionKeys.BetHistoryBookedBet
        };
    }
}