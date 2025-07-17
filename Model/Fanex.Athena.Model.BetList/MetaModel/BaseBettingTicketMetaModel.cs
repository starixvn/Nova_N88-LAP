namespace Fanex.Athena.Model.BetList.MetaModel
{
    using Fanex.Athena.Model.Core.Helper;
    using Fanex.Athena.Model.Core.MetaModel;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;

    public class BaseBettingTicketMetaModel : IMetaModelValidation, IMetaModelAgent, IMetaModelCurrencyIdList, IBrandIdMetaModel, IMetaModelShowIPVN, IMetaModelProductCodeList
    {
        private const int DefaultPageSize = 50;

        private const int DefaultSortOrder = 1;

        private string _baseCurrency = string.Empty;

        private string _userName;

        public BaseBettingTicketMetaModel()
        {
            PageIndex = 1;
            PageSize = DefaultPageSize;
            SortOrder = DefaultSortOrder;
        }

        public string CurrencyIdList { get; set; }

        public string BaseCurrency
        {
            get
            {
                return _baseCurrency;
            }

            set
            {
                _baseCurrency = value == null
                    ? string.Empty
                    : value.ToLowerInvariant();
            }
        }

        public string AgentListXml { get; set; }

        public bool IsExcludedTestData { get; set; }

        public bool ViewSabaCoins { get; set; }

        public int PageSize { get; set; }

        public int PageIndex { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public string ProductCodeList { get; set; }

        public string OriginalProductCodeList { get; set; }

        public string UserName
        {
            get
            {
                return _userName;
            }

            set
            {
                _userName = value?.Trim();
            }
        }

        public string Status { get; set; }

        public bool IsExport { get; set; }

        public byte SortType { get; set; }

        public byte SortOrder { get; set; }

        public virtual bool IsValid => FromDate <= ToDate
            && !string.IsNullOrWhiteSpace(ProductCodeList)
            && BrandId > 0
            && MetaModelHelper.ValidateBaseCurrency(BaseCurrency);

        public bool HasPlayerCom { get; set; }

        public bool IsConvertAll { get; set; }

        public string BaseCurrencyName { get; set; }

        public int BrandId { get; set; }

        public bool IsShowIpvn { get; set; }
    }
}