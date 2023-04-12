namespace Fanex.Athena.Web.ActionFilter
{
    using System;
    using System.Net;
    using System.Web.Mvc;
    using System.Web.Routing;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    [CLSCompliant(false)]
    public sealed class BetListAuthorizationAttribute : ActionFilterAttribute
    {
        public ILicenseeSettingService LicenseeSettingService { get; set; }

        public ISessionService SessionService { get; set; }
    }
}