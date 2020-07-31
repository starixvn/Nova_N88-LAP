namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportMarketing)]
    public class MarketingReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;

        public MarketingReportController(IReportSettingService reportSettingService)
        {
            _reportSettingService = reportSettingService;
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

            var vm = new MarketingViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                Today = reportSetting.MaxDate
            };
            return vm;
        }
    }
}