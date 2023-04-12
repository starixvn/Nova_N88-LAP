namespace Fanex.Athena.Extension.Utility
{
    using System;
    using System.Collections.Generic;
    using System.Text.RegularExpressions;

    public static class Util
    {
        public static IDictionary<string, string> SupportedLanguages
        {
            get
            {
                return new Dictionary<string, string>
                    {
                        { "en-US", "English" }
                    };
            }
        }

        public static IDictionary<string, string> MapLanguages
        {
            get
            {
                return new Dictionary<string, string>
                {
                    { "en-US", "en" }
                };
            }
        }

        public static IDictionary<string, string> MapIetfLanguageCodes
        {
            get
            {
                return new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
                {
                    { "en", "en-US" }
                };
            }
        }

        [Obsolete]
        public static string RootPath
        {
            get
            {
                return System.Web.VirtualPathUtility.ToAbsolute("~/");
            }
        }

        public static bool IsValidLanguage(string languageCode)
        {
            var langsKey = SupportedLanguages.Keys;
            return langsKey.Contains(languageCode);
        }

        public static bool IsPasswordValid(string password)
        {
            const string Pattern = @"^(?=.*[A-z].*[A-z])(?=.*\d.*\d).{6,}$";
            return Regex.IsMatch(password, Pattern);
        }
    }
}