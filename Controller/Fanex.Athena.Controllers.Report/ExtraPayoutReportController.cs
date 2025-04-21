namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Extension.Helper;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Core.MetaModel.Product;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.VendorAdapter.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportExtraPayout)]
    public class ExtraPayoutReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly ICacheRefAdapter _cacheRefAdapter;
        private readonly Dictionary<string, List<CheckedItem>> ProductToPromotionTypeMap;
        private const string ProductResource = "Product";

        public ExtraPayoutReportController(
            IReportSettingService reportSettingService,
            ICacheRefAdapter cacheRefAdapter)
        {
            _reportSettingService = reportSettingService;
            _cacheRefAdapter = cacheRefAdapter;

            ProductToPromotionTypeMap = new Dictionary<string, List<CheckedItem>>
            {
                { Product.SB, AddPromotionTypesForProductSb() },
                { Product.CC, AddPromotionTypesForProductCc() },
                { Product.TIP, AddPromotionTypesForProductTip() },
                { Product.VGA, AddPromotionTypesForProductVga() },
                { Product.SPR, AddPromotionTypesForProductSpr() }
            };
        }

        public ActionResult Index()
        {
            var licenseeSession = SessionServiceInstance.LicenseeSession;
            var userSession = SessionServiceInstance.UserSession;
            int.TryParse(userSession.SettingList?.FirstOrDefault(_ => _.SettingKey == SettingKey.LimitDays)?.SettingValue, out int userDataRangeLimitation);
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportExtraPayout, licenseeSession.LicenseeName, userDataRangeLimitation);
            var productAccess = ProductServiceInstance.GetSingleWalletProductAccess(
               licenseeSession.LicenseeId,
               userSession.Language,
               FunctionNames.ExtraPayout);

            var param = new ExtraPayoutMetaModel
            {
                ProductOptions = AddPlayerTipsProDuct(ToProductOptions(productAccess.ProductList)),
                IsExcludedTestData = true,
                ReportBy = ReportByType.Daily
            };

            var model = new ExtraPayoutViewModel
            {
                Param = param,
                CurrencyList = userSession.CurrencyList,
                IsAllowedCustomerCommission = licenseeSession.IsAllowedCustomerComm,
                ReportSetting = reportSetting,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList
            };
            ViewBag.DefaultSelectedBaseCurrency = userSession.DefaultBaseCurrency;

            return View("~/Views/Desktop/Report/ExtraPayout/Main.cshtml", model);
        }

        [HttpGet]
        public ActionResult GetPromotionTypes(string productCodeList)
        {
            var result = BuildPromotionTypeList(productCodeList).Select(x => new { value = x.ID, label = x.Name, status = true });
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        public IEnumerable<CheckedItem> BuildPromotionTypeList(string productCodeList)
        {
            var promotionTypeList = new List<CheckedItem>();

            if (string.IsNullOrEmpty(productCodeList))
            {
                return promotionTypeList;
            }

            foreach (var productCode in productCodeList.Split(','))
            {
                if (ProductToPromotionTypeMap.TryGetValue(productCode, out List<CheckedItem> checkedItems))
                {
                    promotionTypeList.AddRange(checkedItems);
                }
            }

            return promotionTypeList;
        }

        private List<CheckedItem> AddPromotionTypesForProductSpr()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.SabaLuckySpin,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int)BetType.SabaLuckySpin)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaLoyaltyPointsExchange,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int)BetType.SabaLoyaltyPointsExchange)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaRewardRiskFreeRebate,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaRewardRiskFreeRebate)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaRedEnvelope,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaRedEnvelope)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.PayoutSabaCoinsCashExchange,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaCoinsCashExchange)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.PayoutPromotionJackpotPrize,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.PromotionJackpotPrize)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.PayoutPromotionCashPrize,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.PromotionCashPrize)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaCasinoRoyaleTournamentPrize,
                    Name = $"{ViewResources.CasinoPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaCasinoRoyaleTournamentPrize)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.NumberGameLuckyDrawPromotion,
                    Name = $"{ViewResources.NGPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.NumberGameLuckyDrawPromotion)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.NBAPlayoffsLotteryPromotion,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.NBAPlayoffsLotteryPromotion)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.NBABalanceAdjustment,
                    Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.NBABalanceAdjustment)}", Checked = true },
            };
        }

        private List<CheckedItem> AddPromotionTypesForProductCc()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.ArcadiaGamingBonus, Name = _cacheRefAdapter.GetBettype((int)BetType.ArcadiaGamingBonus), Checked = true }
            };
        }

        private List<CheckedItem> AddPromotionTypesForProductVga()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBets,
                    Name = $"{ViewResources.ResourceManager.GetString(ProductResource + Product.VGA)} - {ViewResources.FreeBets}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.VgamingPromotionPrize,
                    Name = $"{ViewResources.ResourceManager.GetString(ProductResource + Product.VGA)} - {_cacheRefAdapter.GetBettype((int)BetType.VgamingPromotionPrize)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBetsJackpotPrize,
                    Name = $"{ViewResources.ResourceManager.GetString(ProductResource + Product.VGA)} - {_cacheRefAdapter.GetBettype((int)BetType.VgamingFreeBetsJackpotPrize)}", Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBetsJackpotContribution,
                    Name = $"{ViewResources.ResourceManager.GetString(ProductResource + Product.VGA)} - {_cacheRefAdapter.GetBettype((int)BetType.VgamingFreeBetsJackpotContribution)}",
                    Checked = true }
            };
        }

        private List<CheckedItem> AddPromotionTypesForProductTip()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.TIPStreamerTips,
                        Name = _cacheRefAdapter.GetBettype((int)BetType.TIPStreamerTips), Checked = true }
            };
        }

        private List<CheckedItem> AddPromotionTypesForProductSb()
        {
            return new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.OddsBoostAdjustment,
                    Name = $"{ViewResources.ProductSB} - {ViewResources.OddsBoostBonus}", Checked = true }
            };
        }

        private IList<ProductOption> AddPlayerTipsProDuct(IList<ProductOption> productList)
        {
            var originalProductList = ProductServiceInstance.GetProductList(SessionServiceInstance.LicenseeSession.LicenseeId, SessionServiceInstance.UserSession.Language);

            if (originalProductList.Any(_ => _.ProductCode == Product.SB))
            {
                productList.Add(new ProductOption { Code = Product.TIP, Name = ViewResources.ProductTIP, Status = true });
            }

            return productList;
        }
    }
}