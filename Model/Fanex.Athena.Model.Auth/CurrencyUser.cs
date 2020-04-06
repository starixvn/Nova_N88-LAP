namespace Fanex.Athena.Model.Auth
{
    using System.Collections.Generic;

    public class CurrencyUser
    {
        public CurrencyUser()
        {
            CurrencyId = 0;
        }

        public int CurrencyId { get; set; }

        public string CurrencyName { get; set; }

        public bool IsActive { get; set; }

        public int AgentId { get; set; }

        public IEnumerable<int> AgentIdList { get; set; }
    }
}