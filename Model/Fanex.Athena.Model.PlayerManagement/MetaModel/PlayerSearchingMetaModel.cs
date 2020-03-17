namespace Fanex.Athena.Model.PlayerManagement.MetaModel
{
    public class PlayerSearchingMetaModel : PlayerListBaseMetaModel
    {
        public byte SearchOption { get; set; }

        public string UserName { get; set; }

        public string SystemId { get; set; }

        public string OddsGroup { get; set; }

        public string SpecialLevel { get; set; }

        public byte BaFilter { get; set; }

        public int PageSize { get; set; }

        public int PageIndex { get; set; }
    }
}