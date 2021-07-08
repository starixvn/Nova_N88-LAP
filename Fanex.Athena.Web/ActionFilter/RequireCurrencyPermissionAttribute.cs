namespace Fanex.Athena.Web.ActionFilter
{
    using Fanex.Athena.Service.Core.Users;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.NVC.Authentication.Infrastructure;
    using System;
    using System.Linq;
    using System.Web.Mvc;
    using System.Web.Routing;

    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, AllowMultiple = false)]
    [CLSCompliant(false)]
    public sealed class RequireCurrencyPermissionAttribute : ActionFilterAttribute
    {
        private readonly ISessionStorage _sessionStorage;

        public RequireCurrencyPermissionAttribute()
            : this(null)
        {
        }

        public RequireCurrencyPermissionAttribute(ISessionStorage sessionStorage)
        {
            _sessionStorage = sessionStorage ?? new SessionStorage();
        }

        public bool OnlyOwnBrand { get; set; }

        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var brandList = _sessionStorage.User.BrandList;
            Func<Brand, bool> hasAnyCurrency = brand => brand.TpCurrencyList.Any();

            var isValid = OnlyOwnBrand ? brandList.Any(brand => brand.Id == _sessionStorage.Licensee.LicenseeId && hasAnyCurrency(brand))
                : brandList.Any(hasAnyCurrency);

            if (!isValid)
            {
                var routeValue = new
                {
                    controller = "Utility",
                    action = "OneTokenRestriction",
                    code = 600
                };

                filterContext.Result = new RedirectToRouteResult(new RouteValueDictionary(routeValue));
            }
            base.OnActionExecuting(filterContext);
        }
    }
}