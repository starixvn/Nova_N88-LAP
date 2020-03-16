namespace Fanex.Athena.Module.PlayerAdmin.Controllers
{
    using System;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using System.Web.UI;
    using Fanex.Athena.Controllers;
    using Fanex.Athena.Model.PlayerManagement.MetaModel;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using ONEbook.UM.Filters;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
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
            var today = DateTime.Today;
            var viewModel = new PlayerStatementViewModel
            {
                CustId = custId,
                CurrencyId = currencyId,
                FromDate = new DateTime(today.Year, today.Month, 1),
                ToDate = today,
                MinDate = new DateTime(today.Year - MaximumYear, 1, 1)
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
            return Content(await _playerStatementService.GetUrl(metaModel).ConfigureAwait(false));
        }
    }
}