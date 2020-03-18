namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System;
    using Fanex.Athena.Controllers.Account;

    public class UpdateStatusGroupCriteria : LogExecSpCriteria
    {
        public int GroupId { get; set; }

        public bool IsActive { get; set; }

        public int ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_UpdateStatus";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}