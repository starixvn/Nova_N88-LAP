using Fanex.Athena.Resources;
using Fanex.Data;
using System.ComponentModel.DataAnnotations;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class ResetPasswordCustCriteria : LogExecSpCriteria
    {      
        public int CustId { get; set; }

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        [Required]
        [Display(Name = "NewPassword", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string UserPwd { get; set; }

        [Required]
        [Display(Name = "ConfirmPassword", ResourceType = typeof(ViewResources))]
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
