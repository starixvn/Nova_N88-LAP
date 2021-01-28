namespace Fanex.Athena.DataAccess.Core.Common
{
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Auth;
    using Fanex.Data;
    using System.Collections.Generic;
    using System.Linq;

    public class CurrencyDataAccess : BaseDataAccess, ICurrencyDataAccess
    {
        public IList<CurrencyUser> GetCurrenciesByBrand(int brandId)
        {
            const string UspName = "N88_SelAgentListByLicensee";

            using (var db = this.GetObjectDb(UspName))
            {
                db.SetParameterValue("LicenseeID", brandId);

                return BindCurrencyUser(db);
            }
        }

        private static IList<CurrencyUser> BindCurrencyUser(IObjectDb db)
        {
            var currencyList = db.Query<CurrencyUser>();
            return currencyList.GroupBy(x => x.CurrencyId).Select(x => new CurrencyUser
            {
                CurrencyId = x.Key,
                CurrencyName = x.First().CurrencyName,
                IsActive = x.First().IsActive,
                AgentIdList = x.Select(y => y.AgentId).ToList()
            }).ToList();
        }
    }
}