namespace Fanex.Athena.Service.UserManagement.Service
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Data.Repository;

    public class UserService : IUserService
    {
        private const string ERROR_MSG = "Error";
        private readonly IUserRepository userRepository;

        public UserService(IUserRepository userRepository)
        {
            this.userRepository = userRepository;
        }

        public IEnumerable<SelectListItem> GetSettingGroups(ICriteria criteria)
        {
            return this.userRepository.GetSettingGroups(criteria);
        }

        public IEnumerable<UserLevel> SearchUser(SearchUserCriteria criteria)
        {
            return this.userRepository.GetUsers(criteria);
        }

        public IEnumerable<Setting> GetSetting(int id)
        {
            var criteria = new GetUserSettingCriteria
            {
                UserId = id
            };

            return this.userRepository.GetUserSetting(criteria);
        }

        public CommandResult UpdateSetting(SetDataLimitsCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult Insert(InsertCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult UpdateSite(UpdateSiteToUserCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult Update(UpdateCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult AssignFunction(AssignFunctionUserCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult UpdatePassword(ResetPasswordCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public CommandResult AssignSite(AssignSiteUserCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = ERROR_MSG };
        }

        public bool CheckUsernameExist(string username, bool isLicenseeSite, int siteId)
        {
            var user = GetByUsername(username, isLicenseeSite, siteId);

            return user != null && user.UserId != 0;
        }

        public UserData GetByUsername(string username, bool isLicenseeSite, int siteId)
        {
            var criteria = new GetByUsernameUserCriteria
            {
                Username = username,
                IsLicenseeSite = isLicenseeSite,
                SiteId = siteId
            };

            if (criteria.IsValid())
            {
                return this.userRepository.FetchData<UserData>(criteria).FirstOrDefault();
            }

            return null;
        }

        public User GetById(int id)
        {
            var criteria = new GetByIdUserCriteria
            {
                UserId = id
            };

            if (criteria.IsValid())
            {
                return this.userRepository.GetUserById(criteria);
            }

            return null;
        }

        public Site GetSiteById(int id)
        {
            var criteria = new GetByIdSiteCriteria
            {
                SiteId = id
            };

            if (criteria.IsValid())
            {
                return this.userRepository.FetchData<Site>(criteria).FirstOrDefault();
            }

            return null;
        }

        public int GetUserSiteLevel(int userId, int siteId)
        {
            var criteria = new GetUserSiteLevelUserCriteria
            {
                UserId = userId,
                SiteId = siteId
            };

            if (criteria.IsValid())
            {
                return this.userRepository.FetchData<int>(criteria).FirstOrDefault();
            }

            return -1;
        }
    }
}