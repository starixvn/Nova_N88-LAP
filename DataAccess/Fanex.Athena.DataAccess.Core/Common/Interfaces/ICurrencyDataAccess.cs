namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    using System.Collections.Generic;
    using Fanex.Athena.Model.Auth;

    public interface ICurrencyDataAccess
    {
        IList<CurrencyUser> GetCurrenciesByBrand(int brandId);
    }
}