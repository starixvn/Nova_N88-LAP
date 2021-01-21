namespace Fanex.Athena.Web.RouterConfig
{
    using System.Web.Http;
    using System.Web.Mvc;
    using System.Web.Routing;

    public static class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes, bool includeAttributeMapping = true)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.IgnoreRoute("content/{*pathInfo}");
            routes.IgnoreRoute("images/{*pathInfo}");
            routes.IgnoreRoute("scripts/{*pathInfo}");

            if (includeAttributeMapping)
            {
                routes.MapMvcAttributeRoutes();
            }

            var apiRoute = routes.MapHttpRoute(
                    name: "apiRoute",
                    routeTemplate: "api/{controller}/{action}");
            apiRoute.RouteHandler = new ReadonlySessionRouteHandler();

            routes.RegisterProxyRoutes();

            routes.MapRoute(
                "Default",
                "{controller}/{action}",
                new { controller = "Home", action = "Index" });
        }

        private static void RegisterProxyRoutes(this RouteCollection routes)
        {
            routes.MapHttpRoute(
                name: "apiProxyHealthRoute",
                routeTemplate: "api/proxy/{apiKey}/health",
                new { Controller = "Proxy", Action = "Health" });

            var apiProxyRoute = routes.MapHttpRoute(
                   name: "apiProxyRoute",
                   routeTemplate: "api/proxy/{apiKey}/{apiUrl}",
                   new { Controller = "Proxy" });
            apiProxyRoute.RouteHandler = new ReadonlySessionRouteHandler();
        }
    }
}