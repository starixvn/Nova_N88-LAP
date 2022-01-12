namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Extension.Helper;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Core.DTO.Common;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.VendorAdapter.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
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
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportExtraPayout,
                licenseeSession.LicenseeName);
            var productAccess = ProductServiceInstance.GetSingleWalletProductAccess(
               licenseeSession.LicenseeId,
               userSession.Language,
               FunctionNames.ExtraPayout);

            var param = new ExtraPayoutMetaModel
            {
                ProductOptions = ToProductOptions(productAccess.ProductList),
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

            if (productCodeList.IsPresent(_ => _ == Product.SPR))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
            {
                new CheckedItem { ID = ExtraPayoutMapType.SabaLuckySpin, Name = _cacheRefAdapter.GetBettype((int)BetType.SabaLuckySpin), Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaLoyaltyPointsExchange, Name = _cacheRefAdapter.GetBettype((int)BetType.SabaLoyaltyPointsExchange), Checked = true },
                new CheckedItem { ID = ExtraPayoutMapType.SabaRedEnvelope, Name = _cacheRefAdapter.GetBettype((int)BetType.SabaRedEnvelope), Checked = true }
            });
            }

            if (productCodeList.IsPresent(_ => _ == Product.SBC))
            {
                promotionTypeList.AddRange(new List<CheckedItem>
                {
                    new CheckedItem { ID = ExtraPayoutMapType.SCBFreeBets,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.SBC)} - {ViewResources.FreeBets}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SCBFreeBetsJackpotPrize,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.SBC)} - {_cacheRefAdapter.GetBettype((int)BetType.SCBFreeBetsJackpotPrize)}", Checked = true },
                    new CheckedItem { ID = ExtraPayoutMapType.SCBFreeBetsJackpotContribution,
                        Name = $"{ViewResources.ResourceManager.GetString(productResource + Product.SBC)} - {_cacheRefAdapter.GetBettype((int)BetType.SCBFreeBetsJackpotContribution)}",
                        Checked = true }
                });
            }

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

            return promotionTypeList;
        }
    }
}