namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth;
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

        protected string LicenseeName => SessionServiceInstance.LicenseeSession.LicenseeName;

        protected int LicenseeId => SessionServiceInstance.LicenseeSession.LicenseeId;

        protected IEnumerable<Brand> BrandList => SessionServiceInstance.UserSession.BrandList;

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