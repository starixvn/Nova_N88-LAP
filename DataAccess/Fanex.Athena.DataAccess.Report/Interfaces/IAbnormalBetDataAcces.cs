using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.Model.Report.DTO.AbnormalBet;

namespace Fanex.Athena.DataAccess.Report.Interfaces
{
    public interface IAbnormalBetDataAcces
    {
        Task<IEnumerable<SubIssue>> GetAbnormalSubIssue(string langKey);
    }
}