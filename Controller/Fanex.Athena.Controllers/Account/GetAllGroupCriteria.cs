using Fanex.Data.Repository;

namespace Fanex.Athena.Controllers.Account
{
    public class GetAllGroupCriteria : CriteriaBase
    {
        public bool? IsActive { get; set; }

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
