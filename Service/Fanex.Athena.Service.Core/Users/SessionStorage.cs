namespace Fanex.Athena.Service.Core.Users
{
    using Fanex.N88.Core.Models;
    using Fanex.NVC.Authentication.Infrastructure;
    using Interfaces;
    using System;
    using System.Collections.Generic;
    using System.Web;

    [CLSCompliant(false)]
    public class SessionStorage : ISessionStorage
    {
        private const string LicenseeSessionKey = "LicenseeAuthInfo";
        private const string UserSessionKey = "UserAuthInfo";
        private const string MenuSessionKey = "MenuAuthInfo";
        private const string CaptchaCodeKey = "CaptchaCodeKey";

        public NVCLicenseeAuthInfo Licensee
        {
            get { return HttpContext.Current.Session[LicenseeSessionKey] as NVCLicenseeAuthInfo; }
            set { HttpContext.Current.Session[LicenseeSessionKey] = value; }
        }

        public NVCUserAuthInfo User
        {
            get { return HttpContext.Current.Session[UserSessionKey] as NVCUserAuthInfo; }
            set { HttpContext.Current.Session[UserSessionKey] = value; }
        }

        public string CaptchaCode
        {
            get { return HttpContext.Current.Session[CaptchaCodeKey] as string; }
            set { HttpContext.Current.Session[CaptchaCodeKey] = value; }
        }

        public IEnumerable<MenuItem> Menu
        {
            get { return HttpContext.Current.Session[MenuSessionKey] as IEnumerable<MenuItem>; }
            set { HttpContext.Current.Session[MenuSessionKey] = value; }
        }
    }
}