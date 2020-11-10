namespace Fanex.Athena.Service.UserManagement.Service
{
    using System.Collections.Generic;
    using System.Linq;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Data.Repository;

    public class GroupService : IGroupService
    {
        private readonly ICommonRepository _commonRepository;

        public GroupService(ICommonRepository commonRepository)
        {
            _commonRepository = commonRepository;
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
                return this._commonRepository.FetchData<GroupData>(criteria).OrderBy(g => g.GroupName);
            }

            return Enumerable.Empty<GroupData>();
        }

        public CommandResult ExecuteNonQuery(INonQueryCommand criteria)
        {
            if (criteria.IsValid())
            {
                return this._commonRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public GroupData Get(ICriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this._commonRepository.FetchData<GroupData>(criteria).FirstOrDefault();
            }

            return null;
        }
    }
}