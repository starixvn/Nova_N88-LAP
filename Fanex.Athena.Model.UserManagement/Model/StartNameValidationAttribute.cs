using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Model
{
    public class StartNameValidationAttribute : ValidationAttribute
    {
        public override bool IsValid(object value)
        {
            string strValue = value as string;
            if (!string.IsNullOrEmpty(strValue))
            {
                return !strValue.StartsWith("starix");
            }

            return true;
        }
    }
}
