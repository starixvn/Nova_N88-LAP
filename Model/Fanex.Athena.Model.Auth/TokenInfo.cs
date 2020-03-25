namespace Fanex.Athena.Model.Auth
{
    using System.Collections.Generic;

    public class TokenInfo
    {
        public string VendorID { get; set; }

        public string SiteName { get; set; }

        public int UserID { get; set; }

        public string UserName { get; set; }

        public string Language { get; set; }

        public string ActionLink { get; set; }

        public bool IsAdminstrator { get; set; }

        public List<Function> Permissions { get; set; }

        public IDictionary<int, string> Currency { get; set; }

        public Dictionary<string, string> GetUserInfo { get; set; }

        public int? WhiteLabelID { get; set; }

        public bool IsMasterLicensee { get; set; }
    }
}