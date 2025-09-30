using Fanex.Athena.Model.Core.DTO.Common;

namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    public interface ILicenseeSettingService
    {
        Licensee GetLicenseeInfo(string licenseeName);
    }
}