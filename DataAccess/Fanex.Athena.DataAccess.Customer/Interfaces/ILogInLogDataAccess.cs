namespace Fanex.Athena.DataAccess.Customer.Interfaces
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Fanex.Athena.Model.Customer.DTO.CustomerLog;

    public interface ILogInLogDataAccess
    {
        Task<IList<LogInLog>> GetDataList(int licenseeId, string username, string agentListXml);
    }
}