using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class UpdateSiteToUserCriteria : LogExecSpCriteria
    {
        public int UserId { get; set; }

        public int SiteId { get; set; }

        public int Level { get; set; }

        public bool IsActive { get; set; }

        public int ModifiedBy { get; set; }

        public bool IsNeverExpired { get; set; }

        public DateTime ModifiedDate { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_UpdateSite";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
