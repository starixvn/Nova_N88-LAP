using Fanex.Data.Repository;
using System;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public abstract class LogExecSpCriteria : NonQueryCommand
    {
        public int CurrentUserId { get; set; }

        public int CurrentSiteId { get; set; }

        public DateTime LogDate { get; set; }

        public string LoginIp { get; set; }      
    }
}
