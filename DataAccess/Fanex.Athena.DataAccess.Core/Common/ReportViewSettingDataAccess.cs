using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Model.Core.DTO.Configuration;
using Fanex.Common.Extensions;

namespace Fanex.Athena.DataAccess.Core.Common
{
    public class ReportViewSettingDataAccess : BaseDataAccess, IReportViewSettingDataAccess
    {
        public async Task<IEnumerable<ReportViewSetting>> GetReportViewSetting(string viewType)
        {
            var result = new List<ReportViewSetting>();

            using (var db = GetObjectDb("N88_ReportSettingType_Sel"))
            {
                var uspParam = new { ReportSettingType = viewType };
                using (var reader = await db.ExecuteReaderAsync(uspParam).ConfigureAwait(false))
                {
                    while (reader.Read())
                    {
                        var setting = new ReportViewSetting
                        {
                            Id = reader.ToInt("ReportSettingTypeId"),
                            Type = reader.ToString("Type"),
                            Value = reader.ToString("SettingValue"),
                            Name = reader.ToString("Description"),
                            Order = reader.ToInt("DisplayOrder")
                        };
                        result.Add(setting);
                    }
                }
            }

            return result;
        }
    }
}