using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetAllGroupCriteria : CriteriaBase
    {
        public bool? IsActive { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_GetAll";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
