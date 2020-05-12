namespace Fanex.Athena.Model.Report.ViewModel
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System.Collections.Generic;

    public class WinLossViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<TpProduct> TpProducts { get; set; }
        public IDictionary<int, string> CurrencyList { get; set; }
    }
}