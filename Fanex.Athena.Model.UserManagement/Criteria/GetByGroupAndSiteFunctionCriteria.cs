using Fanex.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
