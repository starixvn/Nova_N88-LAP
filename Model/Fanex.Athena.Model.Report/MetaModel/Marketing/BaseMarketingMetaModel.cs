namespace Fanex.Athena.Model.Report.MetaModel
{
    using Fanex.Athena.Model.Core.MetaModel;
    using System;

    public class BaseMarketingMetaModel : IMetaModelValidation, IMetaModelLicenseeId
    {
        public int LicenseeId { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }

        public virtual bool IsValid => LicenseeId > 0 && FromDate <= ToDate;
    }
}