using System;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class AssignSiteUserCriteria : LogExecSpCriteria
    {
        public int UserId { get; set; }

        public int SiteId { get; set; }

        public int Level { get; set; }

        public bool IsActive { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsNeverExpired { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_AssignNewSite";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
