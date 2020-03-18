using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public class Site
    {
        public byte Id { get; set; }

        public string Name { get; set; }

        public string SiteKey { get; set; }

        public string SecretAccessKey { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public string Environment { get; set; }

        public int NumOfUser { get; set; }
    }
}
