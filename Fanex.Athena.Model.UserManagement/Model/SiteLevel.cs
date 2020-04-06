using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public class SiteLevel
    {
        public Site Site { get; set; }
        public int Level { get; set; }
        public bool IsActive { get; set; }
        public DateTime ExpiredDate { get; set; }
        public bool IsNeverExpired { get; set; }
        public DateTime LastLoginDate { get; set; }
        public User Creator { get; set; }
        public DateTime CreatedDate { get; set; }
        public User Modifier { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}
