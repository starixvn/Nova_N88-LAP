namespace Fanex.Athena.Service.Core.Users.Interfaces
{
    using Fanex.N88.Core.Models;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Collections.Generic;

    [CLSCompliant(false)]
    public interface ISessionStorage
    {
        string CaptchaCode { get; set; }

        NVCLicenseeAuthInfo Licensee { get; set; }

        NVCUserAuthInfo User { get; set; }

        IEnumerable<MenuItem> Menu { get; set; }
    }
}