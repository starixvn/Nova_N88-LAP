namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Extension.Helper;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;

    public class PlayerSabaCoinsViewModel
    {
        public PlayerSabaCoinsViewModel()
        {
            var toDay = DateTimeHelper.Today;
            FromDate = toDay;
            ToDate = toDay;
        }

        public IDictionary<int, string> CurrencyList { get; set; }

        public SubsidiaryViewType ViewType { get; set; }

        public IEnumerable<CheckedItem> SubsidiaryList { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public DateTime MaxDate { get; set; }

        public DateTime MinDate { get; set; }

        public Brand OwnBrand { get; set; }

        public IEnumerable<Brand> Brands { get; set; }
    }
}