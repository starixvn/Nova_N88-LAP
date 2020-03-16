namespace Fanex.Athena.Model.PlayerManagement.ViewModel
{
    using System;

    public class PlayerStatementViewModel
    {
        public int CustId { get; set; }

        public int CurrencyId { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public DateTime MinDate { get; set; }
    }
}