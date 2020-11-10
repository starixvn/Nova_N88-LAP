namespace Fanex.Athena.Model.UserManagement.Criteria
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Model.UserManagement.Enum;

    public class InsertGroupCriteria : LogExecSpCriteria
    {
        public int GroupId { get; set; }

        [Required]
        [Display(Name = "Name", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [RegularExpression(@"^[\w\s]{1,}$",
            ErrorMessageResourceName = "InvalidNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [StartNameValidation(
            ErrorMessageResourceName = "InvalidStartGroupNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string GroupName { get; set; }

        [Display(Name = "Description", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX200, MinimumLength = (int)StringLength.MIN_DEFAULT,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string Description { get; set; }

        [Required]
        [Display(Name = "Status", ResourceType = typeof(ViewResources))]
        public bool IsActive { get; set; }

        public int CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int? SiteId { get; set; }

        public string Language { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_Insert";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}