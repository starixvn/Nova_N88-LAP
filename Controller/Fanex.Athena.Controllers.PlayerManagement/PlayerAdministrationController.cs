namespace Fanex.Athena.Controllers.PlayerManagement
{
    using System.Linq;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.Constants;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Newtonsoft.Json;

    [FunctionAuthorization(PermissionKeys.PlayerAdmin)]
    public class PlayerAdministrationController : CultureBaseController
    {
        private readonly ILicenseeSettingService _licenseeSettingService;

        private readonly IAuthorizationService _authService;

        public PlayerAdministrationController(ILicenseeSettingService licenseeSettingService, IAuthorizationService authService)
        {
            _licenseeSettingService = licenseeSettingService;
            _authService = authService;
        }

        [HttpGet]
        public ActionResult Index()
        {
            PlayerAdminViewModel playerAdmin = new PlayerAdminViewModel();
            var userSession = SessionServiceInstance.UserSession;
            var licenseeSession = SessionServiceInstance.LicenseeSession;
            var licenseeInfo = _licenseeSettingService.GetLicenseeInfo(licenseeSession.LicenseeName);

            playerAdmin.CurrencyList = userSession.CurrencyList;
            playerAdmin.SiteName = licenseeSession.LicenseeName;
            playerAdmin.IsAllowedOddGroup = userSession.FunctionList.
                Where(x => x.FunctionKey == PermissionKeys.PlayerAdminUpdateOddsGroup).FirstOrDefault() != null;
            playerAdmin.IsAllowedSpecialLevel = userSession.FunctionList.
                Where(x => x.FunctionKey == PermissionKeys.PlayerAdminUpdateOddsGroup).FirstOrDefault() != null;
            playerAdmin.IsAllowedBA = licenseeInfo != null && licenseeInfo.IsEnableBA &&
                _authService.CheckProductBelongsTo(licenseeSession.LicenseeName, ProductTypes.BA);
            playerAdmin.PlayerTabItems = JsonConvert.SerializeObject(PlayerAdminTab.CommonTabList);

            return View("~/Views/Desktop/Module/PlayerAdmin/Main.cshtml", playerAdmin);
        }
    }
}