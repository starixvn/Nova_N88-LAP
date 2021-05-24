namespace Fanex.Athena.Api.BetList
{
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using Base;
    using DataAccess.Core.Configuration.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Model.BetList.MetaModel;
    using Model.Core.DTO.Configuration;
    using Service.Core.Common.Interfaces;
    using Service.StatelessCore.Interfaces;

    public class ApiBetListBaseController : BaseApiController
    {
        private readonly IAuthorizationService _authorizationService;

        private readonly IBalanceUpDataAccess _balanceUpDataAccess;

        public ApiBetListBaseController(
            ILanguageService languageService,
            IAuthorizationService authorizationService,
            IBetListApiClient betListApiClient,
            IBalanceUpDataAccess balanceUpDataAccess)
        : base(languageService)
        {
            _authorizationService = authorizationService;
            BridgeClientService = betListApiClient;
            _balanceUpDataAccess = balanceUpDataAccess;
        }

        protected IBetListApiClient BridgeClientService { get; }

        protected BalanceUp GetBalanceUp()
        {
            return _balanceUpDataAccess.GetBalanceUp();
        }

        protected void CheckDataPermission(int custId, long transId)
        {
            if (!_authorizationService.HasPermissionOnData(AgentList, custId, transId))
            {
                throw new UnauthorizedAccessException();
            }
        }

        protected internal virtual async Task<dynamic> GetBetListResult(BetListMetaModel metaModel, string uspKey, string apiPath = null)
        {
            if (!metaModel.FromTpBetRecord)
            {
                CheckDataPermission(metaModel.CustId, metaModel.TransId);
            }

            var userSession = SessionService.UserSession;
            metaModel = UpdateMetaModel(metaModel, uspKey, 1, int.MaxValue - 1);
            metaModel.IsShowIpvn = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.BetlistViewIpvn);

            return await BridgeClientService.PostAsync(apiPath ?? "/BetList/GetBetList", metaModel, userSession.Language).ConfigureAwait(false);
        }

        protected internal virtual async Task<dynamic> GetPagingBetListResult(
            BetListMetaModel metaModel, 
            string uspKey, 
            int pageIndex,
            int pageSize,
            string apiPath = null)
        {
            CheckDataPermission(metaModel.CustId, metaModel.TransId);
            var userSession = SessionService.UserSession;
        
            metaModel.IsServerPaging = true;
            metaModel = UpdateMetaModel(metaModel, uspKey, pageIndex, pageSize);
            metaModel.IsShowIpvn = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.BetlistViewIpvn);

            return await BridgeClientService.PostAsync(apiPath ?? "/BetList/GetBetListPaging", metaModel, userSession.Language).ConfigureAwait(false);
        }

        private BetListMetaModel UpdateMetaModel(BetListMetaModel metaModel, string uspKey, int pageIndex, int pageSize, int DefaultPageSize = 100)
        {
            var licenseeSession = SessionService.LicenseeSession;
            var agentList = AgentList;
            var balanceUp = GetBalanceUp();

            metaModel.PageIndex = pageIndex < 1 ? 1 : pageIndex;
            metaModel.PageSize = pageSize < 1 ? DefaultPageSize : pageSize;
            metaModel.LicenseeId = licenseeSession.LicenseeId;
            metaModel.BalanceUpDay = DateTime.SpecifyKind(balanceUp.BalanceUpDay.Date, DateTimeKind.Utc);
            metaModel.MoveBetsDay = DateTime.SpecifyKind(balanceUp.MoveBetsDay.Date, DateTimeKind.Utc);
            metaModel.AgentListXml = AuthParameterHelper.GenerateAgentListXml(agentList, metaModel.CurrencyId);
            metaModel.HasPlayerCom = licenseeSession.IsAllowedCustomerComm;
            metaModel.UspKey = uspKey;

            return metaModel;
        }
    }
}