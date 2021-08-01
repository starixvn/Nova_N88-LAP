using Fanex.Athena.Resources;
using Fanex.Data;
using System.ComponentModel.DataAnnotations;
using Fanex.Athena.Model.UserManagement.Enum;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class UpdateCustCriteria : LogExecSpCriteria
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

        [Display(Name = "Group", ResourceType = typeof(ViewResources))]
        public int GroupId { get; set; }

        [Display(Name = "DefaultBaseCurency", ResourceType = typeof(ViewResources))]
        public int DefaultBaseCurrencyId { get; set; }

        [SpParam(Ignored = true)]
        public string DefaultBaseCurrencyName { get; set; }

        [SpParam(Ignored = true)]
        public bool IsLicenseeUser { get; set; }

        [SpParam(Ignored = true)]
        public string Username { get; set; }

        [SpParam(Ignored = true)]
        public int SiteId { get; set; }

        [SpParam(Ignored = true)]
        public int PageIndex { get; set; }

        [SpParam(Ignored = true)]
        public int ReturnGroupId { get; set; }

        public int? DataRangeLimitation { get; set; }

        [SpParam(Ignored = true)]
        public bool DataRangeLimitationRadio { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_Update";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}