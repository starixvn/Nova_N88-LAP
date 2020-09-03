using System;

namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    public class NewlyRegisterUsersSummaryMetaModel : BaseMarketingMetaModel
    {
        public DateTime CompareFromDate { get; set; }
        public DateTime CompareToDate { get; set; }
        public string BaseCurrency { get; set; }

        public override bool IsValid => base.IsValid &&
            CompareFromDate <= CompareToDate &&
            FromDate > CompareToDate;
    }
}