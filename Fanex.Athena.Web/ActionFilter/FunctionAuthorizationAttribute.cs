namespace Fanex.Athena.Web.ActionFilter
{
    using System;
    using System.Diagnostics.Contracts;
    using System.Linq;
    using System.Net;
    using System.Web.Mvc;
    using System.Web.Routing;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

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
            if (SkipAuthorization(filterContext))
            {
                return;
            }

            var context = filterContext.HttpContext;

            var licenseeSession = SessionStorage.Licensee;
            var userSession = SessionStorage.User;
            var authorized = userSession != null && licenseeSession != null;
            if (authorized)
            {
                authorized = _policy == Policy.Host ? AuthorizationServiceInstance.HasHostPermissions(userSession.UserId, _permissionKeys)
                                                    : AuthorizationServiceInstance.HasPermissions(userSession.UserId, _permissionKeys);
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

        private static bool SkipAuthorization(ActionExecutingContext filterContext)
        {
            Contract.Assert(filterContext != null);

            return filterContext.ActionDescriptor.GetCustomAttributes(typeof(AllowAnonymousAttribute), true).Any()
                   || filterContext.ActionDescriptor.ControllerDescriptor.GetCustomAttributes(typeof(AllowAnonymousAttribute), true).Any();
        }
    }
}