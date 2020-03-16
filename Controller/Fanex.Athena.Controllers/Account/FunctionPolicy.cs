using System;

namespace Fanex.Athena.Controllers.Account
{
    public class FunctionPolicy
    {
        public AccFunction Function { get; set; }

        public Site Site { get; set; }

        public int Policy { get; set; }

        public User Creator { get; set; }

        public DateTime CreatedDate { get; set; }

        public User Modifier { get; set; }

        public DateTime ModifiedDate { get; set; }
    }
}
