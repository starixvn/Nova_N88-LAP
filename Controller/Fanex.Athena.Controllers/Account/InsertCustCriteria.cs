using Fanex.Athena.Resources;
using Fanex.Data;
using Fanex.Data.Repository;
using System;
using System.ComponentModel.DataAnnotations;

namespace Fanex.Athena.Controllers.Account
{
    public class InsertCustCriteria : LogExecSpCriteria
    {   
        public int CustId { get; set; }

        [Display(Name = "FirstName", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 0,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string FirstName { get; set; }

        [Display(Name = "LastName", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 0,
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
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [RegularExpression(@"^[\w\s]{1,}$",
            ErrorMessageResourceName = "InvalidNameValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        public string Username { get; set; }

        [Required]
        [Display(Name = "Password", ResourceType = typeof(ViewResources))]
        [StringLength(50, MinimumLength = 2,
            ErrorMessageResourceName = "InputLengthValidationMsg",
            ErrorMessageResourceType = typeof(ViewResources))]
        [DataType(DataType.Password)]
        public string UserPwd { get; set; }

        [Display(Name = "Group", ResourceType = typeof(ViewResources))]
        public int GroupId { get; set; }

        [SpParam(Ignored = true)]
        public int SiteId { get; set; }

        [SpParam(Ignored = true)]
        public int PageIndex { get; set; }

        [SpParam(Ignored = true)]
        public int RerturnGroupId { get; set; }
        
        public override string GetSettingKey()
        {
            return "N88_Cust_Insert";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
