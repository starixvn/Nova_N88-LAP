namespace Fanex.Athena.Service.StatelessCore
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public class MatchService : IMatchService
    {
        private readonly IMatchDataAccess _matchDataAccess;

        public MatchService(IMatchDataAccess matchDataAccess)
        {
            _matchDataAccess = matchDataAccess;
        }

        public async Task<IList<Match>> GetMatchesByLeagueAsync(int leagueId, DateTime fromDate, DateTime toDate)
        {
            return await _matchDataAccess.GetMatchesByLeague(leagueId, fromDate, toDate).ConfigureAwait(false);
        }
    }
}