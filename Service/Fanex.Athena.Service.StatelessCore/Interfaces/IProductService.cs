namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using System.Collections.Generic;

    public interface IProductService
    {
        ProductAccess GetProductAccess(int licenseeId, string languageCode, string functionConfigKey = null);

        IList<Product> GetProductList(int licenseeId, string languageCode);

        ProductAccess GetSingleWalletProductAccess(int licenseeId, string languageCode, string functionConfigKey = null);
    }
}