namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System;
    using System.Collections.Generic;

    public class MarketingViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<TpProduct> TpProducts { get; set; }
        public DateTime Today { get; set; }
    }
}