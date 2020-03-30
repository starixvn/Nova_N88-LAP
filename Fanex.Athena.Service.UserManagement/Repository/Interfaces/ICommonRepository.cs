namespace Fanex.Athena.Service.UserManagement.Repository.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface ICommonRepository
    {
        IEnumerable<T> FetchData<T>(ICriteria criteria);

        CommandResult ExecuteNonQueryAsync(INonQueryCommand command);
    }
}