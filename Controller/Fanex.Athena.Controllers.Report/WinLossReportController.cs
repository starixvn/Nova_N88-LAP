namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportWinLoss)]
    public class WinLossReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;

        public WinLossReportController(IReportSettingService reportSettingService)
        {
            _reportSettingService = reportSettingService;
        }

        [HttpGet]
        public ViewResult Index()
        {
            var viewModel = CreateViewModel();
            return View("~/Views/Desktop/Report/WinLoss/Main.cshtml", viewModel);
        }

        private WinLossViewModel CreateViewModel()
        {
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportWinLoss, LicenseeName);
            var tpProducts = ProductServiceInstance.GetListTpProduct();
            var vm = new WinLossViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                CurrencyList = CurrencyList,
                TpProducts = tpProducts,
                MaxDate = reportSetting.MaxDate,
                MinDate = reportSetting.MinDate,
                LimitMonthRange = reportSetting.LimitMonthRange
            };
            return vm;
        }
    }
}