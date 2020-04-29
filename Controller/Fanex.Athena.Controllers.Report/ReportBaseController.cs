namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Core.MetaModel.Product;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Model.Core.DTO.Common;
    using ONEbook.UM.Filters;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using System.Web.SessionState;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    public class ReportBaseController : CultureBaseController
    {
        public const int PageSizeExcel = int.MaxValue - 1000;

        public IProductService ProductServiceInstance { get; set; }

        protected IDictionary<int, string> CurrencyList => SessionServiceInstance.UserSession.CurrencyList;

        protected string DefaultBaseCurrency => SessionServiceInstance.UserSession.DefaultBaseCurrency;

        protected string Language => LangService.GetCurrentLanguage();

        protected int LicenseeId => SessionServiceInstance.LicenseeSession.LicenseeId;

        protected IEnumerable<ProductOption> GetProductOptionList(string functionConfigKey = null)
        {
            var productAccess = ProductServiceInstance.GetSingleWalletProductAccess(LicenseeId, Language, functionConfigKey);
            return ToProductOptions(productAccess.ProductList);
        }

        protected static IList<ProductOption> ToProductOptions(IEnumerable<Product> productList)
        {
            return productList.Select(i => new ProductOption
            {
                Code = i.ProductCode,
                Name = i.ProductName,
                Status = true
            }).ToList();
        }
    }
}