using Fanex.Data.Repository;

namespace Fanex.Athena.Controllers.Account
{
    public class GetBySiteFunctionCriteria : CriteriaBase
    {
        public int SiteId { get; set; }

        public string Environment { get; set; }

        public bool? IsActive { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Function_GetBySite";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
