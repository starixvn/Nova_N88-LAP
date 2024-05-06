namespace Fanex.Athena.Api.BetList
{
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.BetList.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    [ApiFunctionAuthorization(PermissionKeys.BetHistory)]
    public class BettingTicketCenterController : BaseApiController
    {
        private readonly IBetListApiClient _betListApiClient;
        private const int TimeZone = -4;

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
        [ApiAutoBindMetaModel(BindAgent = true, BindShowingBetFromIP = true, BindProductCodeList = true)]
        public async Task<dynamic> GetBySingleCustomer(SingleCustomersBetListMetaModel metaModel)
        {
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetBySingleCustomer",
                metaModel,
                SessionService.UserSession.Language);
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistoryRefNo)]
        [ValidationApiRequest]
        [ApiAutoBindMetaModel(BindAgent = true, BindShowingBetFromIP = true, BindProductCodeList = true)]
        public async Task<dynamic> GetByRefno(RefNoBetListMetaModel metaModel)
        {
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;
            metaModel.LastXDays = GetUserLimitDataRange(null, TimeZone);

            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRefno",
                metaModel,
                SessionService.UserSession.Language);
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistoryRunning)]
        [ValidationApiRequest(IsValidBrandId = true)]
        [ApiAutoBindMetaModel(BindAgent = true, BindShowingBetFromIP = true, BindProductCodeList = true)]
        public async Task<dynamic> GetByRunning(BaseBettingTicketMetaModel metaModel)
        {
            metaModel.HasPlayerCom = SessionService.LicenseeSession.IsAllowedCustomerComm;
            return await _betListApiClient.PostAsync(
                "/BettingTicketCenter/GetByRunning",
                metaModel,
                SessionService.UserSession.Language);
        }

        [HttpPost]
        [ApiFunctionAuthorization(PermissionKeys.BetHistoryBookedBet)]
        [ValidationApiRequest(IsValidBrandId = true)]
        [ApiAutoBindMetaModel(BindAgent = true, BindShowingBetFromIP = true)]
        public async Task<dynamic> GetByBookedBet(BookedBetBetListMetaModel metaModel)
        {
            return await _betListApiClient.PostAsync("/BettingTicketCenter/GetByBookedBet",
                metaModel,
                SessionService.UserSession.Language
                ).ConfigureAwait(false);
        }
    }
}