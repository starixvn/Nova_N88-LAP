using Fanex.Athena.Model.Core.DTO.Common;
using System.Collections.Generic;

namespace Fanex.Athena.Model.Report.ViewModel
{
    public class WinLossViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<TpProduct> TpProducts { get; set; }
    }
}