using Fanex.Data.Repository;
using System;

namespace Fanex.Athena.Controllers.Account
{
    public class AssignSiteUserCriteria : NonQueryCommand
    {
        public AssignSiteUserCriteria()
        {
            LogDate = DateTime.Now;
        }

        public int UserId { get; set; }

        public int SiteId { get; set; }

        public int Level { get; set; }

        public bool IsActive { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsNeverExpired { get; set; }

        public int CurrentUserId { get; set; }

        public int CurrentSiteId { get; set; }

        public DateTime LogDate { get; set; }

        public string LoginIp { get; set; }

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
