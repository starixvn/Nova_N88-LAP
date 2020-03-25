using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByIdLogCriteria : CriteriaBase
    {
        public int LogId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_LogExecSp_GetById";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
