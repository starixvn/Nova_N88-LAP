namespace Fanex.Athena.Controllers.Report
{
    using System.Collections.Generic;
    using System.Collections.ObjectModel;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Extension.Helper;
    using Model.Auth.DataDomain;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;
    using Model.Core.MetaModel.Product;
    using Model.Report.MetaModel;
    using Resources;
    using Service.Customer.Interfaces;
    using Service.StatelessCore.Interfaces;
    using Web.ActionFilter;

    [FunctionAuthorization(PermissionKeys.ReportWinlossAnalysis)]
    public class WinlossAnalysisReportController : ReportBaseController
    {
        private const string ProductListFunctionKey = "WinlossAnalysis";
        private readonly ICustomerClassService _customerClassService;

        private readonly IProductService _productService;

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
                Brands = BrandList
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
                { PlatformType.DesktopCompact, ViewResources.DesktopCompact },
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
                { PlatformType.QuickBetWidget, ViewResources.QuickBetWidget },
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
                "I",
                "M",
                "Q"
            };
        }

        private IEnumerable<ProductOption> GetProductOptionList()
        {
            var productAccess = _productService.GetProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSession.Language,
                ProductListFunctionKey);

            return productAccess.ProductList.Select(i => new ProductOption
            {
                Code = i.ProductCode,
                Name = i.ProductName,
                Status = true
            }).ToList();
        }
    }
}