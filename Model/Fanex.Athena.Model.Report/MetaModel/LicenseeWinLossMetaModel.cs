using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.NVC.Authentication.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Fanex.Athena.Model.Report.MetaModel
{
    [CLSCompliant(false)]
    public class LicenseeWinLossMetaModel : BaseDrilldownReportMetaModel, IBrandIdListMetaModel
    {
        public byte ReportBy { get; set; }

        public int DrawFilter { get; set; }

        public string DrillDownCurrencyName { get; set; }

        public string SortBy { get; set; }

        public string SortOrder { get; set; }

        public string DefaultBaseCurrency { get; set; }

        public IEnumerable<CheckedItem> BrandOptions { get; set; }

        public string BrandIds
        {
            get
            {
                return string.Join(",", BrandOptions.Where(_ => _.Checked).Select(_ => _.ID));
            }

            set { /* nothing */ }
        }
    }
}