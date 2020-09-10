namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using System;
    using System.Collections.Generic;

    public class WinLossViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<TpProduct> TpProducts { get; set; }
        public IEnumerable<Brand> Brands { get; set; }
        public int LimitMonthRange { get; set; }
        public DateTime MaxDate { get; set; }
        public DateTime MinDate { get; set; }
        public DateTime FromDate => MaxDate;
        public DateTime ToDate => MaxDate;
    }
}