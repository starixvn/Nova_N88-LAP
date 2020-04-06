namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    using System;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    using Fanex.Athena.Model.Core.DTO.Common;

    public interface IMatchService
    {
        Task<IList<Match>> GetMatchesByLeagueAsync(int leagueId, DateTime fromDate, DateTime toDate);
    }
}