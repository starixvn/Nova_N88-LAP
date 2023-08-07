namespace Fanex.Athena.Service.UserManagement.Repository.Interfaces
{
    using System.Collections.Generic;
    using System.Web.Mvc;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface IUserRepository
    {
        IEnumerable<SelectListItem> GetSettingGroups(ICriteria criteria);

        IEnumerable<UserLevel> GetUsers(ICriteria criteria);

        IEnumerable<Setting> GetUserSetting(ICriteria criteria);

        IEnumerable<T> FetchData<T>(ICriteria criteria);

        CommandResult ExecuteNonQueryAsync(INonQueryCommand command);

        User GetUserById(ICriteria criteria);
    }
}