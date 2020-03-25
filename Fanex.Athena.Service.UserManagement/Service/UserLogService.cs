namespace Fanex.Athena.Service.UserManagement.Service
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Repository;

    public class UserLogService
    {
        private readonly CommonRepository commonRepository;

        public UserLogService()
        {
            commonRepository = new CommonRepository();
        }

        public IEnumerable<UserLoginLog> GetAllLoginLog(GetAllLogUserLoginCriteria criteria)
        {
            return commonRepository.FetchData<UserLoginLog>(criteria);
        }

        public IEnumerable<LogExecSp> GetExecSPLog(GetAllLogCriteria criteria)
        {
            return commonRepository.FetchData<LogExecSp>(criteria);
        }
    }
}