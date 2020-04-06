namespace Fanex.Athena.Service.UserManagement.Service.Interfaces
{
    using System.Collections.Generic;
    using System.Web.Mvc;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface IUserService
    {
        IEnumerable<SelectListItem> GetSettingGroups(ICriteria criteria);

        IEnumerable<UserLevel> SearchUser(SearchUserCriteria criteria);

        CommandResult Insert(InsertCustCriteria criteria);

        CommandResult UpdateSite(UpdateSiteToUserCriteria criteria);

        CommandResult Update(UpdateCustCriteria criteria);

        CommandResult AssignFunction(AssignFunctionUserCriteria criteria);

        CommandResult UpdatePassword(ResetPasswordCustCriteria criteria);

        CommandResult AssignSite(AssignSiteUserCriteria criteria);

        bool CheckUsernameExist(string username, bool isLicenseeSite, int siteId);

        UserData GetByUsername(string username, bool isLicenseeSite, int siteId);

        User GetById(int id);

        Site GetSiteById(int id);

        int GetUserSiteLevel(int userId, int siteId);
    }
}