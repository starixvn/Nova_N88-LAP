namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportMarketing)]
    [RequireCurrencyPermission]
    public class MarketingReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly ITpService _tpService;
        private const int TimeZone = 8;

        public MarketingReportController(IReportSettingService reportSettingService, ITpService tpService)
        {
            _reportSettingService = reportSettingService;
            _tpService = tpService;
        }

        [HttpGet]
        public ViewResult Index()
        {
            var viewModel = CreateViewModel();
            return View("~/Views/Desktop/Report/Marketing/Main.cshtml", viewModel);
        }

        [HttpGet]
        public ViewResult PerformanceHighlightDetail(MarketingPerformanceHighlightDetailMetaModel metaModel)
        {
            return View("~/Views/Desktop/Report/Marketing/PerformanceHighlightDetail.cshtml", metaModel);
        }

        private MarketingViewModel CreateViewModel()
        {
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportMarketing, LicenseeName);
            var tpProducts = _tpService.GetListTpProduct();
            int.TryParse(SessionServiceInstance.UserSession.SettingList?.FirstOrDefault(_ => _.SettingKey == SettingKey.LimitDays)?.SettingValue, out int userLimitDataRange);

            var vm = new MarketingViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                TpProducts = tpProducts,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                Today = reportSetting.MaxDate,
                MaxDate = reportSetting.MaxDate,
                MinDate = GetUserLimitDataRange(reportSetting.MinDate, TimeZone),
                LimitMonthRange = reportSetting.LimitMonthRange,
                UserLimitDataRange = userLimitDataRange
            };

            return vm;
        }
    }
}