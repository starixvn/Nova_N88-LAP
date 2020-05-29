// -----------------------------------------------------------------------
// <copyright file="BaseViewModel.cs" company="">
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Model.Core.ViewModel
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System.Collections.Generic;

    public class BaseViewModel
    {
        public bool IsAllowedCustomerCommission { get; set; }

        public ProductAccess ProductAccess { get; set; }

        public IDictionary<int, string> CurrencyList { get; set; }

        public bool ShowEmptyContent { get; set; }

        public bool HasAmountDueToColumn { get; set; }
    }
}