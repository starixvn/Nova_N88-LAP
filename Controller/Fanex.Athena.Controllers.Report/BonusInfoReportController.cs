namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Extension.Helper;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.Constants;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportBonusInfo)]
    public class BonusInfoReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private const int TimeZone = 8;

        public BonusInfoReportController(IReportSettingService reportSettingService)
        {
            _reportSettingService = reportSettingService;
        }

        [HttpGet]
        [RequireCurrencyPermission]
        public ViewResult Index()
        {
            var viewModel = CreateViewModel();
            return View("~/Views/Desktop/Report/BonusInfo/Main.cshtml", viewModel);
        }

        private BonusInfoViewModel CreateViewModel()
        {
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportBonusInfo, LicenseeName);

            var minDate = GetUserLimitDataRange(reportSetting.MinDate, TimeZone);
            minDate = DateTimeHelper.GetMaxDate(minDate, reportSetting.MinDate);

            var vm = new BonusInfoViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                Today = reportSetting.MaxDate,
                MaxDate = reportSetting.MaxDate,
                MinDate = minDate,
                LimitMonthRange = reportSetting.LimitMonthRange
            };

            AssignSpecialReportDataPermission(vm);

            return vm;
        }
    }
}