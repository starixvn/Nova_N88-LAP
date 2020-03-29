namespace Fanex.Athena.Service.StatelessCore
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Extension.Utility.Interfaces;

    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public class MatchService : IMatchService
    {
        private const string RunningMatchCacheKey = "RunningMatchCacheKey_";

        private readonly IMatchDataAccess _matchDataAccess;

        private readonly ICustomMemoryCacheService _cache;

        public MatchService(IMatchDataAccess matchDataAccess, ICustomMemoryCacheService cache)
        {
            _matchDataAccess = matchDataAccess;
            _cache = cache;
        }

        public async Task<IList<Match>> GetMatchesByLeagueAsync(int leagueId, DateTime fromDate, DateTime toDate)
        {
            return await _matchDataAccess.GetMatchesByLeague(leagueId, fromDate, toDate).ConfigureAwait(false);
        }
    }
}