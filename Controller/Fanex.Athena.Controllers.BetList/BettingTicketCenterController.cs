namespace Fanex.Athena.Controllers.BetList
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Fanex.Athena.DataAccess.Core.Configuration.Interfaces;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.BetList.ViewModel;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.MetaModel.Product;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.NAP.Core.Business;
    using Fanex.NAP.Core.Configuration;
    using Fanex.NAP.Core.Service.Interface;
    using Fanex.NAP.Core.Web.Attribute;

    [NapAuth(FunctionKey = PermissionKeys.BetHistory, Policy = Constant.Policy.Read)]
    public class BettingTicketCenterController : CultureBaseController
    {
        private readonly IProductService _productService;
        private readonly IBalanceUpDataAccess _balanceUpDataAccess;
        private readonly IUserService userService;

        public BettingTicketCenterController(
            IProductService productService,
            IBalanceUpDataAccess balanceUpDataAccess,
            IUserService userService)
        {
            _productService = productService;
            _balanceUpDataAccess = balanceUpDataAccess;
            this.userService = userService;
        }

        public ActionResult Index()
        {
            var tabList = GetEnableTabList();

            if (tabList.Any(x => PermissionKeys.BetHistorySingleCustomer == x))
            {
                return SingleCustomer();
            }
            else if (tabList.Any(x => PermissionKeys.BetHistoryRefNo == x))
            {
                return RefNo();
            }
            else if (tabList.Any(x => PermissionKeys.BetHistoryRunning == x))
            {
                return Running();
            }
            else if (tabList.Any(x => PermissionKeys.BetHistoryAdvancedSearch == x))
            {
                return AdvancedSearch();
            }
            else
            {
                return RedirectToAction("AccessDenied", "Utility");
            }
        }

        [NapAuth(FunctionKey = PermissionKeys.BetHistoryAdvancedSearch, Policy = Constant.Policy.Read)]
        public ActionResult AdvancedSearch()
        {
            var tabList = GetEnableTabList();
            var viewModel = new BettingTicketCenterViewModel
            {
                CurrencyList = GetCurrencyList(),
                LiveStatusList = GetLiveStatusList(),
                StatusList = GetStatusList(),
                ProductOptionList = GetProductOptionList(FunctionNames.BettingTicketCenterAdvancedSearch),
                MinDate = _balanceUpDataAccess.GetBalanceUp().BalanceUpDay,
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSessionInfo.DefaultBaseCurrency,
                HasExchange = false,
                TabList = tabList
            };
            return View("~/Views/Desktop/BetList/BettingTicketCenter/AdvancedSearch.cshtml", viewModel);
        }

        [NapAuth(FunctionKey = PermissionKeys.BetHistorySingleCustomer, Policy = Constant.Policy.Read)]
        public ActionResult SingleCustomer()
        {
            var tabList = GetEnableTabList();
            var viewModel = new BettingTicketCenterViewModel
            {
                LiveStatusList = GetLiveStatusList(),
                StatusList = GetStatusList(),
                PlatformList = GetPlatformList(),
                ProductOptionList = GetProductOptionList(),
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSessionInfo.DefaultBaseCurrency,
                HasExchange = false,
                TabList = tabList
            };
            return View("~/Views/Desktop/BetList/BettingTicketCenter/SingleCustomer.cshtml", viewModel);
        }

        [NapAuth(FunctionKey = PermissionKeys.BetHistoryRefNo, Policy = Constant.Policy.Read)]
        public ActionResult RefNo()
        {
            var tabList = GetEnableTabList();

            ViewBag.ProductsRequireUseNameNote = string.Format(
                ViewResources.BettingTicketCenter_RefnoTabNote2,
                GetProductsRequireUseName(),
                _balanceUpDataAccess.GetBalanceUp().BalanceUpDay.ToString(FormatKey.DateFormat));
            ViewBag.SelectedBaseCurrency = SessionServiceInstance.UserSessionInfo.DefaultBaseCurrency;
            ViewBag.HasExchange = false;
            ViewBag.TabList = tabList;

            return View(
                "~/Views/Desktop/BetList/BettingTicketCenter/RefNo.cshtml",
                SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm);
        }

        [NapAuth(FunctionKey = PermissionKeys.BetHistoryRunning, Policy = Constant.Policy.Read)]
        public ActionResult Running()
        {
            var tabList = GetEnableTabList();
            var viewModel = new BettingTicketCenterViewModel
            {
                StatusList = GetRunningStatusList(),
                CurrencyList = GetCurrencyList(),
                ProductOptionList = GetProductOptionList(FunctionNames.BettingTicketCenterRunning),
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSessionInfo.DefaultBaseCurrency,
                HasExchange = false,
                TabList = tabList
            };

            return View("~/Views/Desktop/BetList/BettingTicketCenter/Running.cshtml", viewModel);
        }

        private IEnumerable<string> GetEnableTabList()
        {
            var functionKeys = userService.GetPermissions(
                SessionServiceInstance.UserSessionInfo.UserId,
                NapSettings.Settings.SiteId,
                PermissionKeys.BetHistory,
                NapSettings.Settings.Environment).Select(x => x.Function.Key);

            return BtcViewInfo.TabList.Intersect(functionKeys);
        }

        private string GetProductsRequireUseName()
        {
            var productsRequireUseName = new[]
            {
                Product.KN,
                Product.LT,
                Product.CB,
                Product.CS,
                Product.AB,
                Product.VB,
                Product.FW,
                Product.CC,
                Product.PP,
                Product.SG
            };

            var productAccess = _productService.GetSingleWalletProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSessionInfo.Language);

            var licProductsRequireUseName = productAccess.ProductList
                .Where(product => productsRequireUseName.Contains(product.ProductCode))
                .Select(x => x.ProductName);

            return string.Join(", ", licProductsRequireUseName);
        }

        private static IEnumerable<CheckedItem> GetRunningStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Waiting, Name = ViewResources.Running, Checked = true },
                new CheckedItem { ID = StatusTypes.ResultPending, Name = ViewResources.ResultPending, Checked = true },
                new CheckedItem { ID = StatusTypes.UnderSettlement, Name = ViewResources.UnderSettlement, Checked = true }
            };
        }

        private static IEnumerable<CheckedItem> GetStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Won, Name = ViewResources.Won, Checked = true },
                new CheckedItem { ID = StatusTypes.Lose, Name = ViewResources.Lose, Checked = true },
                new CheckedItem { ID = StatusTypes.Draw, Name = ViewResources.Draw, Checked = true },
                new CheckedItem { ID = StatusTypes.Void, Name = ViewResources.Void },
                new CheckedItem { ID = StatusTypes.AbnormalBet, Name = ViewResources.AbnormalBet },
                new CheckedItem { ID = StatusTypes.Reject, Name = ViewResources.Reject },
                new CheckedItem { ID = StatusTypes.Refund, Name = ViewResources.Refund }
            };
        }

        private static IDictionary<int, string> GetPlatformList()
        {
            return new Dictionary<int, string>
            {
                { 0, ViewResources.All },
                { PlatformType.Asia, ViewResources.Asia },
                { PlatformType.China, ViewResources.China },
                { PlatformType.Euro, ViewResources.Euro },
                { PlatformType.Wap, ViewResources.Wap },
                { PlatformType.Mobile, ViewResources.Mobile },
                { PlatformType.Tablet, ViewResources.Tablet },
                { PlatformType.NewAsia, ViewResources.NewAsia },
                { PlatformType.MobileApp, ViewResources.MobileApp },
                { PlatformType.MobileLiteVersion, ViewResources.MobileLiteVersion },
                { PlatformType.DeepLink, ViewResources.DeepLink },
                { PlatformType.NativeApp, ViewResources.NativeApp },
                { PlatformType.BetfromOthers, ViewResources.BetfromOthers }
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

        private IDictionary<int, string> GetCurrencyList()
        {
            return SessionServiceInstance.UserSessionInfo.CurrencyList;
        }

        private IEnumerable<ProductOption> GetProductOptionList(string functionConfigKey = FunctionNames.BettingTicketCenter)
        {
            var productAccess = _productService.GetSingleWalletProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSessionInfo.Language,
                functionConfigKey);

            return productAccess.ProductList.Select(i => new ProductOption
            {
                Code = i.ProductCode,
                Name = i.ProductName,
                Status = true
            }).ToList();
        }
    }
}