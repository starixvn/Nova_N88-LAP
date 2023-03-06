namespace Fanex.Athena.Model.Report.ViewModel
{
    using System;

    public class SpecialReportDataViewModel
    {
        public bool IsAllowedTurnover { get; set; }

        public bool IsAllowedValidTurnover { get; set; }

        public bool IsAllowedGGR { get; set; }

        public bool IsAllowedPlayerWinLoss { get; set; }

        public bool IsAllowedTotalDepositAmount { get; set; }

        public bool IsAllowedTotalWithdrawalAmount { get; set; }

        public bool IsAllowedMargin { get; set; }

        public bool IsAllowedAvgBetAmount { get; set; }
    }
}