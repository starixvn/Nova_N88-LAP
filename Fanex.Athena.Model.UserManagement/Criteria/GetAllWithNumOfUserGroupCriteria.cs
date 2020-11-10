namespace Fanex.Athena.Model.UserManagement.Criteria
{
    using System.ComponentModel.DataAnnotations;
    using Fanex.Athena.Resources;
    using Fanex.Data.Repository;
    using Fanex.Athena.Model.UserManagement.Enum;

    public class GetAllWithNumOfUserGroupCriteria : CriteriaBase
    {
        public bool? IsActive { get; set; }

        [Display(Name = "Group_Name", ResourceType = typeof(ViewResources))]
        [StringLength((int)StringLength.MAX50, MinimumLength = (int)StringLength.MIN_DEFAULT,
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