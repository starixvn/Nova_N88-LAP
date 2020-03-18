namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using Fanex.Data.Repository;

    public class GetByNameGroupCriteria : CriteriaBase
    {
        public string GroupName { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int? SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_GetByName";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}