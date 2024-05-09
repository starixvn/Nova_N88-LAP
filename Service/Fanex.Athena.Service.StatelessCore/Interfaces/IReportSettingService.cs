using System.Collections.Generic;
using System.Threading.Tasks;
using Fanex.Athena.Model.Core.DTO.Configuration;

namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    public interface IReportSettingService
    {
        ReportSetting GetSetting(string reportKey, string licenseeName, int userDataRangeLimitation = 0);

        Task<IEnumerable<ReportViewSetting>> GetViewSetting(string viewType);
    }
}