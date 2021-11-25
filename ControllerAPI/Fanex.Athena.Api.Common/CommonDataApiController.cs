namespace Fanex.Athena.Api.Base
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Http;
    using DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.Web.ActionFilter;
    using Model.Core.MetaModel.Common;
    using ONEbook.UM.Filters;
    using Service.Core.Common.Interfaces;
    using Service.Core.Users.Interfaces;

    [CLSCompliant(false)]
    [CheckUMFilter]
    [FunctionAuthorization(PermissionKeys.BetHistory)]
    public class CommonDataApiController : ApiController
    {
        private readonly ILanguageService _langService;
        private readonly ISportTypeDataAccess _sportTypeDataAccess;
        private readonly ISessionService _sessionService;
        private readonly ILeagueDataAccess _leagueDataAccess;
        private readonly IMatchDataAccess _matchDataAccess;
        private readonly IBetTypeService _betTypeService;
        private readonly IProductService _productService;

        public CommonDataApiController(
            ILanguageService langService,
            ISportTypeDataAccess sportTypeDataAccess,
            ISessionService sessionService,
            ILeagueDataAccess leagueDataAccess,
            IMatchDataAccess matchDataAccess,
            IBetTypeService betTypeService,
            IProductService productService)
        {
            _langService = langService;
            _sportTypeDataAccess = sportTypeDataAccess;
            _sessionService = sessionService;
            _leagueDataAccess = leagueDataAccess;
            _matchDataAccess = matchDataAccess;
            _betTypeService = betTypeService;
            _productService = productService;
        }

        protected override void Initialize(System.Web.Http.Controllers.HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            var currentLanguage = _langService.GetCurrentLanguage();
            _langService.SetPageCulture(currentLanguage);
        }

        [HttpGet]
        public async Task<IEnumerable<object>> GetSports(string productCode)
        {
            productCode = _productService.GetAllowedSubProductCodeList(
                _sessionService.LicenseeSession.OfferedSubProductList,
                productCode);

            var sports = await _sportTypeDataAccess.GetSportsAndProducts(
                 _sessionService.LicenseeSession.LicenseeId,
                 _sessionService.UserSession.Language,
                 productCode);

            return sports.Where(x => x.ParentId > -1).Select(x => new { value = x.ID, label = x.Name });
        }

        [HttpGet]
        public async Task<IEnumerable<object>> GetBetTypes(string productCode)
        {
            productCode = _productService.GetAllowedSubProductCodeList(
                _sessionService.LicenseeSession.OfferedSubProductList,
                productCode);

            var bettypes = await _betTypeService.GetBettypesByProduct(
                _sessionService.LicenseeSession.LicenseeId,
                productCode,
                _sessionService.UserSession.Language);

            return bettypes.Select(x => new { value = x.ID, label = x.Name });
        }

        [HttpGet]
        public async Task<IEnumerable<object>> GetLeagues(DateTime fromDate, DateTime toDate, int sportId = 0)
        {
            var userSession = _sessionService.UserSession;
            var metaModel = new LeagueMetaModel
            {
                FromDate = fromDate,
                ToDate = toDate,
                SportId = sportId,
                UserId = userSession.UserId,
                AgentListXml = AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList)
            };

            var leagues = await _leagueDataAccess.GetLeaguesBySport(metaModel);

            return leagues.Select(x => new { value = x.LeagueId, label = x.LeagueName });
        }

        [HttpGet]
        public async Task<IEnumerable<object>> GetMatches(DateTime fromDate, DateTime toDate, int leagueid, int sportId = 0)
        {
            var matches = await _matchDataAccess.GetMatchesByLeague(leagueid, fromDate, toDate, sportId);

            return matches.Select(x => new { value = x.MatchId, label = x.MatchName });
        }
    }
}