namespace Fanex.Athena.Controllers
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.ViewModel;
    using System.Linq;
    using System.Web.Mvc;

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
                HasRecheckIn = !AppSettingInstance.LocalTest,
                UserName = userSession.UserName,
                CurrentLicenseeId = currentLicenseeId,
                IsFakeLicensee = false,
                IsAllowedNotification = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.Resettlement),
                LogoTextUrl = $"/www/assets/images/logo-text-{currentLicenseeId}.svg"
            };
            return View("~/Views/Desktop/Header/Index.cshtml", viewModel);
        }
    }
}