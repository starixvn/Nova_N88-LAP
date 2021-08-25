namespace Fanex.Athena.Module.PlayerAdmin.Controllers
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using System.Web.UI;
    using Fanex.Athena.Controllers;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using ONEbook.UM.Filters;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    [FunctionAuthorization(PermissionKeys.PlayerAdminPlayerStatement)]
    public class PlayerStatementController : CultureBaseController
    {
        private readonly IPlayerStatementService _playerStatementService;
        private const int MaximumYear = 2;

        public PlayerStatementController(
            IPlayerStatementService playerStatementService)
        {
            _playerStatementService = playerStatementService;
        }

        [HttpGet]
        public ViewResult Index(int custId, int currencyId)
        {
            var userLimitDataRange = SessionServiceInstance.UserSession.DataRangeLimitation;
            var today = DateTime.Today;
            var startDayOfMonth = 1;

            if (userLimitDataRange > 0)
            {
                var dayAfterLimit = today.Day - userLimitDataRange;
                startDayOfMonth = dayAfterLimit > 1 ? dayAfterLimit : 1;
            }

            var viewModel = new PlayerStatementViewModel
            {
                CustId = custId,
                CurrencyId = currencyId,
                FromDate = new DateTime(today.Year, today.Month, startDayOfMonth),
                ToDate = today,
                MinDate = GetUserLimitDataRange(new DateTime(today.Year - MaximumYear, 1, 1), DefaultTimeZone)
            };

            return View("~/Views/Desktop/Module/PlayerAdmin/PlayerStatement/Statement.cshtml", viewModel);
        }

        [HttpPost]
        [AjaxRequest]
        [CustomValidateAntiForgery]
        [ValidationWebRequest]
        [OutputCache(NoStore = true, Duration = 0, Location = OutputCacheLocation.None, VaryByParam = "*")]
        public async Task<ActionResult> GetStatementUrl(PlayerStatementMetaModel metaModel)
        {
            metaModel.SiteName = SessionServiceInstance.LicenseeSession.LicenseeName;
            metaModel.Language = SessionServiceInstance.UserSession.Language;
            metaModel.IsShowIpvn = SessionServiceInstance.UserSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.BetlistViewIpvn);

            return Content(await _playerStatementService.GetUrl(metaModel).ConfigureAwait(false));
        }
    }
}