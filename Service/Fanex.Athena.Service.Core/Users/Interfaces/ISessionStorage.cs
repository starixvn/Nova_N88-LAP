using Fanex.Athena.Model.Auth;

namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    public interface ISessionStorage
    {
        string CaptchaCode { get; set; }

        LicenseeAuthInfo LicenseeAuthInfo { get; }

        UserAuthInfo UserAuthInfo { get; }

        UserSessionInfo UserSessionInfo { get; }

        void AssignSessions(UserAuthInfo userAuthInfo, LicenseeAuthInfo licenseeAuthInfo);

        void AssignSessions(UserSessionInfo userSession, LicenseeAuthInfo licenseeAuthInfo);
    }
}