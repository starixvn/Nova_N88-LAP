using Fanex.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Controllers.Account
{
    public class GetUserSiteLevelUserCriteria : CriteriaBase
    {
        public int UserId { get; set; }

        public int SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_GetUserSiteLevel";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
