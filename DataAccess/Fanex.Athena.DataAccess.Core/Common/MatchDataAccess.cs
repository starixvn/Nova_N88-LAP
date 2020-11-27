namespace Fanex.Athena.DataAccess.Core.Common
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Common.Extensions;
    using VendorAdapter.Interfaces;

    public class MatchDataAccess : BaseDataAccess, IMatchDataAccess
    {
        private readonly ICacheRefAdapter _cacheRefAdapter;

        public MatchDataAccess(ICacheRefAdapter cacheRefAdapter)
        {
            _cacheRefAdapter = cacheRefAdapter;
        }

        public async Task<IList<Match>> GetMatchesByLeague(int leagueId, DateTime fromDate, DateTime toDate, int sportId = 0)
        {
            var result = new List<Match>();

            using (var db = GetObjectDb("Lrf_SelMatchByLeague"))
            {
                var uspParam = new
                {
                    SportId = sportId,
                    LeagueID = leagueId,
                    FromDate = fromDate,
                    ToDate = toDate
                };
                using (var reader = await db.ExecuteReaderAsync(uspParam).ConfigureAwait(false))
                {
                    while (reader.Read())
                    {
                        var match = new Match
                        {
                            MatchId = Convert.ToInt32(reader["matchid"]),
                            HomeId = reader.ToInt("homeid"),
                            AwayId = reader.ToInt("awayid")
                        };
                        match.MatchName = GetMatchName(match);

                        result.Add(match);
                    }
                }
            }

            return result;
        }

        private string GetMatchName(Match match)
        {
            return _cacheRefAdapter.GetTeamName(match.HomeId) 
                + (match.IsNeutral ? " (N)" : string.Empty)
                + " -vs- " 
                + _cacheRefAdapter.GetTeamName(match.AwayId);
        }
    }
}