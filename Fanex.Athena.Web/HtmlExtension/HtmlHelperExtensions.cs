using System;
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
    }
}
