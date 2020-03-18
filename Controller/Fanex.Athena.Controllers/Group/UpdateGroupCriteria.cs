namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using Fanex.Athena.Controllers.Account;
    using Fanex.Athena.Resources;

    public class UpdateGroupCriteria : LogExecSpCriteria
    {
        public int GroupId { get; set; }

        [Required]
        [Display(Name = "Name", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [RegularExpression(@"^[\w\s]{1,}$",
            ErrorMessageResourceName = "InvalidNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string GroupName { get; set; }

        [Display(Name = "Description", ResourceType = typeof(ViewResources))]
        [StringLength(200, MinimumLength = 0,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Status", ResourceType = typeof(ViewResources))]
        public bool IsActive { get; set; }

        public int ModifiedBy { get; set; }

        public DateTime ModifiedDate { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int? SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_Update";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}