namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportMarketing)]
    public class MarketingReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly ITpService _tpService;

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

        private MarketingViewModel CreateViewModel()
        {
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportMarketing, LicenseeName);
            var tpProducts = _tpService.GetListTpProduct();

            var vm = new MarketingViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                TpProducts = tpProducts,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                Today = reportSetting.MaxDate.AddDays(1),
                MaxDate = reportSetting.MaxDate,
                MinDate = reportSetting.MinDate,
                LimitMonthRange = reportSetting.LimitMonthRange
            };
            return vm;
        }
    }
}