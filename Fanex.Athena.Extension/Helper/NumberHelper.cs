namespace Fanex.Athena.Extension.Helper
{
    using System.Globalization;

    public static class NumberHelper
    {
        private const int NUMBER_OF_PERCENT = 100;
        private static readonly CultureInfo DefaultCulture = new CultureInfo("en-US");

        public static string ToStringExt(this decimal value, byte digit = 2)
        {
            var format = "N" + digit.ToString();
            return value.ToString(format, DefaultCulture.NumberFormat);
        }

        public static string ToStringExt(this int value)
        {
            return value.ToString("#,###");
        }

        public static string DecFormat(decimal value, byte digit = 2)
        {
            var format = "N" + digit.ToString();
            return value.ToString(format, DefaultCulture.NumberFormat);
        }

        public static string PercentageFormat(decimal value, byte digit = 2)
        {
            return DecFormat(value.ToPercentage(), digit);
        }

        public static decimal ToPercentage(this decimal value)
        {
            return value * NUMBER_OF_PERCENT;
        }
    }
}