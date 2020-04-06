namespace Fanex.Athena.DataAccess.Core.Users.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;

    public interface ILicenseeDataAccess
    {
        IResultInfo<bool> IsAllowUpdateMemberBAStatus(Request request, int licenseeId);

        Licensee GetLicenseeByName(string licenseeName);

        Licensee GetLicenseeSettingById(int licenseeId);
    }
}