using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Resources;
using Fanex.Data;
using System.ComponentModel.DataAnnotations;
using Fanex.Athena.Model.UserManagement.Enum;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class InsertCustCriteria : LogExecSpCriteria
    {
        public int UserId { get; set; }

        [Display(Name = "FirstName", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN_DEFAULT,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string FirstName { get; set; }

        [Display(Name = "LastName", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN_DEFAULT,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string LastName { get; set; }

        [Display(Name = "Email", ResourceType = typeof(ViewResources))]
        [RegularExpression(@"\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*",
            ErrorMessageResourceName = "EmailFormatValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string Email { get; set; }

        [Required]
        [Display(Name = "Username", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [RegularExpression(@"^[\w\s]{1,}$",
            ErrorMessageResourceName = "InvalidNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [StartNameValidation(
            ErrorMessageResourceName = "InvalidStartNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string Username { get; set; }

        [Required]
        [Display(Name = "Password", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [DataType(DataType.Password)]
        public string UserPwd { get; set; }

        [Display(Name = "Group", ResourceType = typeof(ViewResources))]
        public int GroupId { get; set; }

        [Display(Name = "DefaultBaseCurency", ResourceType = typeof(ViewResources))]
        public int DefaultBaseCurrencyId { get; set; }

        public int SiteId { get; set; }

        public bool IsLicenseeUser { get; set; }

        [SpParam(Ignored = true)]
        public int PageIndex { get; set; }

        [SpParam(Ignored = true)]
        public int RerturnGroupId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_Insert";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}