using Fanex.Athena.Model.UserManagement.Criteria;
using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Service.UserManagement.Repository;
using Fanex.Data.Repository;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Fanex.Athena.Service.UserManagement.Service
{
    public class UserService
    {
        private readonly UserRepository userRepository;

        public UserService()
        {
            this.userRepository = new UserRepository();
        }

        public IEnumerable<SelectListItem> GetSettingGroups(ICriteria criteria)
        {
            return this.userRepository.GetSettingGroups(criteria);
        }

        public IEnumerable<UserLevel> SearchUser(SearchUserCriteria criteria)
        {
            return this.userRepository.GetUsers(criteria);
        }

        public CommandResult Insert(InsertCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public CommandResult Update(UpdateCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public CommandResult AssignFunction(AssignFunctionUserCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public CommandResult UpdatePassword(ResetPasswordCustCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public CommandResult AssignSite(AssignSiteUserCriteria criteria)
        {
            if (criteria.IsValid())
            {
                return this.userRepository.ExecuteNonQueryAsync(criteria);
            }

            return new CommandResult { Error = 1, Message = "Error" };
        }

        public bool CheckUsernameExist(string username)
        {
            var user = GetByUsername(username);

            return user != null && user.UserId != 0;
        }

        public UserData GetByUsername(string username)
        {
            var criteria = new GetByUsernameUserCriteria
            {
                Username = username
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

        public List<FunctionPolicy> GetByGroupAndSite(int groupId, int siteId, string env = Constant.Uat)
        {
            var criteria = new GetByGroupAndSiteFunctionCriteria
            {
                GroupId = groupId,
                SiteId = siteId,
                Environment = env
            };

            if (criteria.IsValid())
            {
                return this.userRepository.GetByGroupAndSite(criteria).ToList();
            }

            return new List<FunctionPolicy>();
        }

        public List<AccFunction> GetBySiteInHierarchy(int siteId, string env = Constant.Uat, bool? isActive = null)
        {
            var criteria = new GetBySiteFunctionCriteria
            {
                SiteId = siteId,
                Environment = env,
                IsActive = isActive
            };

            if (criteria.IsValid())
            {
                IEnumerable<AccFunction> functionList = this.userRepository.GetBySiteInHierarchy(criteria)
                    .Where(x => !Constant.IgnoredNapFunctions.Contains(x.Key))
                    .OrderBy(x => x.DisplayOrder);

                return this.SortFunctionsInHierarchy(functionList.ToList());
            }

            return new List<AccFunction>();
        }

        public List<FunctionPolicy> GetByUserAndSite(int userId, int siteId, string env = Constant.Uat)
        {
            var criteria = new GetByUserAndSiteFunctionCriteria
            {
                UserId = userId,
                SiteId = siteId,
                Environment = env
            };

            if (criteria.IsValid())
            {
                return this.userRepository.GetByGroupAndSite(criteria).ToList();
            }

            return new List<FunctionPolicy>();
        }

        public List<FunctionPolicy> GetByUserAndSiteIncludeGroup(int userId, int siteId, string env = Constant.Uat)
        {
            var criteria = new GetByUserAndSiteIncludeGroupFunctionCriteria
            {
                UserId = userId,
                SiteId = siteId,
                Environment = env
            };

            if (criteria.IsValid())
            {
                return this.userRepository.GetByGroupAndSite(criteria).ToList();
            }

            return new List<FunctionPolicy>();
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

        private List<AccFunction> SortFunctionsInHierarchy(List<AccFunction> functionList, int parentId = 0)
        {
            var sortedFunctionList = new List<AccFunction>();

            foreach (AccFunction function in functionList)
            {
                // top functions || sub functions
                if ((function.Parent == null && parentId == 0)
                    || (function.Parent != null && function.Parent.Id == parentId))
                {
                    sortedFunctionList.Add(function);
                    sortedFunctionList.AddRange(SortFunctionsInHierarchy(functionList, function.Id));
                }
            }

            return sortedFunctionList;
        }
    }
}
