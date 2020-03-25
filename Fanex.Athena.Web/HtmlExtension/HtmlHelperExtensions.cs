using System;
using System.Globalization;
using System.Web;

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
    }
}
