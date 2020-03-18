namespace Fanex.Athena.DataAccess.Core.Common
{
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using Fanex.Athena.DataAccess.Core;
    using Fanex.Athena.DataAccess.Core.Common.Interfaces;
    using Fanex.Athena.Model.Auth;
    using Fanex.Data;

    public class CurrencyDataAccess : BaseDataAccess, ICurrencyDataAccess
    {
        public IList<CurrencyUser> GetCurrenciesByLicensee(int licenseeId)
        {
            const string UspName = "N88_SelAgentListByLicensee";

            using (var db = this.GetObjectDb(UspName))
            {
                db.SetParameterValue("LicenseeID", licenseeId);

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