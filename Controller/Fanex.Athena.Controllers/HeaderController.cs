namespace Fanex.Athena.Controllers
{
    using System.Linq;
    using System.Web.Mvc;
    using Fanex.Athena.Extension.Utility;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.Core.ViewModel;
    using Web.ActionFilter;

    [AuthorizeRestriction(AppMode.Self)]
    public class HeaderController : CultureBaseController
    {
        [HttpGet]
        public ActionResult Index()
        {
            var userSession = SessionServiceInstance.UserSession;
            var currentLicenseeId = AppSettingInstance.LicenseeId;

            var viewModel = new HeaderPageViewModel
            {
                Language = string.IsNullOrEmpty(userSession.Language) ? DefaultLanguage : userSession.Language,
                OnUserId = userSession.OnUserId,
                IsInternalLogin = userSession.IsInternal,
                HasRecheckIn = !AppSettingInstance.LocalTest,
                //SupportedLanguageList = Util.SupportedLanguages,
                UserName = userSession.UserName,
                CurrentLicenseeId = currentLicenseeId,
                IsFakeLicensee = false,
                IsAllowedNotification = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.Resettlement),
                LogoTextUrl = $"/www/assets/images/logo-text-{currentLicenseeId}.svg"
        };
            return View("~/Views/Desktop/Header/Index.cshtml", viewModel);
        }

        [HttpGet]
        public string ChangeLanguage(string languagesite)
        {
            var changed = false;
            if (!string.IsNullOrEmpty(languagesite))
            {
                var languageCode = languagesite.Trim();
                if (Util.IsValidLanguage(languageCode))
                {
                    var currentLang = LangService.GetCurrentLanguage();
                    if (!currentLang.Equals(languageCode))
                    {
                        changed = LangService.ChangeLanguage(languageCode);
                    }
                }
            }

            return changed ? "1" : "0";
        }
    }
}