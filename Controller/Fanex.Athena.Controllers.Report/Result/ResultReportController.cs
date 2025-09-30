namespace Fanex.Athena.Controllers.Report.Result
{
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Model.Report.MetaModel;

    public class ResultReportController : ReportBaseController
    {
        private readonly IBetListApiClient _betListApiClient;

        #region Result-Page

        public ResultReportController(
            IBetListApiClient betListApiClient)
        {
            _betListApiClient = betListApiClient;
        }

        #endregion Result-Page

        #region PopUpPage

        [HttpGet]
        public async Task<ActionResult> ResultPopup(ResultPopupMetalModel metaModel)
        {
            if (ModelState.IsValid)
            {
                var result = await _betListApiClient.PostStringAsync(
                    "/ResultReport/ResultPopup",
                    metaModel,
                    SessionServiceInstance.UserSession.Language);

                ViewBag.Data = result;
                return View("~/Views/Desktop/Report/Result/Popup/Main.cshtml");
            }

            return Redirect("~/Utility/Error?err=400");
        }

        [HttpPost]
        [CustomValidateAntiForgery]
        public async Task<ActionResult> ShowRngCasinoSingleWalletResult(string refNo)
        {
            var result = await _betListApiClient.PostStringAsync(
                "/ResultReport/ShowRngCasinoSingleWalletResult",
                new { refNo },
                SessionServiceInstance.UserSession.Language);

            return this.Content(result, "application/json");
        }

        [HttpGet]
        public async Task<string> VGaming(string custId, string siteId, string gameRoundId, string gameId, int sportType, string currencyName)
        {
            var language = SessionServiceInstance.UserSession.Language;
            var model = new
            {
                custId,
                siteId,
                gameRoundId,
                gameId,
                sportType,
                currencyName,
                languageCode = language
            };
            return await _betListApiClient.PostStringAsync("/VGamingResultPopup/Index", model, language).ConfigureAwait(false);
        }

        /// <summary>
        /// Generate tennis detailed result.
        /// </summary>
        /// <param name="matchId">The match ID.</param>
        /// /// <param name="sportType">The sport type.</param>
        /// <returns>The html result.</returns>
        [HttpGet]
        public async Task<ActionResult> ResultDetail(int matchId, int sportType)
        {
            var language = SessionServiceInstance.UserSession.Language;
            var model = new
            {
                matchId,
                sportType,
                languageCode = language
            };
            var result = await _betListApiClient.PostStringAsync("/ResultReport/ResultDetail", model, language).ConfigureAwait(false);

            if (!string.IsNullOrEmpty(result))
            {
                ViewBag.Data = result;

                return View("~/Views/Desktop/Report/Result/Popup/Main.cshtml");
            }

            return this.Redirect("~/Utility/Error?err=400");
        }

        #endregion PopUpPage
    }
}