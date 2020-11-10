namespace Fanex.Athena.Controllers.PlayerManagement
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.Constants;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.NVC.Authentication.Infrastructure;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.PlayerAdmin)]
    public class PlayerAdministrationController : CultureBaseController
    {
        private readonly IAuthorizationService _authService;

        public PlayerAdministrationController(IAuthorizationService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        public ActionResult Index()
        {
            var viewmodel = CreateDefaultViewModel();

            return View("~/Views/Desktop/Module/PlayerAdmin/Main.cshtml", viewmodel);
        }

        private PlayerAdminViewModel CreateDefaultViewModel()
        {
            PlayerAdminViewModel playerAdmin = new PlayerAdminViewModel();
            var userSession = SessionServiceInstance.UserSession;
            var licenseeSession = SessionServiceInstance.LicenseeSession;

            var allowedOddGroup = userSession.FunctionList.
                First(x => x.FunctionKey == PermissionKeys.PlayerAdminUpdateOddsGroup);
            var allowedSpecialLevel = userSession.FunctionList.
                First(x => x.FunctionKey == PermissionKeys.PlayerAdminUpdateSpecialLevel);
            var isAllowedBA = licenseeSession.IsEnableBA &&
                _authService.CheckProductBelongsTo(licenseeSession.LicenseeName, ProductTypes.BA);
            var isAllowedStatement = userSession.FunctionList.
                First(x => x.FunctionKey == PermissionKeys.PlayerAdminPlayerStatement);

            var allowedBA = new NVCFunctionAuthInfo();
            if (isAllowedBA)
            {
                allowedBA = userSession.FunctionList.
                First(x => x.FunctionKey == PermissionKeys.PlayerAdminUpdateBaStatus);
            }

            playerAdmin.CurrencyList = userSession.CurrencyList;
            playerAdmin.SiteName = licenseeSession.LicenseeName;
            playerAdmin.IsAllowedOddGroup = new KeyValuePair<bool, int>(allowedOddGroup != null, allowedOddGroup == null ? 0 : allowedOddGroup.Policy);
            playerAdmin.IsAllowedSpecialLevel = new KeyValuePair<bool, int>(allowedSpecialLevel != null, allowedSpecialLevel == null ? 0 : allowedSpecialLevel.Policy);
            playerAdmin.IsAllowedBA = new KeyValuePair<bool, int>(allowedBA != null && allowedBA.FunctionKey != null, allowedBA == null ? 0 : allowedBA.Policy);
            playerAdmin.PlayerTabItems = JsonConvert.SerializeObject(PlayerAdminTab.CommonTabList);
            playerAdmin.IsAllowedStatement = isAllowedStatement != null;

            return playerAdmin;
        }
    }
}