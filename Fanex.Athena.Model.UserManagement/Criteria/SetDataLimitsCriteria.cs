using Fanex.Data;
using System;
using System.Text;
using Fanex.Athena.Model.Core.DataDomain;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class SetDataLimitsCriteria : LogExecSpCriteria
    {
        private const string UpdateSettingTpl = "<UserSetting SettingKey='{0}' SettingValue='{1}'></UserSetting>";

        public int UserId { get; set; }

        public string Value
        {
#pragma warning disable S1541 // Methods and properties should not be too complex
            get
#pragma warning restore S1541 // Methods and properties should not be too complex
            {
                var value = new StringBuilder("<ROOT>");

                if (IsAllReportDataLimitsApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.LimitDays, AllReportDataLimits);
                }

                if (IsWinLossAnalysisSinglePlayerApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_SinglePlayer, 1);
                }

                if (WinLossAnalysisDataLimitsTop.IsTurnoverApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_TopTO, WinLossAnalysisDataLimitsTop.Value);
                }

                if (WinLossAnalysisDataLimitsTop.IsGGRApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_TopGGR, WinLossAnalysisDataLimitsTop.Value);
                }

                if (WinLossAnalysisDataLimitsTop.IsBetCountApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_TopBetCount, WinLossAnalysisDataLimitsTop.Value);
                }

                if (WinLossAnalysisDataLimitsTop.IsAvgBetAmountApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_TopAvgBetAmount, WinLossAnalysisDataLimitsTop.Value);
                }

                if (WinLossAnalysisDataLimitsBottom.IsTurnoverApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_BottomTO, WinLossAnalysisDataLimitsBottom.Value);
                }

                if (WinLossAnalysisDataLimitsBottom.IsGGRApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_BottomGGR, WinLossAnalysisDataLimitsBottom.Value);
                }

                if (WinLossAnalysisDataLimitsBottom.IsBetCountApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_BottomBetCount, WinLossAnalysisDataLimitsBottom.Value);
                }

                if (WinLossAnalysisDataLimitsBottom.IsAvgBetAmountApplied)
                {
                    value.AppendFormat(UpdateSettingTpl, SettingKey.WLAnalysis_BottomAvgBetAmount, WinLossAnalysisDataLimitsBottom.Value);
                }

                return value.Append("</ROOT>").ToString();
            }
        }

        public int ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        [SpParam(Ignored = true)]
        public int? AllReportDataLimits { get; set; }

        [SpParam(Ignored = true)]
        public bool IsAllReportDataLimitsApplied { get; set; }

        [SpParam(Ignored = true)]
        public bool IsWinLossAnalysisSinglePlayerApplied { get; set; }

        [SpParam(Ignored = true)]
        public GroupDataPermission WinLossAnalysisDataLimitsTop { get; set; } = new GroupDataPermission();

        [SpParam(Ignored = true)]
        public GroupDataPermission WinLossAnalysisDataLimitsBottom { get; set; } = new GroupDataPermission();

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Setting_UpdateByUser";
        }

        public override bool IsValid()
        {
            return UserId > 0;
        }
    }

    public class GroupDataPermission
    {
        public bool IsApplied { get; set; }

        public int? Value { get; set; }

        public bool IsTurnoverApplied { get; set; }

        public bool IsGGRApplied { get; set; }

        public bool IsBetCountApplied { get; set; }

        public bool IsAvgBetAmountApplied { get; set; }
    }
}