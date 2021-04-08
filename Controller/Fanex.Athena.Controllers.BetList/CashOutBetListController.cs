namespace Fanex.Athena.Controllers.BetList
{
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.Web.ActionFilter;
    using Model.BetList.MetaModel;
    using Model.BetList.ViewModel;

    public class CashOutBetListController : BetListBaseController
    {
        [HttpGet]
        [ValidationWebRequest]
        public async Task<ActionResult> Detail(CashOutBetListDetailMetaModel metaModel)
        {
            var userSession = SessionServiceInstance.UserSession;
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(AgentList);
            metaModel.HasPlayerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm;
            metaModel.IsShowIpvn = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.BetlistViewIpvn);

            var viewModel = await BetListApiClient.PostAsync<CashOutBetListDetailViewModel>("/CashOutBetList/Detail", metaModel, userSession.Language).ConfigureAwait(false);

            return this.View("~/Views/Desktop/BetList/CashOutDetail/Main.cshtml", viewModel);
        }
    }
}