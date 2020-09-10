namespace Fanex.Athena.Model.Report.MetaModel
{
    using Fanex.Athena.Model.Core.MetaModel;
    using System;

    public class BaseMarketingMetaModel : IMetaModelValidation, IMetaModelBrandId
    {
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public int BrandId { get; set; }

        public virtual bool IsValid => BrandId > 0 && FromDate <= ToDate;
    }
}