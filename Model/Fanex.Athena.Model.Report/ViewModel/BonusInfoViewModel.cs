namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;

    [CLSCompliant(false)]
    public class BonusInfoViewModel : SpecialReportDataViewModel
    {
        public string BaseCurrency { get; set; }

        public Brand OwnBrand { get; set; }

        public IEnumerable<Brand> Brands { get; set; }

        public DateTime Today { get; set; }

        public DateTime MaxDate { get; set; }

        public DateTime MinDate { get; set; }

        public int LimitMonthRange { get; set; }

        public DateTime FromDate => MaxDate;

        public DateTime ToDate => MaxDate;
    }
}