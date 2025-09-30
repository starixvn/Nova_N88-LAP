using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByIdUserCriteria : CriteriaBase
    {
        public int UserId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_GetById";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
