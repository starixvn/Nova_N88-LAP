namespace Fanex.Athena.Model.UserManagement.Criteria
{
    using Fanex.Data.Repository;

    public class GetByIdGroupCriteria : CriteriaBase
    {
        public int GroupId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_GetById";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}