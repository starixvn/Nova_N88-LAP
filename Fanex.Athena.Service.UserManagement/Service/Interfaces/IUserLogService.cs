namespace Fanex.Athena.Service.UserManagement.Service.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Data.Repository;

    public interface IUserLogService
    {
        IEnumerable<UserLoginLog> GetAllLoginLog(GetAllLogUserLoginCriteria criteria);

        IEnumerable<LogExecSp> GetExecSPLog(GetAllLogCriteria criteria);

        LogExecSp GetById(int logId);
    }
}