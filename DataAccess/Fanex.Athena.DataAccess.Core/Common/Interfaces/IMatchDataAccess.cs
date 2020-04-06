namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;
    using Fanex.Athena.Model.Core.DTO.Common;

    public interface IMatchDataAccess
    {
        Task<IList<Match>> GetMatchesByLeague(int leagueId, DateTime fromDate, DateTime toDate, int sportId = 0);
    }
}