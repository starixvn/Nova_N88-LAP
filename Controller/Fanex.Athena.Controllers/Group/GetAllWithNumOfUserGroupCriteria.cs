namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System.ComponentModel.DataAnnotations;
    using Fanex.Athena.Resources;
    using Fanex.Data.Repository;

    public class GetAllWithNumOfUserGroupCriteria : CriteriaBase
    {
        public bool? IsActive { get; set; }

        [Display(Name = "Group_Name", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 0,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string GroupName { get; set; }

        public string Environment { get; set; }

        public bool IsLicenseeGroup { get; set; }

        public int? SiteId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_Group_GetAllWithNumOfUser";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}