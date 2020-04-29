using Fanex.Athena.Model.Core.MetaModel.Product;
using Fanex.Athena.Model.Core.ViewModel;
using System.Collections.Generic;

namespace Fanex.Athena.Model.Report.ViewModel
{
    public class WinLossViewModel : BaseViewModel
    {
        public string BaseCurrency { get; set; }
        public IEnumerable<ProductOption> ProductOptionList { get; set; }
    }
}