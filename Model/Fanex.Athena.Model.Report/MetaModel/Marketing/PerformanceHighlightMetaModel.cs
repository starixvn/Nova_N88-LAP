namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    using Fanex.Athena.Model.Core.MetaModel;
    using System;

    public class PerformanceHighlightMetaModel : IMetaModelValidation, IMetaModelLicenseeId
    {
        public int LicenseeId { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }

        public DateTime CompareFromDate { get; set; }
        public DateTime CompareToDate { get; set; }

        public bool IsValid => LicenseeId > 0 &&
            FromDate <= ToDate &&
            CompareFromDate <= CompareToDate &&
            FromDate > CompareToDate;
    }
}