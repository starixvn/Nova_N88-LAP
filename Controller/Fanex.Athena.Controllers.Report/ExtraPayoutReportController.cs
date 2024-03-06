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

        public ExtraPayoutReportController(
            IReportSettingService reportSettingService,
            ICacheRefAdapter cacheRefAdapter)
        {
            _reportSettingService = reportSettingService;
            _cacheRefAdapter = cacheRefAdapter;
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
        public ActionResult GetPromotionTypes(string productCode)
        {
            var result = BuildPromotionTypeList(productCode).Select(x => new { value = x.ID, label = x.Name, status = true });
            return Json(result, JsonRequestBehavior.AllowGet);
        }

        private IEnumerable<CheckedItem> BuildPromotionTypeList(string productCode)
        {
            var promotionTypeList = new List<CheckedItem>();

            if (string.IsNullOrEmpty(productCode))
            {
                return promotionTypeList;
            }
            const string productResource = "Product";
            var productCodeList = productCode?.Split(',');

            if (productCodeList.IsPresent(_ => _ == Product.SB))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.SBParlayBoost, Name =  ViewResources.ParlayBoost, Checked = true }
                });
            }

            AddPromotionTypesForProductSPR(promotionTypeList, productCodeList);

            if (productCodeList.IsPresent(_ => _ == Product.CC))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.ArcadiaGamingBonus, Name = _cacheRefAdapter.GetBettype((int)BetType.ArcadiaGamingBonus), Checked = true }
                });
            }

            if (productCodeList.IsPresent(_ => _ == Product.VGA))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBets,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.VGA)} - {ViewResources.FreeBets}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBetsJackpotPrize,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.VGA)} - {_cacheRefAdapter.GetBettype((int)BetType.VgamingFreeBetsJackpotPrize)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.VgamingFreeBetsJackpotContribution,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.VGA)} - {_cacheRefAdapter.GetBettype((int)BetType.VgamingFreeBetsJackpotContribution)}",
                        Checked = true }
                });
            }

            if (productCodeList.IsPresent(_ => _ == Product.TIP))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.TIPStreamerTips,
                        Name = _cacheRefAdapter.GetBettype((int)BetType.TIPStreamerTips), Checked = true }
                });
            }

            return promotionTypeList;
        }

        private void AddPromotionTypesForProductSPR(List<CheckedItem> promotionTypeList, IEnumerable<string> productCodeList)
        {
            if (productCodeList.IsPresent(_ => _ == Product.SPR))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.SabaLuckySpin,
                        Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int)BetType.SabaLuckySpin)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SabaLoyaltyPointsExchange,
                        Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int)BetType.SabaLoyaltyPointsExchange)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SabaRewardRiskFreeRebate,
                        Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaRewardRiskFreeRebate)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SabaRedEnvelope,
                        Name = $"{ViewResources.SBPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaRedEnvelope)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SabaCasinoRoyaleTournamentPrize,
                        Name = $"{ViewResources.CasinoPromotion} - {_cacheRefAdapter.GetBettype((int) BetType.SabaCasinoRoyaleTournamentPrize)}", Checked = true }
                });
            }
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