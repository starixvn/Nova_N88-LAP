using Fanex.Athena.Model.Core.MetaModel;
using System;

namespace Fanex.Athena.Model.Report.MetaModel
{
    public class WinLossMetaModel : IMetaModelValidation, IMetaModelLicenseeId, IMetaModelCurrencyIdList, IMetaModelIncludedTestData
    {
        private const int DefaultPageSize = 500;
        private const int MaxPageSize = 2000;

        public WinLossMetaModel()
        {
            PageIndex = 1;
            PageSize = DefaultPageSize;
        }

        public int LicenseeId { get; set; }
        public byte DateType { get; set; }
        public byte GroupBy { get; set; }
        public DateTime FromDate { get; set; }
        public DateTime ToDate { get; set; }
        public string ProductIds { get; set; }
        public string UserName { get; set; }
        public string CurrencyIdList { get; set; }
        public bool IsIncludedTestData { get; set; }
        public bool IsNoDrawTicket { get; set; }
        public int PageIndex { get; set; }
        public int PageSize { get; set; }

        private string _baseCurrency = string.Empty;

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

        public bool IsValid => LicenseeId > 0 &&
            GroupBy >= 1 && GroupBy <= 5 &&
            DateType >= 1 && DateType <= 2 &&
            FromDate <= ToDate &&
            PageSize <= MaxPageSize;
    }
}