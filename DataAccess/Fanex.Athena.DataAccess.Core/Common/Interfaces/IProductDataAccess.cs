namespace Fanex.Athena.DataAccess.Core.Common.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System.Collections.Generic;

    public interface IProductDataAccess
    {
        IList<Product> GetProductAccessList(int licenseeId, bool isActiveCustomerSummaryReport = false);

        IEnumerable<TpProduct> GetListTpProduct();
    }
}