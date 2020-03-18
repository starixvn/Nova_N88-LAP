namespace Fanex.Athena.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using Fanex.Athena.Controllers.Account;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository;
    using Fanex.N88.Admin.Areas.UserControl.Controllers;

    public class GroupService
    {
        private readonly CommonRepository _commonepository;

        public GroupService()
        {
            _commonepository = new CommonRepository();
        }

        public IEnumerable<GroupData> GetAllWithNumOfUser(string name, string env = Constant.Uat, bool? isActive = null,
            bool isLicenseeGroup = true, int? siteId = null)
        {
            var criteria = new GetAllWithNumOfUserGroupCriteria
            {
                IsActive = isActive,
                GroupName = name,
                Environment = env,
                IsLicenseeGroup = isLicenseeGroup,
                SiteId = siteId
            };

            if (criteria.IsValid())
            {
                return this._commonepository.FetchData<GroupData>(criteria).OrderBy(g => g.GroupName);
            }

            return null;
        }

        public CommandResult Insert(InsertGroupCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this._commonepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

    }
}