namespace Fanex.Athena.Extension.Utility
{
    using System;
    using System.Web;

    public static class CookiesHelper
    {
        public static string GetCookies(string name)
        {
            var cookies = HttpContext.Current.Request.Cookies.Get(name);
            if (cookies != null)
            {
                return cookies.Value;
            }

            return string.Empty;
        }

        public static void SetCookies(string name, string value)
        {
            var cookie = new HttpCookie(name, value);
            cookie.HttpOnly = true;

            var cache = HttpContext.Current.Response.Cache;
            cache.SetNoStore();
            cache.SetExpires(DateTime.Now.AddMinutes(-1));
            cache.SetCacheability(HttpCacheability.NoCache);
            HttpContext.Current.Response.Cookies.Remove(name);
            HttpContext.Current.Response.SetCookie(cookie);
        }
    }
}