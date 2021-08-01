namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using Fanex.N88.Core.Models;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;

    [CLSCompliant(false)]
    public interface ISessionService
    {
        string CaptchaCode { get; set; }

        NVCLicenseeAuthInfo LicenseeSession { get; }

        NVCUserAuthInfo UserSession { get; }

        IEnumerable<MenuItem> MenuSession { get; }

        void CreateNewSession(
            User user,
            int onuserId,
            string language = "en-US");
    }
}