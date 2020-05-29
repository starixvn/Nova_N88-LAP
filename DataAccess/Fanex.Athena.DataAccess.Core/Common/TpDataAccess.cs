using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using System.Collections.Generic;

namespace Fanex.Athena.DataAccess.Core.Common
{
    public class TpDataAccess : BaseDataAccess, ITpDataAccess
    {
        public IEnumerable<Currency> GetListTpCurrency(int licenseeId)
        {
            const string UspName = "N88_SelCurrency";
            using (var db = GetObjectDb(UspName))
            {
                db.SetParameterValue("LicenseeID", licenseeId);
                return db.Query<Currency>();
            }
        }

        public IEnumerable<TpProduct> GetListTpProduct()
        {
            const string UspName = "N88_GetListGameType";
            using (var db = GetObjectDb(UspName))
            {
                return db.Query<TpProduct>();
            }
        }
    }
}