using Fanex.Athena.Resources;
using Fanex.Data;
using Fanex.Data.Repository;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Controllers.Account
{
    public class ResetPasswordCustCriteria : NonQueryCommand
    {
        public ResetPasswordCustCriteria()
        {
            LogDate = DateTime.Now;
        }

        public int CustId { get; set; }

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        [Required]
        [Display(Name = "New_Password", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string UserPwd { get; set; }

        [Required]
        [Display(Name = "Confirm_Password", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [Compare("UserPwd",
            ErrorMessageResourceName = "PropertiesMustMatchErrMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [SpParam(Ignored = true)]
        public string ConfirmUserPwd { get; set; }

        [SpParam(Ignored = true)]
        public int SiteId { get; set; }

        [SpParam(Ignored = true)]
        public int PageIndex { get; set; }

        [SpParam(Ignored = true)]
        public int ReturnGroupId { get; set; }

        [SpParam(Ignored = true)]
        public string Token { get; set; }

        public int CurrentUserId { get; set; }

        public int CurrentSiteId { get; set; }

        public DateTime LogDate { get; set; }

        public string LoginIp { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Cust_UpdatePassword";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
