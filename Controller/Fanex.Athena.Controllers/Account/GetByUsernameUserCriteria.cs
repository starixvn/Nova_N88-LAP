using Fanex.Data.Repository;

namespace Fanex.Athena.Controllers.Account
{
    public class GetByUsernameUserCriteria : CriteriaBase
    {
        public string Username { get; set; }

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
