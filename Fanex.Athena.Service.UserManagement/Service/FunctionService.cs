namespace Fanex.Athena.Service.UserManagement.Service
{
    using System.Collections.Generic;
    using System.Linq;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository.Interfaces;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;

    public class FunctionService : IFunctionService
    {
        private readonly IFunctionRepository functionRepository;

        public FunctionService(IFunctionRepository functionRepository)
        {
            this.functionRepository = functionRepository;
        }

        public List<FunctionPolicy> GetByGroupAndSite(int groupId, int siteId, string env)
        {
            var criteria = new GetByGroupAndSiteFunctionCriteria
            {
                GroupId = groupId,
                SiteId = siteId,
                Environment = env
            };

            if (criteria.IsValid())
            {
                return this.functionRepository.GetByGroupAndSite(criteria).ToList();
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
                IEnumerable<AccFunction> functionList = this.functionRepository.GetBySiteInHierarchy(criteria)
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
                return this.functionRepository.GetByGroupAndSite(criteria).ToList();
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
                return this.functionRepository.GetByGroupAndSite(criteria).ToList();
            }

            return new List<FunctionPolicy>();
        }

        private List<AccFunction> SortFunctionsInHierarchy(List<AccFunction> functionList, int parentId = 0)
        {
            var sortedFunctionList = new List<AccFunction>();

            foreach (AccFunction function in functionList)
            {
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