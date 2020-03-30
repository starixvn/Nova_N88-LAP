namespace Fanex.Athena.Service.UserManagement.Repository.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface IFunctionRepository
    {
        IEnumerable<AccFunction> GetBySiteInHierarchy(ICriteria criteria);

        IEnumerable<FunctionPolicy> GetByGroupAndSite(ICriteria criteria);
    }
}