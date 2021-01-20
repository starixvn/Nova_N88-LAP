namespace Fanex.Athena.Api.BetList
{
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.BetList.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;

    [ApiFunctionAuthorization(PermissionKeys.BetHistory)]
    public class BettingTicketCenterController : BaseApiController
    {
        private readonly IBetListApiClient _betListApiClient;

        public BettingTicketCenterController(
            ILanguageService langService,
            IBetListApiClient betListApiClient)
            : base(langService)
        {
            _betListApiClient = betListApiClient;
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistorySingleCustomer)]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> GetBySingleCustomer(SingleCustomersBetListMetaModel metaModel)
        {
            var userSession = SessionService.UserSession;
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;
            var agentList = AuthParameterHelper.GetAgentList(BrandList, new[] { metaModel.BrandId });
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(agentList);

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetBySingleCustomer",
                metaModel,
                userSession.Language);
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistoryRefNo)]
        [ValidationApiRequest]
        public async Task<dynamic> GetByRefno(RefNoBetListMetaModel metaModel)
        {
            var userSession = SessionService.UserSession;
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(AgentList);
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRefno",
                metaModel,
                userSession.Language);
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistoryRunning)]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> GetByRunning(BaseBettingTicketMetaModel metaModel)
        {
            var userSession = SessionService.UserSession;
            var currencyList = metaModel.CurrencyIdList?.Split(',').Select(x => int.Parse(x)).ToArray();

            var agentList = AuthParameterHelper.GetAgentList(BrandList, new[] { metaModel.BrandId });
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(agentList, currencyList);
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRunning",
                metaModel,
                userSession.Language);
        }
    }
}