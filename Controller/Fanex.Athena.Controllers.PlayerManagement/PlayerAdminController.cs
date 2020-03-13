namespace Fanex.Athena.Controllers.PlayerManagement
{
    using System.Web.Mvc;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Module.PlayerAdmin.Api.MetaModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public class PlayerAdminController : CultureBaseController
    {
        private readonly ILicenseeSettingService _licenseeSettingService;

        private readonly IAuthorizationService _authService;

        public PlayerAdminController(ILicenseeSettingService licenseeSettingService, IAuthorizationService authService)
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
            playerAdmin.IsSubsidiary = userSession.UserLevel == UserLevelType.Subsidiary;
            playerAdmin.SiteName = userSession.VendorID;
            playerAdmin.IsAllowedCustomerComm = licenseeSession.LicenseeName != null && licenseeInfo.IsAllowedCustomerComm;
            playerAdmin.IsAllowedBA = licenseeInfo != null && licenseeInfo.IsEnableBA &&
                _authService.CheckProductBelongsTo(licenseeSession.LicenseeName, ProductTypes.BA);

            return View("~/Views/Desktop/Module/PlayerAdmin/Main.cshtml", playerAdmin);
        }
    }
}