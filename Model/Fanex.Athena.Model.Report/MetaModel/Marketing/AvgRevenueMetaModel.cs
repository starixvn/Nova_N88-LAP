namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    public class AvgRevenueMetaModel : BaseMarketingMetaModel
    {
        public string ProductIds { get; set; }

        private string _baseCurrency = string.Empty;

        public string BaseCurrency
        {
            get
            {
                return _baseCurrency;
            }

            set
            {
                _baseCurrency = value?.ToLowerInvariant() ?? string.Empty;
            }
        }
    }
}