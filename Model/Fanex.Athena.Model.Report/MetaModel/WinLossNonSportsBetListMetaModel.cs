namespace Fanex.Athena.Model.Report.MetaModel
{
    public class WinLossNonSportsBetListMetaModel
    {
        public int CustId { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string UserName { get; set; }
        public string SabaSystemId { get; set; }

        public string BaseCurrency { get; set; }
        public string OriginalCurrency { get; set; }
        public int DateType { get; set; }
        public bool DrilldownInOriginalCurrency { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
        public bool IsNoDrawTicket { get; set; }
        public int Timezone { get; set; }
    }
}