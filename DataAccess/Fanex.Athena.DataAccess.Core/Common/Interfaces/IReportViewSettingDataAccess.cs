using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.Model.Core.DTO.Configuration;

namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    public interface IReportViewSettingDataAccess
    {
        Task<IEnumerable<ReportViewSetting>> GetReportViewSetting(string viewType);
    }
}