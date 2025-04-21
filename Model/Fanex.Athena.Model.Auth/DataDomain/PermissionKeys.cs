namespace Fanex.Athena.Model.Auth.DataDomain
{
    public static class PermissionKeys
    {
        /*NAP Menu Permission*/
        public const string ManageUser = "ManageLicenseeUser";
        public const string ReportCustomerWinLoss = "CustomerWinLoss";
        public const string ReportWinLoss = "WinLossReport";
        public const string ReportMarketing = "MarketingReport";
        public const string ReportBonusInfo = "BonusInfoReport";
        public const string ReportHouseWinLoss = "HouseWinLoss";
        public const string ReportExtraPayout = "ExtraPayoutReport";
        public const string ReportAbnormalBet = "AbnormalBetReport";
        public const string BtcAdvancedSearch = "BtcAdvancedSearch";
        public const string ManageGroup = "ManageLicenseeGroup";

        public const string GroupReport = "REPORTS3";
        public const string GroupCustomerReport = "CUSTOMERREPORTS52";
        public const string GroupCustomerInformation = "CUSTOMERINFORMATION4";
        public const string GroupAccountManagement = "ACCOUNTMANAGEMENT6";

        /* Customer Info. */
        public const string CustomerInfoSpecialBA = "SpecialBA54";
        public const string CustomerInfoCommissionGroupList = "CommissionGroupList55";
        public const string CustomerInfoCustomerLog = "CustomerLog";

        public const string BetHistory = "BetHistory";
        public const string BetHistorySingleCustomer = "BetHistory_SingleCustomer";
        public const string BetHistoryRefNo = "BetHistory_RefNo";
        public const string BetHistoryRunning = "BetHistory_Running";
        public const string BetHistoryAdvancedSearch = "BetHistory_AdvancedSearch";
        public const string BetHistoryBookedBet = "BetHistory_BookedBet";

        /*External*/
        public const string PlayerAdmin = "PlayerAdmin";
        public const string PlayerAdminPlayerList = "PlayerAdminPlayerList";
        public const string PlayerAdminPlayerStatement = "PlayerAdminPlayerStatement";

        public const string PlayerAdminUpdateBaStatus = "PlayerAdmin_PL_BA";
        public const string PlayerAdminUpdateSpecialLevel = "PlayerAdmin_PL_SpecialLevel";
        public const string PlayerAdminUpdateOddsGroup = "PlayerAdmin_PL_OddGroups";

        public const string AccountInfo = "pa_acc_Info";

        /*Notification*/
        public const string Resettlement = "Resettlement";
        public const string Bell = "Bell";

        /*Report*/
        public const string ReportWinlossAnalysis = "SabaWinLossAnalysis";

        /*BetList*/
        public const string BetlistViewIpvn = "ViewIPfromVN";

        /*ReportWinLoss Data*/
        public const string ReportWinLoss_GroupByDate = "ReportWinLoss_GroupByDate";
        public const string ReportWinLoss_GroupByMonth = "ReportWinLoss_GroupByMonth";
        public const string ReportWinLoss_GroupByPlayer = "ReportWinLoss_GroupByPlayer_Multiple";
        public const string ReportWinLoss_GroupByCurrency = "ReportWinLoss_GroupByCurrency";
        public const string ReportWinLoss_GroupByBrand = "ReportWinLoss_GroupByBrand";
        public const string ReportWinLoss_GroupByProduct = "ReportWinLoss_GroupByProduct";
        public const string ReportWinLoss_ReportBetlist = "ReportWinLoss_ReportBetlist";

        /*Special Report Data*/
        public const string SpecialReportData = "SpecialReportData";
        public const string SpecialReportData_Turnover = "SpecialReportData_Turnover";
        public const string SpecialReportData_ValidTurnover = "SpecialReportData_ValidTurnover";
        public const string SpecialReportData_GGR = "SpecialReportData_GGR";
        public const string SpecialReportData_PlayerWinLoss = "SpecialReportData_PlayerWinLoss";
        public const string SpecialReportData_TotalDepositAmount = "SpecialReportData_TotalDepositAmount";
        public const string SpecialReportData_TotalWithdrawalAmount = "SpecialReportData_TotalWithdrawalAmount";
        public const string SpecialReportData_Margin = "SpecialReportData_Margin";
        public const string SpecialReportData_AvgBetAmount = "SpecialReportData_AvgBetAmount";

        /*Saba Coins*/
        public const string BetHistory_RefNo_SabaCoinsView = "BetHistory_RefNo_SabaCoinsView";
        public const string PlayerSabaCoins = "PlayerSabaCoins";
    }
}