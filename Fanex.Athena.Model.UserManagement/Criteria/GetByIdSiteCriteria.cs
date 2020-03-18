using Fanex.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByIdSiteCriteria : CriteriaBase
    {
        public int SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Site_GetById";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
