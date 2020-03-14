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
    using Fanex.NAP.Core.Business;
    using Fanex.NAP.Core.Web.Attribute;

    [NapAPIAuth(FunctionKey = PermissionKeys.BetHistory, Policy = Constant.Policy.Read)]
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
        [NapAPIAuth(FunctionKey = PermissionKeys.BetHistorySingleCustomer, Policy = Constant.Policy.Read)]
        [ValidationApiRequest]
        public async Task<dynamic> GetBySingleCustomer(SingleCustomersBetListMetaModel metaModel)
        {
            var userSession = SessionService.UserSessionInfo;
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList);

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetBySingleCustomer",
                metaModel,
                userSession.Language);
        }

        [HttpPost]
        [NapAPIAuth(FunctionKey = PermissionKeys.BetHistoryRefNo, Policy = Constant.Policy.Read)]
        [ValidationApiRequest]
        public async Task<dynamic> GetByRefno(RefNoBetListMetaModel metaModel)
        {
            var userSession = SessionService.UserSessionInfo;
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList);
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRefno",
                metaModel,
                userSession.Language);
        }

        [HttpPost]
        [NapAPIAuth(FunctionKey = PermissionKeys.BetHistoryRunning, Policy = Constant.Policy.Read)]
        [ValidationApiRequest(IsValidCurrencyList = true)]
        public async Task<dynamic> GetByRunning(BaseBettingTicketMetaModel metaModel)
        {
            var userSession = SessionService.UserSessionInfo;
            var currencyList = metaModel.CurrencyIdList?.Split(',').Select(x => int.Parse(x)).ToArray();

            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList, currencyList);
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRunning",
                metaModel,
                userSession.Language);
        }
    }
}