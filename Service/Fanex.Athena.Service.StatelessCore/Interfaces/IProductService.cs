namespace Fanex.Athena.Service.StatelessCore.Interfaces
{
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.MetaModel.Product;
    using System.Collections.Generic;

    public interface IProductService
    {
        ProductAccess GetProductAccess(int licenseeId, string languageCode, string functionConfigKey = null);

        IList<Product> GetProductList(int licenseeId, string languageCode);

        ProductAccess GetSingleWalletProductAccess(int licenseeId, string languageCode, string functionConfigKey = null);

        IList<string> GetOfferedSubProducts(int licenseeId);

        IList<ProductOption> GetAllowedSubProductOptions(IEnumerable<string> subProduct, IList<ProductOption> productOptions);

        string GetAllowedSubProductCodeList(IEnumerable<string> subProduct, string productCodes);
    }
}