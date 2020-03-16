// -----------------------------------------------------------------------
// <copyright file="ICurrencyDataAccess.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.Auth;

    public interface ICurrencyDataAccess
    {
        IList<CurrencyUser> GetCurrenciesByLicensee(int licenseeId);

        IList<CurrencyUser> GetCurrenciesByUser(int licenseeId, int userId);
    }
}