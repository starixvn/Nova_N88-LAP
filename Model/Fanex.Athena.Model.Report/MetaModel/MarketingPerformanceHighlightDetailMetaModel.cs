using System;

namespace Fanex.Athena.Model.Report.MetaModel
{
    public class MarketingPerformanceHighlightDetailMetaModel
    {
        public string SelectedBox { get; set; }
        public string BaseCurrency { get; set; }
        public int SelectedBrand { get; set; }
        public bool AllowedCompare { get; set; }
        public string CompareFromDate { get; set; }
        public string CompareToDate { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
    }
}