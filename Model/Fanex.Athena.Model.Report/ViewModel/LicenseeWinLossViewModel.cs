namespace Fanex.Athena.Model.Report.ViewModel
{
    using Core.DTO.Configuration;
    using Fanex.Athena.Model.Report.DTO;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.NVC.Authentication.Infrastructure;
    using Model.Core.ViewModel;
    using System;
    using System.Collections.Generic;

    public class LicenseeWinLossViewModel : BaseViewModel
    {
        public IList<LicenseeWinLoss> MainResult { get; set; }

        public IDictionary<string, LicenseeWinLoss> SummaryTotal { get; set; }

        public LicenseeWinLossMetaModel Param { get; set; }

        public ReportSetting ReportSetting { get; set; }

        [CLSCompliant(false)]
        public IEnumerable<Brand> Brands { get; set; }

        public bool IsAllowedExtraPayout { get; set; }
    }
}