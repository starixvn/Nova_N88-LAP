using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetUserSettingCriteria : CriteriaBase
    {
        public int UserId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Setting_GetByUser";
        }

        public override bool IsValid()
        {
            return UserId > 0;
        }
    }
}