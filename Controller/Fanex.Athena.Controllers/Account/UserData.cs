using System;

namespace Fanex.Athena.Controllers.Account
{
    public class UserData
    {
        public int Level { get; set; }
        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string UserPwd { get; set; }
        public DateTime LastLoginDate { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public short GroupId { get; set; }
        public string GroupName { get; set; }
        public int CreatorId { get; set; }
        public string CreatorUsername { get; set; }
        public int ModifierId { get; set; }
        public string ModifierUsername { get; set; }
        public DateTime CreatedDateUserSite { get; set; }
        public DateTime ModifiedDateUserSite { get; set; }
        public int CreatorIdUserSite { get; set; }
        public string CreatorUsernameUserSite { get; set; }
        public int ModifierIdUserSite { get; set; }
        public string ModifierUsernameUserSite { get; set; }
        public bool IsActive { get; set; }
        public DateTime LastLoginDateUserSite { get; set; }
        public byte SiteId { get; set; }
        public string SiteName { get; set; }

        public int Status { get; set; }
    }
}