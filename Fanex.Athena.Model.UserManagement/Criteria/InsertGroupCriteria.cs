namespace Fanex.Athena.Model.UserManagement.Criteria
{
    using System;
    using System.ComponentModel.DataAnnotations;
    using Fanex.Athena.Resources;
    using Fanex.Data.Repository;

    public class InsertGroupCriteria : NonQueryCommand
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

        public int CreatedBy { get; set; }

        public DateTime CreatedDate { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int? SiteId { get; set; }

        public int CurrentSiteId { get; set; }

        public int CurrentUserId { get; set; }

        public DateTime LogDate { get; set; }

        public string LoginIP { get; set; }

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
