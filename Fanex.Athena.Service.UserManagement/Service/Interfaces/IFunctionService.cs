namespace Fanex.Athena.Service.UserManagement.Service.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Model;

    public interface IFunctionService
    {
        List<FunctionPolicy> GetByGroupAndSite(int groupId, int siteId, string env);

        List<AccFunction> GetBySiteInHierarchy(int siteId, string env = Constant.Uat, bool? isActive = null);

        List<FunctionPolicy> GetByUserAndSite(int userId, int siteId, string env = Constant.Uat);

        List<FunctionPolicy> GetByUserAndSiteIncludeGroup(int userId, int siteId, string env = Constant.Uat);
    }
}