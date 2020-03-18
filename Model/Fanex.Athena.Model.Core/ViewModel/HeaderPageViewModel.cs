namespace Fanex.Athena.Model.Core.ViewModel
{
    using System.Collections.Generic;

    public class HeaderPageViewModel
    {
        public string Language { get; set; }

        public int OnUserId { get; set; }

        public bool IsInternalLogin { get; set; }

        public bool HasRecheckIn { get; set; }

        public IDictionary<string, string> SupportedLanguageList { get; set; }

        public string UserName { get; set; }

        public int CurrentLicenseeId { get; set; }

        public bool IsFakeLicensee { get; set; }

        public bool IsAllowedNotification { get; set; }
    }
}