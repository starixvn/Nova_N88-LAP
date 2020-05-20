using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using System.Collections.Generic;

namespace Fanex.Athena.Service.Core.Common.Interfaces
{
    public interface ITpService
    {
        IEnumerable<TpProduct> GetListTpProduct();

        IEnumerable<Currency> GetListTpCurrency(int licenseeId);
    }
}