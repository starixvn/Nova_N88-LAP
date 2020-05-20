using Fanex.Athena.DataAccess.Core.Configuration;
using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Service.Core.Users;
using Fanex.Athena.Service.Core.Users.Interfaces;
using Fanex.Athena.Service.StatelessCore.Utility;
using System;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace Fanex.Athena.Api.Base.Attributes
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public sealed class ApiAutoBindMetaModelAttribute : ActionFilterAttribute
    {
        public bool BindAgent { get; set; }

        public bool BindUserId { get; set; }

        public bool BindLicenseeName { get; set; }

        public bool BindLicenseeId { get; set; }

        public bool BindLanguage { get; set; }

        public bool BindIp { get; set; }

        public bool BindBalanceUpAndMoveBet { get; set; }

        private static readonly ISessionStorage _sessionStorage = new SessionStorage();

        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var userSession = _sessionStorage.UserAuthInfo;
            var licenseeSession = _sessionStorage.LicenseeAuthInfo;
            var actionArgument = actionContext.ActionArguments;

            if (BindAgent)
            {
                AutoBindMetaModelService.MapAgentXml(actionArgument, userSession.CurrencyAgentList);
            }

            if (BindUserId)
            {
                AutoBindMetaModelService.MapUserId(actionArgument, userSession.UserId);
            }

            if (BindLicenseeName)
            {
                AutoBindMetaModelService.MapSiteName(actionArgument, licenseeSession.LicenseeName);
            }

            if (BindLicenseeId)
            {
                AutoBindMetaModelService.MapLicenseeId(actionArgument, licenseeSession.LicenseeId);
            }

            if (BindLanguage)
            {
                AutoBindMetaModelService.MapLanguage(actionArgument);
            }

            if (BindIp)
            {
                AutoBindMetaModelService.MapIp(actionArgument,
                    ClientHelper.GetClientIp(actionContext.Request));
            }

            if (BindBalanceUpAndMoveBet)
            {
                var balanceUpDataAccess = new BalanceUpDataAccess(null, null);
                AutoBindMetaModelService.MapBalanceUpAndMoveBet(actionArgument, balanceUpDataAccess);
            }

            base.OnActionExecuting(actionContext);
        }
    }
}