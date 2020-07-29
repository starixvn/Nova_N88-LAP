namespace Fanex.Athena.Model.Report.MetaModel.Marketing
{
    public class UserActivitiesMetaModel : BaseMarketingMetaModel
    {
        public byte ViewMode { get; set; }

        public override bool IsValid => base.IsValid &&
            ViewMode > 0 && ViewMode < 3;
    }
}