namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Model.Report.DTO;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.NVC.Authentication.Infrastructure;
    using Model.Core.ViewModel;
    using System;
    using System.Collections.Generic;

    public class CashOutWinLossViewModel : BaseViewModel
    {
        public bool IsLicenseeOfferBA { get; set; }

        public IList<CashOutWinLoss> MainResult { get; set; }

        public IDictionary<string, CashOutWinLoss> SummaryTotal { get; set; }

        public IEnumerable<CashOutWinLoss> TotalData { get; set; }

        public ThirdPartyWinLossMetaModel Param { get; set; }

        [CLSCompliant(false)]
        public IEnumerable<Brand> Brands { get; set; }
    }
}