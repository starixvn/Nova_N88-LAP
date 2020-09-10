namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Core.DTO.Common;
    using System;
    using System.Collections.Generic;

    public class MarketingViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<TpProduct> TpProducts { get; set; }
        public Brand OwnBrand { get; set; }
        public IEnumerable<Brand> Brands { get; set; }
        public DateTime Today { get; set; }
        public DateTime MaxDate { get; set; }
        public DateTime MinDate { get; set; }
        public int LimitMonthRange { get; set; }
    }
}