namespace Fanex.Athena.Controllers.PlayerManagement
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.Constants;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Web.ActionFilter;
    using Newtonsoft.Json;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.PlayerAdmin)]
    public class PlayerAdministrationController : CultureBaseController
    {

        [HttpGet]
        [RequireCurrencyPermission(OnlyOwnBrand = true)]
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
            var isAllowedStatement = userSession.FunctionList.
                First(x => x.FunctionKey == PermissionKeys.PlayerAdminPlayerStatement);

            playerAdmin.CurrencyList = userSession.CurrencyList;
            playerAdmin.SiteName = licenseeSession.LicenseeName;
            playerAdmin.IsAllowedOddGroup = new KeyValuePair<bool, int>(allowedOddGroup != null, allowedOddGroup == null ? 0 : allowedOddGroup.Policy);
            playerAdmin.IsAllowedSpecialLevel = new KeyValuePair<bool, int>(allowedSpecialLevel != null, allowedSpecialLevel == null ? 0 : allowedSpecialLevel.Policy);
            playerAdmin.PlayerTabItems = JsonConvert.SerializeObject(PlayerAdminTab.CommonTabList);
            playerAdmin.IsAllowedStatement = isAllowedStatement != null;

            return playerAdmin;
        }
    }
}