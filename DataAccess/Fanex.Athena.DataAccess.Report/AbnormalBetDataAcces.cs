using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core;
using Fanex.Athena.DataAccess.Report.Interfaces;
using Fanex.Athena.Model.Report.DTO.AbnormalBet;

namespace Fanex.Athena.DataAccess.Report
{
    public class AbnormalBetDataAcces : BaseDataAccess, IAbnormalBetDataAcces
    {
        public async Task<IEnumerable<SubIssue>> GetAbnormalSubIssue(string langKey)
        {
            const string spName = "Lrf_AbnormalBet_SubIssueSel";
            using (var db = GetObjectDb(spName))
            {
                db.SetParameterValue("Langkey", langKey);
                using (var reader = await db.ExecuteReaderAsync().ConfigureAwait(false))
                {
                    var result = new List<SubIssue>();
                    while (reader.Read())
                    {
                        var record = new SubIssue
                        {
                            SubIssueTypeId = Convert.ToInt16(reader["SubIssueTypeId"]),
                            SubIssueTypeName = reader["SubIssueTypeName"] as string,
                        };
                        result.Add(record);
                    }
                    return result;
                }
            }
        }
    }
}