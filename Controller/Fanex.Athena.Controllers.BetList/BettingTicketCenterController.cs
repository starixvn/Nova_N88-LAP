namespace Fanex.Athena.Controllers.BetList
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using DataAccess.Core.Configuration.Interfaces;
    using Extension.Helper;
    using Model.Auth.DataDomain;
    using Model.BetList.ViewModel;
    using Model.Core.DataDomain;
    using Model.Core.DTO.Common;
    using Model.Core.MetaModel.Product;
    using N88.Core.Configuration;
    using N88.Core.Service.Interface;
    using Resources;
    using Service.StatelessCore.Interfaces;
    using Web.ActionFilter;
    using static N88.Core.Business.Constant;

    [FunctionAuthorization(PermissionKeys.BetHistory)]
    public class BettingTicketCenterController : CultureBaseController
    {
        private readonly IBalanceUpDataAccess _balanceUpDataAccess;
        private readonly N88Settings _n88Settings;
        private readonly IProductService _productService;
        private readonly IUserService _userService;

        public BettingTicketCenterController(
            IProductService productService,
            IBalanceUpDataAccess balanceUpDataAccess,
            IUserService userService,
            N88Settings n88Settings = null)
        {
            _productService = productService;
            _balanceUpDataAccess = balanceUpDataAccess;
            _userService = userService;
            _n88Settings = n88Settings ?? N88Settings.Settings;
        }

        [RequireCurrencyPermission]
        public ActionResult Index()
        {
            var tabList = GetEnableTabList();

            if (tabList.Any(x => PermissionKeys.BetHistorySingleCustomer == x))
            {
                return SingleCustomer();
            }

            if (tabList.Any(x => PermissionKeys.BetHistoryRefNo == x))
            {
                return RefNo();
            }

            if (tabList.Any(x => PermissionKeys.BetHistoryRunning == x))
            {
                return Running();
            }

            if (tabList.Any(x => PermissionKeys.BetHistoryAdvancedSearch == x))
            {
                return AdvancedSearch();
            }

            if (tabList.Any(x => PermissionKeys.BetHistoryBookedBet == x))
            {
                return BookedBet();
            }

            return RedirectToAction("AccessDenied", "Utility");
        }

        [FunctionAuthorization(PermissionKeys.BetHistoryAdvancedSearch)]
        [RequireCurrencyPermission]
        public ActionResult AdvancedSearch()
        {
            var tabList = GetEnableTabList();
            var balanceUpday = _balanceUpDataAccess.GetBalanceUp().BalanceUpDay;
            var minDate = GetUserLimitDataRange(balanceUpday, DefaultTimeZone);
            minDate = DateTimeHelper.GetMaxDate(minDate, balanceUpday);

            var viewModel = new BettingTicketCenterViewModel
            {
                LiveStatusList = GetLiveStatusList(),
                StatusList = GetStatusList(),
                ProductOptionList = GetProductOptionList(FunctionNames.BettingTicketCenterAdvancedSearch),
                MinDate = minDate,
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                TabList = tabList
            };
            return View("~/Views/Desktop/BetList/BettingTicketCenter/AdvancedSearch.cshtml", viewModel);
        }

        [FunctionAuthorization(PermissionKeys.BetHistorySingleCustomer)]
        [RequireCurrencyPermission]
        public ActionResult SingleCustomer()
        {
            var tabList = GetEnableTabList();

            var viewModel = new BettingTicketCenterViewModel
            {
                LiveStatusList = GetLiveStatusList(),
                StatusList = GetStatusList(),
                PlatformList = GetPlatformList(),
                ProductOptionList = GetProductOptionList(),
                MinDate = GetUserLimitDataRange(new DateTime(2017, 1, 1), DefaultTimeZone),
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                TabList = tabList
            };
            return View("~/Views/Desktop/BetList/BettingTicketCenter/SingleCustomer.cshtml", viewModel);
        }

        [FunctionAuthorization(PermissionKeys.BetHistoryRefNo)]
        [RequireCurrencyPermission]
        public ActionResult RefNo()
        {
            var tabList = GetEnableTabList();

            ViewBag.ProductsRequireUseNameNote = string.Format(
                ViewResources.BettingTicketCenter_RefnoTabNote2,
                GetProductsRequireUseName(),
                _balanceUpDataAccess.GetBalanceUp().BalanceUpDay.ToString(FormatKey.DateFormat));
            ViewBag.SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency;
            ViewBag.TabList = tabList;

            return View(
                "~/Views/Desktop/BetList/BettingTicketCenter/RefNo.cshtml",
                SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm);
        }

        [FunctionAuthorization(PermissionKeys.BetHistoryRunning)]
        [RequireCurrencyPermission]
        public ActionResult Running()
        {
            var tabList = GetEnableTabList();
            var viewModel = new BettingTicketCenterViewModel
            {
                StatusList = GetRunningStatusList(),
                ProductOptionList = GetProductOptionList(FunctionNames.BettingTicketCenterRunning),
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                TabList = tabList
            };

            return View("~/Views/Desktop/BetList/BettingTicketCenter/Running.cshtml", viewModel);
        }

        [FunctionAuthorization(PermissionKeys.BetHistoryBookedBet)]
        public ActionResult BookedBet()
        {
            var tabList = GetEnableTabList();
            var userSession = SessionServiceInstance.UserSession;
            var ownBrand = BrandList.First(_ => _.Id == LicenseeId);

            var viewModel = new BettingTicketCenterViewModel
            {
                StatusList = GetBookedBetStatusList(),
                CurrencyList = ownBrand.CurrencyList,
                PlatformList = GetPlatformList(),
                IsAllowedCustomerComm = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                SelectedBaseCurrency = SessionServiceInstance.UserSession.DefaultBaseCurrency,
                OwnBrand = ownBrand,
                Brands = BrandList,
                TabList = tabList
            };

            return View("~/Views/Desktop/BetList/BettingTicketCenter/BookedBet.cshtml", viewModel);
        }

        private IEnumerable<string> GetEnableTabList()
        {
            var functionKeys = _userService.GetPermissions(
                    SessionServiceInstance.UserSession.UserId,
                    _n88Settings.SiteId,
                    string.Empty,
                    _n88Settings.Environment)
                .Where(x => x.Policy == (byte)Policy.Read || x.Policy == (byte)Policy.Host)
                .Select(x => x.Function.Key);

            return BtcViewInfo.TabList.Intersect(functionKeys);
        }

        private string GetProductsRequireUseName()
        {
            var productsRequireUseName = new[]
            {
                Product.KN,
                Product.LT,
                Product.CS,
                Product.CC,
                Product.PP,
                Product.VRG,
                Product.TG,
                Product.I4D,
                Product.VGA
            };

            var productAccess = _productService.GetSingleWalletProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSession.Language);

            var licProductsRequireUseName = productAccess.ProductList
                .Where(product => productsRequireUseName.Contains(product.ProductCode))
                .Select(x => x.ProductName).ToList();

            var offeredSubProductList = SessionServiceInstance.LicenseeSession.OfferedSubProductList;

            if (offeredSubProductList.IsPresent(_ => _ == Product.SLT))
            {
                licProductsRequireUseName.Add(ViewResources.ProductSLT);
            }

            if (productAccess.ProductList.Any(p => string.Equals(p.ProductCode, "NG")))
            {
                licProductsRequireUseName.Add(ViewResources.Happy5LinkedGames);
            }

            return string.Join(", ", licProductsRequireUseName);
        }

        private static IEnumerable<CheckedItem> GetBookedBetStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Booking, Name = ViewResources.Booking, Checked = true },
                new CheckedItem { ID = StatusTypes.Successful, Name = ViewResources.Successful, Checked = true },
                new CheckedItem { ID = StatusTypes.Unsuccessful, Name = ViewResources.Unsuccessful, Checked = true },
                new CheckedItem { ID = StatusTypes.Cancelled, Name = ViewResources.Cancelled, Checked = true }
            };
        }

        private static IEnumerable<CheckedItem> GetRunningStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Waiting, Name = ViewResources.Running, Checked = true },
                new CheckedItem { ID = StatusTypes.DelayedPayout, Name = ViewResources.DelayedPayout, Checked = true },
                new CheckedItem { ID = StatusTypes.UnderSettlement, Name = ViewResources.UnderSettlement, Checked = true }
            };
        }

        private static IEnumerable<CheckedItem> GetStatusList()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = StatusTypes.Won, Name = ViewResources.Won, Checked = true },
                new CheckedItem { ID = StatusTypes.Lose, Name = ViewResources.Lost, Checked = true },
                new CheckedItem { ID = StatusTypes.Draw, Name = ViewResources.Draw, Checked = true },
                new CheckedItem { ID = StatusTypes.Void, Name = ViewResources.Void },
                new CheckedItem { ID = StatusTypes.AbnormalBet, Name = ViewResources.AbnormalBet },
                new CheckedItem { ID = StatusTypes.Reject, Name = ViewResources.Reject },
                new CheckedItem { ID = StatusTypes.Refund, Name = ViewResources.Refund },
                new CheckedItem { ID = StatusTypes.DelayedPayout, Name = ViewResources.DelayedPayout }
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

        private static IDictionary<int, string> GetLiveStatusList()
        {
            return new Dictionary<int, string>
            {
                { LiveStatusTypes.NonLive, ViewResources.NoneLive },
                { LiveStatusTypes.Live, ViewResources.Live },
                { LiveStatusTypes.Mix, ViewResources.MixLiveAndNoneLive }
            };
        }

        private IEnumerable<ProductOption> GetProductOptionList(string functionConfigKey = FunctionNames.BettingTicketCenter)
        {
            var productAccess = _productService.GetSingleWalletProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                SessionServiceInstance.UserSession.Language,
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