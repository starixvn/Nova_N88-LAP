namespace Fanex.Athena.Controllers.BetList
{
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Fanex.Athena.Web.ActionFilter;
    using Model.BetList.MetaModel;
    using Model.BetList.ViewModel;

    public class SystemParlayBetListController : BetListBaseController
    {
        [HttpGet]
        [ValidationWebRequest]
        [AutoBindMetaModel(BindAgent = true)]
        public async Task<ActionResult> Detail(SystemParlayDetailMetaModel metaModel)
        {
            var userSession = SessionServiceInstance.UserSession;
            var data = await BetListApiClient.PostStringAsync("/SystemParlayBetList/Detail", metaModel, userSession.Language).ConfigureAwait(false);

            var viewModel = new SystemParlayDetailViewModel
            {
                DetailText = data
            };

            return View("~/Views/Desktop/BetList/SystemParlayDetail/Main.cshtml", viewModel);
        }
    }
}