using System;
using System.Globalization;
using System.Web;
using Fanex.Athena.Model.UserManagement.Model;
using Fanex.Athena.Resources;

namespace Fanex.Athena.Web.HtmlExtension
{
    public static class HtmlHelperExtensions
    {
        public static IHtmlString ToFullDateString(
            this DateTime value,
            string dateFormat = "MMM dd, yyyy",
            string timeFormat = "HH:mm tt")
        {
            return new HtmlString(
                string.Format(
                    "<span class='datetime'><span class='date'>{0}</span> <span class='time'>{1}</span></span>",
                    value.ToString(dateFormat),
                    value.ToString(timeFormat)));
        }

        public static string DecodeXMLValue(this string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                return value.Replace("&amp;", "&")
                    .Replace("&lt;", "<")
                    .Replace("&gt;", ">")
                    .Replace("&quot;", "\"")
                    .Replace("&apos;", "''");
            }

            return value;
        }

        public static string GetGeoName(this string geoId)
        {
            var listCulture = CultureInfo.GetCultures(CultureTypes.SpecificCultures);

            foreach (CultureInfo culture in listCulture)
            {
                var region = new RegionInfo(culture.LCID);

                if (region.GeoId.ToString().Equals(geoId))
                {
                    return region.DisplayName;
                }
            }

            return geoId;
        }

        public static IHtmlString ToUserLevel(this int value)
        {
            switch (value)
            {
                case (int)Constant.Level.PortalAdmin:
                    return new HtmlString(ViewResources.PortalAdmin);

                case (int)Constant.Level.SiteAdmin:
                    return new HtmlString(ViewResources.SiteAdmin);

                case (int)Constant.Level.User:
                    return new HtmlString(ViewResources.User);

                default:
                    return new HtmlString(string.Empty);
            }
        }
    }
}
