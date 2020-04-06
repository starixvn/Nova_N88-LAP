using Fanex.Data.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fanex.Athena.Model.UserManagement.Criteria
{
    public class GetByIdUserCriteria : CriteriaBase
    {
        public int UserId { get; set; }

        public override string GetSettingKey()
        {
            return "N88_User_GetById";
        }

        public override bool IsValid()
        {
            return true;
        }
    }
}
