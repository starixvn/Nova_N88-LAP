namespace Fanex.Athena.Service.UserManagement.Service.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface IGroupService
    {
        IEnumerable<GroupData> GetAllWithNumOfUser(string name, string env = Constant.Uat, bool? isActive = null,
            bool isLicenseeGroup = true, int? siteId = null);

        CommandResult ExecuteNonQuery(INonQueryCommand criteria);

        GroupData Get(ICriteria criteria);
    }
}