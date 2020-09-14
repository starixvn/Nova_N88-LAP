namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    public class NewlyRegisterUsersDetailsMetaModel : BaseMarketingMetaModel
    {
        private const int DefaultPageSize = 500;
        private const int MaxPageSize = 2000;

        public NewlyRegisterUsersDetailsMetaModel()
        {
            PageIndex = 1;
            PageSize = DefaultPageSize;
        }

        public byte SortbyId { get; set; }
        public bool IsSortAsc { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }
        public string BaseCurrency { get; set; }

        public override bool IsValid => base.IsValid && SortbyId >= 1 && SortbyId <= 6
            && PageIndex >= 1 && PageSize <= MaxPageSize;
    }
}