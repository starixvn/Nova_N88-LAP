using System;

namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    public class NewlyRegisterUsersExportMetaModel : BaseMarketingMetaModel
    {
        public DateTime CompareFromDate { get; set; }
        public DateTime CompareToDate { get; set; }
        public string BaseCurrency { get; set; }
        public byte SortbyId { get; set; }
        public bool IsSortAsc { get; set; }

        public override bool IsValid => base.IsValid
            && CompareFromDate <= CompareToDate
            && FromDate > CompareToDate
            && SortbyId >= 1 && SortbyId <= 6;
    }
}