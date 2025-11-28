namespace Fanex.Athena.Api.BetList
{
    using DataAccess.Core.Configuration.Interfaces;
    using Model.BetList.MetaModel;
    using Service.Core.Common.Interfaces;
    using Service.StatelessCore.Interfaces;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    public class BetBuilderPlusBetListController : ApiBetListBaseController
    {
        public BetBuilderPlusBetListController(
            ILanguageService languageService,
            IAuthorizationService authorizationService,
            IBetListApiClient betListApiClient,
            IBalanceUpDataAccess balanceUpDataAccess)
        : base(languageService, authorizationService, betListApiClient, balanceUpDataAccess)
        {
        }

        [HttpGet]
        public async Task<HttpResponseMessage> Detail(long transId, int custId, string transDesc, decimal handicap1, decimal handicap2, string betcheck, string betteam, string currency, decimal stake)
        {
            var metaModel = new BetBuilderPlusDetailMetaModel
            {
                TransId = transId,
                CustId = custId,
                TransDesc = transDesc,
                Handicap1 = handicap1,
                Handicap2 = handicap2,
                BetCheck = betcheck,
                BetTeam = betteam,
                Currency = currency,
                Stake = stake
            };

            return await BridgeClientService.PostAsync("/BetBuilderPlusBetList/Detail",
                metaModel, SessionService.UserSession.Language).ConfigureAwait(false);
        }
    }
}