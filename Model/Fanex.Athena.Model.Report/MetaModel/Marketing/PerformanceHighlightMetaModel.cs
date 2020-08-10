namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    using System;

    public class PerformanceHighlightMetaModel : BaseMarketingMetaModel
    {
        public DateTime CompareFromDate { get; set; }
        public DateTime CompareToDate { get; set; }

        public override bool IsValid => base.IsValid &&
            CompareFromDate <= CompareToDate &&
            FromDate > CompareToDate;
    }
}