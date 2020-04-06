using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByUsernameUserCriteria : CriteriaBase
    {
        public string Username { get; set; }

        public int SiteId { get; set; }

        public bool IsLicenseeSite { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_GetByUsername";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
