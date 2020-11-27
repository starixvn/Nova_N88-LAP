using Fanex.Athena.Resources;
using Fanex.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class AssignFunctionUserCriteria : LogExecSpCriteria
    {
        private const byte PERMISSION_READ = 1;
        private const byte PERMISSION_HOST = 2;
        private const string AssignPermissionTpl = "<FunctionPolicy SiteId='{0}' FunctionId='{1}' Policy='{2}'></FunctionPolicy>";

        public int UserId { get; set; }

        public string Value
        {
            get
            {
                var value = new StringBuilder("<ROOT>");

                if (this.FuncRead != null)
                {
                    foreach (var funcId in this.FuncRead)
                    {
                        value.AppendFormat(AssignPermissionTpl, this.SiteId, funcId, PERMISSION_READ); // 1 -> read
                    }
                }

                if (this.FuncHost != null)
                {
                    foreach (var funcId in this.FuncHost)
                    {
                        value.AppendFormat(AssignPermissionTpl, this.SiteId, funcId, PERMISSION_HOST); // 2 -> host
                    }
                }

                return value.Append("</ROOT>").ToString();
            }
        }

        public int ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        [Display(Name = "Site", ResourceType = typeof(ViewResources))]
        public int SiteId { get; set; }

        [SpParam(Ignored = true)]
        public int[] FuncRead { get; set; }

        [SpParam(Ignored = true)]
        public int[] FuncHost { get; set; }

        [SpParam(Ignored = true)]
        public int ReturnSiteId { get; set; }

        [SpParam(Ignored = true)]
        public int PageIndex { get; set; }

        [SpParam(Ignored = true)]
        public int GroupId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_AssignFunction";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
