using Fanex.Athena.Resources;
using Fanex.Data;
using System.ComponentModel.DataAnnotations;
using Fanex.Athena.Model.UserManagement.Enum;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class ResetPasswordCustCriteria : LogExecSpCriteria
    {
        public int UserId { get; set; }

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        [Required]
        [Display(Name = "NewPassword", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string UserPwd { get; set; }

        [Required]
        [Display(Name = "ConfirmPassword", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN2,
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
            return "N88_User_UpdatePassword";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
