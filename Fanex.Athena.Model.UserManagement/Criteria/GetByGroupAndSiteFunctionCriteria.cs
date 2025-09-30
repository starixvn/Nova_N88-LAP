using Fanex.Data.Repository;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByGroupAndSiteFunctionCriteria : CriteriaBase
    {
        public int GroupId { get; set; }

        public int SiteId { get; set; }

        public string Environment { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Function_GetByGroupAndSite";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
