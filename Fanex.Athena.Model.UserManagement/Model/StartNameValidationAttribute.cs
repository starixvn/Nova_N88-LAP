using System;
using System.ComponentModel.DataAnnotations;

namespace Fanex.Athena.Model.UserManagement.Model
{
    [AttributeUsage(AttributeTargets.All)]
    public class StartNameValidationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string strValue = value as string;
            if (!string.IsNullOrEmpty(strValue))
            {
                return !strValue.ToLowerInvariant().StartsWith("starix");
            }

            return true;
        }
    }
}