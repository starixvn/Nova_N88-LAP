using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Model.Auth.DataDomain;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Core.MetaModel.Product;
using Fanex.Athena.Model.Report.MetaModel;
using Fanex.Athena.Resources;
using Fanex.Athena.Service.Customer.Interfaces;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.Web.ActionFilter;

namespace Fanex.Athena.Controllers.Report
{
    [FunctionAuthorization(PermissionKeys.ReportWinlossAnalysis)]
    public class WinlossAnalysisReportController : ReportBaseController
    {
        private const string ProductListFunctionKey = "WinlossAnalysis";

        private readonly IProductService _productService;
        private readonly ICustomerClassService _customerClassService;

        public WinlossAnalysisReportController(
            IProductService productService,
            ICustomerClassService customerClassService)
        {
            _productService = productService;
            _customerClassService = customerClassService;
        }

        public async Task<ActionResult> Index()
        {
            var userSession = SessionServiceInstance.UserSession;
            var viewModel = new WinlossAnalysisReportViewModel
            {
                LiveStatusList = GetLiveStatusList(),
                StatusList = GetStatusList(),
                ProductOptionList = GetProductOptionList(),
                MinDate = DateTimeHelper.Today.AddYears(-3),
                MaxDate = DateTimeHelper.Today,
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency,
                PlatformList = GetPlatformList(),
                OddGroups = GetOddGroupsList(),
                IsOfferCashOutProduct = _productService.IsOfferCashOutProduct(LicenseeId, userSession.Language),
                RiskLevels = await _customerClassService.GetAllRiskLevel(),
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
            };
            return View("~/Views/Desktop/Report/WinlossAnalysis/Index.cshtml", viewModel);
        }

        private static IEnumerable<CheckedItem> GetStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Won, Name = ViewResources.Won, Checked = true },
                new CheckedItem { ID = StatusTypes.Lose, Name = ViewResources.Lost, Checked = true },
                new CheckedItem { ID = StatusTypes.Draw, Name = ViewResources.Draw, Checked = true }
            };
        }

        private static IDictionary<int, string> GetLiveStatusList()
        {
            return new Dictionary<int, string>
            {
                { LiveStatusTypes.NonLive, ViewResources.NoneLive },
                { LiveStatusTypes.Live, ViewResources.Live },
                { LiveStatusTypes.Mix, ViewResources.MixLiveAndNoneLive }
            };
        }

        private static IDictionary<int, string> GetPlatformList()
        {
            return new Dictionary<int, string>
            {
                { PlatformType.DesktopNewAsia, ViewResources.DesktopNewAsia },
                { PlatformType.DesktopChina, ViewResources.DesktopChina },
                { PlatformType.DesktopOthers, ViewResources.DesktopOthers },
                { PlatformType.DesktopGalaxy, ViewResources.DesktopGalaxy },
                { PlatformType.MobileStandard, ViewResources.MobileStandard },
                { PlatformType.MobileEuro, ViewResources.MobileEuro },
                { PlatformType.MobileGalaxy, ViewResources.MobileGalaxy },
                { PlatformType.MobileCompact, ViewResources.MobileCompact },
                { PlatformType.MobileOthers, ViewResources.MobileOthers },
                { PlatformType.ESportsDesktop, ViewResources.ESportsDesktop },
                { PlatformType.ESportsMobile, ViewResources.ESportsMobile },
                { PlatformType.ESportsApp, ViewResources.ESportsApp },
                { PlatformType.MobileApp, ViewResources.MobileApp },
                { PlatformType.NativeApp, ViewResources.NativeApp },
                { PlatformType.Tablet, ViewResources.Tablet },
                { PlatformType.DeepLink, ViewResources.DeepLink },
                { PlatformType.WAP, ViewResources.Wap },
                { PlatformType.ChatRoom, ViewResources.ChatRoom },
                { PlatformType.BetfromOthers, ViewResources.BetfromOthers }
            };
        }

        private IEnumerable<string> GetOddGroupsList()
        {
            return new[]
            {
                "A",
                "B",
                "C",
                "D",
                "E",
                "F",
            };
        }

        private IEnumerable<ProductOption> GetProductOptionList()
        {
            var productAccess = _productService.GetProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSession.Language,
                ProductListFunctionKey);

            var list = MoveBaProductToBelowSportBook(productAccess.ProductList);

            return list.Select(i => new ProductOption
            {
                Code = i.ProductCode,
                Name = i.ProductName,
                Status = true
            }).ToList();
        }

        private static IEnumerable<Product> MoveBaProductToBelowSportBook(ReadOnlyCollection<Product> productList)
        {
            var list = productList.ToList();
            var baProduct = list.FirstOrDefault(c => c.ProductID == ProductTypes.BA);
            var sbProduct = list.FirstOrDefault(c => c.ProductID == ProductTypes.Sportsbook);
            if (baProduct != null && sbProduct != null)
            {
                list.Remove(baProduct);
                list.Insert(list.IndexOf(sbProduct) + 1, baProduct);
            }
            return list;
        }
    }
}