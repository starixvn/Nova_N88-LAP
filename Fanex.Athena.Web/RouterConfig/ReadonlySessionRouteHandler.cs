namespace Fanex.Athena.Web.RouterConfig
{
    using System.Web;
    using System.Web.Http.WebHost;
    using System.Web.Routing;
    using System.Web.SessionState;

    public class ReadonlySessionRouteHandler : HttpControllerRouteHandler
    {
        protected override IHttpHandler GetHttpHandler(RequestContext requestContext)
        {
            requestContext.HttpContext.SetSessionStateBehavior(SessionStateBehavior.ReadOnly);
            return new HttpControllerHandler(requestContext.RouteData);
        }
    }
}