using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.DTO.Configuration;

namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    public interface ILicenseeSettingService
    {
        Licensee GetLicenseeInfo(string licenseeName);
    }
}