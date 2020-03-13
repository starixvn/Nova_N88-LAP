namespace Fanex.Athena.Model.PlayerManagement.ViewModel
{
    using System.Collections.Generic;

    public class PlayerAdminViewModel
    {
        public IDictionary<int, string> CurrencyList { get; set; }

        public bool IsSubsidiary { get; set; }

        public bool IsAllowedCustomerComm { get; set; }

        public bool IsAllowedBA { get; set; }

        public string SiteName { get; set; }
    }
}