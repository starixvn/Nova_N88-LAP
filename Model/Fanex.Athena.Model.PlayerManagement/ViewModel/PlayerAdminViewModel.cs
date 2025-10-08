namespace Fanex.Athena.Model.PlayerManagement.ViewModel
{
    using System.Collections.Generic;

    public class PlayerAdminViewModel
    {
        public IDictionary<int, string> CurrencyList { get; set; }

        public bool IsAllowedStatement { get; set; }

        public KeyValuePair<bool, int> IsAllowedBA { get; set; }

        public KeyValuePair<bool, int> IsAllowedOddGroup { get; set; }

        public KeyValuePair<bool, int> IsAllowedSpecialLevel { get; set; }

        public string SiteName { get; set; }

        public string PlayerTabItems { get; set; }
    }
}