// -----------------------------------------------------------------------
// <copyright file="FunctionAuthorizationAttribute.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Web.ActionFilter
{
    using System;
    using System.Net;
    using System.Web.Mvc;
    using System.Web.Routing;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    using Fanex.Athena.Service.Core.Users.Interfaces;

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = true)]
    public sealed class FunctionAuthorizationAttribute : ActionFilterAttribute
    {
        private readonly string[] _permissionKeys;
        private readonly Policy _policy;

        public FunctionAuthorizationAttribute()
        {
        }

        public FunctionAuthorizationAttribute(params string[] permissionKeys)
        {
            _policy = Policy.Read;
            _permissionKeys = permissionKeys;
        }

        public FunctionAuthorizationAttribute(Policy policy, params string[] permissionKeys)
        {
            _policy = policy;
            _permissionKeys = permissionKeys;
        }

        public ISessionStorage SessionStorage { get; set; }

        public IAuthorizationService AuthorizationServiceInstance { get; set; }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var context = filterContext.HttpContext;

            var licenseeSession = SessionStorage.LicenseeAuthInfo;
            var userSession = SessionStorage.UserAuthInfo;
            var authorized = userSession != null && licenseeSession != null;
            if (authorized)
            {
                if(_policy == Policy.Host)
                {
                    authorized = AuthorizationServiceInstance.HasHostPermissions(userSession.UserId, _permissionKeys);
                }
                else
                {
                    authorized = AuthorizationServiceInstance.HasPermissions(userSession.UserId, _permissionKeys);
                }
            }

            if (!authorized)
            {
                if (context.Request.IsAjaxRequest())
                {
                    filterContext.HttpContext.Response.StatusCode = (int)HttpStatusCode.Forbidden;
                    filterContext.HttpContext.Response.ContentType = "application/json";
                    filterContext.Result = new JsonResult
                    {
                        Data = new { ErrCode = (int)HttpStatusCode.Forbidden, ErrMsg = "Access Denied." },
                        JsonRequestBehavior = JsonRequestBehavior.AllowGet
                    };
                }
                else
                {
                    var routeValue = new
                    {
                        controller = "Utility",
                        action = "AccessDenied",
                        message = "AccessDenied"
                    };

                    filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(routeValue));
                }
            }

            base.OnActionExecuting(filterContext);
        }
    }
}