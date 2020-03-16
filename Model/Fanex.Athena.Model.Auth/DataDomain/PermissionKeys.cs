namespace Fanex.Athena.Model.Auth.DataDomain
{
    public static class PermissionKeys
    {

        /*NAP Menu Permission*/
        public const string UserManagement = "UserManagement";
        public const string ReportLicenseeWinLoss = "LicenseeWinLoss";
        public const string ReportCustomerWinLoss = "CustomerWinLoss";
        public const string ReportCashOutWinLoss = "CashOutWinLoss";
        public const string BettingTicketCenter = "BettingTicketCenter";
        public const string BtcAdvancedSearch = "BtcAdvancedSearch";


        public const string GroupReport = "REPORTS3";
        public const string GroupCustomerReport = "CUSTOMERREPORTS52";
        public const string GroupCustomerInformation = "CUSTOMERINFORMATION4";
        public const string GroupAccountManagement = "ACCOUNTMANAGEMENT6";

        /* Report */

        public const string ReportCustomerPendingFunds = "CustomerPendingFunds30";
        public const string ReportMatchWinLoss = "MatchWinLoss31";
        public const string ReportWinLossByProduct = "WinLossByProducts32";
        public const string ReportWinLossByBetType = "WinLossByBetType33";
        public const string ReportCancelledBets = "CancelledBets36";
        public const string ReportDailyBetList = "DailyBetList37";
        public const string ReportLiveReport = "LiveReport38";
        public const string ReportTurnover = "Turnover39";
        public const string ReportResults = "Results41";
        public const string ReportWinLossByLeague = "WinLossByLeague59";
        public const string ReportPlatformWinLoss = "MobileWinLoss53";
        public const string ReportColossusBetsWinLoss = "ColossusBetsWinLoss71";
        public const string ReportExchangeWinLoss = "ExchangeWinloss77";

        /* Customer Info. */

        public const string CustomerInfoCustomerList = "CustomerList43";
        public const string CustomerInfoSpecialBA = "SpecialBA54";
        public const string CustomerInfoCommissionGroupList = "CommissionGroupList55";
        public const string CustomerInfoCustomerLog = "CustomerLog56";
        public const string CustomerInfoEditBetSetting = "EditBetSetting70";

        /*Notification*/

        public const string ResultAmendmentNotificationReport = "ResultAmendment_Recalculation75";

        public const string BetHistory = "BetHistory";
        public const string BetHistorySingleCustomer = "BetHistory_SingleCustomer";
        public const string BetHistoryRefNo = "BetHistory_RefNo";
        public const string BetHistoryRunning = "BetHistory_Running";
        public const string BetHistoryAdvancedSearch = "BetHistory_AdvancedSearch";

        /*External*/
        public const string DashboardCustomerBalance = "n_customer_balance";
        public const string DashboardLicenseeWinLossByPlatform = "c_licWL";
        public const string DashboardPendingFund = "n_pending_funds";
        public const string DashboardTodayDeposit = "n_deposit";
        public const string DashboardTodayWithdrawal = "n_withdrawal";
        public const string DashboardTurnoverByPlatform = "c_turnover";

        public const string PlayerAdmin = "PlayerAdmin";
        public const string PlayerAdminUpdateBaStatus = "pa_BA_ctl";
        public const string PlayerAdminUpdateSpecialLevel = "pa_lv_ctl";
        public const string PlayerAdminUpdateOddsGroup = "pa_odds_g_ctl";

        public const string PlayerAdminStatement = "pa_statement";
        public const string PlayerAdminBetList = "pa_r_bl";
        public const string PlayerAdminBetLimit = "pa_bet_lm";
        public const string PlayerAdminBetLimit_Write = "pa_bet_lm_w";
        public const string PlayerAdminLog = "pa_log";

        public const string AccountInfo = "pa_acc_Info";
    }
}