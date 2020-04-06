namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.Auth;

    public interface ISessionService
    {
        string CaptchaCode { get; set; }

        LicenseeAuthInfo LicenseeSession { get; }

        UserAuthInfo UserSession { get; }

        void AssignSessions(UserAuthInfo userSession, LicenseeAuthInfo licenseeSession);

        void CreateNewSession(
            int userId,
            int onuserId,
            string userName,
            string language = "en-US");

        bool UpdateLanguage(string languageCode);

        void AssignCurrenciesToUserSession(UserAuthInfo userSession, IEnumerable<CurrencyUser> currencyUserList = null);
    }
}