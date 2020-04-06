namespace Fanex.Athena.Service.PlayerManagement
{
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Fanex.Athena.DataAccess.Core;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;

    public class SearchCustomerService : BaseDataAccess, ISearchCustomerService
    {
        public async Task<IEnumerable<string>> SearchCustomers(int userId, string userName, string agentListXml, bool isIncludeDormant)
        {
            using (var db = this.GetObjectDb("Lrf_CustomerSelUserSearch"))
            {
                db.SetParameterValue("userid", userId);
                db.SetParameterValue("username", userName);
                db.SetParameterValue("AgentList", agentListXml);
                db.SetParameterValue("IsIncludeDormant", isIncludeDormant);
                return await db.QueryAsync<string>().ConfigureAwait(false);
            }
        }
    }
}