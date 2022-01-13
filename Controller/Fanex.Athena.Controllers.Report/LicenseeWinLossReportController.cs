namespace Fanex.Athena.Controllers.Report
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Extension.Helper;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Model.Core.DTO.Common;
    using Model.Core.DTO.Configuration;

    [FunctionAuthorization(PermissionKeys.ReportLicenseeWinLoss)]
    public class LicenseeWinLossReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;

        public LicenseeWinLossReportController(
            IReportSettingService reportSettingService
            )
        {
            _reportSettingService = reportSettingService;
        }

        [HttpGet]
        [RequireCurrencyPermission]
        public ActionResult Index()
        {
            return MapToView();
        }

        private static DateTime GetSelectedDate(ReportSetting reportSetting)
        {
            return DateTimeHelper.GetMinDate(
                reportSetting.MaxDate,
                reportSetting.TimeZone.HasValue ? DateTime.UtcNow.AddHours(reportSetting.TimeZone.Value) : DateTime.Now);
        }

        private ActionResult MapToView()
        {
            var userSession = SessionServiceInstance.UserSession;
            var userDataRangeLimitation = userSession.DataRangeLimitation;
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportLicenseeWinLoss,
                SessionServiceInstance.LicenseeSession.LicenseeName, userDataRangeLimitation);
            var selectedDate = GetSelectedDate(reportSetting);
            var productAccess = ProductServiceInstance.GetSingleWalletProductAccess(
                SessionServiceInstance.LicenseeSession.LicenseeId,
                userSession.Language,
                FunctionNames.LicenseeWinLoss);

            var param = new LicenseeWinLossMetaModel
            {
                FromDate = selectedDate,
                ToDate = selectedDate,
                LicenseeId = LicenseeId,
                IsExcludedTestData = true,
                DrawFilter = DrawFilterType.Normal,
                ReportBy = ReportByType.Daily,
                ProductOptions = ToProductOptions(productAccess.ProductList),
                BrandOptions = BrandList.Select(_ => new CheckedItem { ID = _.Id, Name = _.Name, Checked = _.Id == LicenseeId }),
                BaseCurrency = userSession.DefaultBaseCurrency,
                CurrencyId = SystemConstants.BaseCurrencyList
                .FirstOrDefault(x => x.Value.Equals(userSession.DefaultBaseCurrency, StringComparison.OrdinalIgnoreCase))
                .Key
            };

            var model = new LicenseeWinLossViewModel
            {
                Param = param,
                CurrencyList = userSession.CurrencyList,
                Brands = BrandList,
                IsAllowedCustomerCommission = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
                IsAllowedExtraPayout = SessionServiceInstance.UserSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportExtraPayout),
                ProductAccess = productAccess,
                ReportSetting = reportSetting
            };
            return View("~/Views/Desktop/Report/LicenseeWinLoss/Main.cshtml", model);
        }
    }
}