using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetUserSiteLevelUserCriteria : CriteriaBase
    {
        public int UserId { get; set; }

        public int SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_GetUserSiteLevel";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
