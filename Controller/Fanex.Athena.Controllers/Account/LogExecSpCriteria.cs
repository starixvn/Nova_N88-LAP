using Fanex.Data.Repository;
using System;

namespace Fanex.Athena.Controllers.Account
{
    public class LogExecSpCriteria : CriteriaBase
    {
        public int CurrentUserId { get; set; }

        public int CurrentSiteId { get; set; }

        public DateTime LogDate { get; set; }

        public string LoginIp { get; set; }

        public override string GetSettingKey()
        {
            return string.Empty;
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
