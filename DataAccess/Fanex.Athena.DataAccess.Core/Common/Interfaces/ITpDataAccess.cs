using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using System.Collections.Generic;

namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    public interface ITpDataAccess
    {
        IEnumerable<TpProduct> GetListTpProduct();

        IEnumerable<Currency> GetListTpCurrency(int licenseeId);
    }
}