namespace Fanex.Athena.Model.Auth.DataDomain
{
    public static class PermissionKeys
    {
        public const string GroupReport = "REPORTS3";
        public const string GroupCustomerReport = "CUSTOMERREPORTS52";
        public const string GroupCustomerInformation = "CUSTOMERINFORMATION4";
        public const string GroupAccountManagement = "ACCOUNTMANAGEMENT6";

        /* Report */

        public const string ReportLicenseeWinLoss = "LicenseeWinLoss27";
        public const string ReportSettledMatchCount = "SettledMatchCount28";
        public const string ReportCustomerWinLoss = "CustomerWinLoss29";
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
        public const string ReportGoldDeluxeWinloss = "GoldDeluxeWinloss65";
        public const string ReportWeeklyLiveMatches = "WeeklyLiveMatches69";
        public const string ReportCustomerTurnover = "CustomerTurnover51";
        public const string ReportPlatformWinLoss = "MobileWinLoss53";
        public const string ReportColossusBetsWinLoss = "ColossusBetsWinLoss71";
        public const string ReportCashOutWinLoss = "CashOutWinLoss72";
        public const string ReportSubsidiaryPerformance = "SubsidiaryPerformance73";
        public const string ReportExchangeWinLoss = "ExchangeWinloss77";
        public const string ReportDailyBets = "DailyBets81";

        /* Customer Info. */

        public const string CustomerInfoCustomerList = "CustomerList43";
        public const string CustomerInfoSpecialBA = "SpecialBA54";
        public const string CustomerInfoCommissionGroupList = "CommissionGroupList55";
        public const string CustomerInfoCustomerLog = "CustomerLog56";
        public const string CustomerInfoEditBetSetting = "EditBetSetting70";

        /*Notification*/

        public const string ResultAmendmentNotificationReport = "ResultAmendment_Recalculation75";

        public const string BettingTicketCenter = "BTC79";
        public const string BtcAdvancedSearch = "BTC_MultiCustomer";
        public const string BtcSingleCustomer = "BTC_SingleCustomer";
        public const string BtcRefNo = "BTC_RefNo";
        public const string BtcRunning = "BTC_Running";

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