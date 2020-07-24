namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Web.ActionFilter;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportWinLoss)]
    public class MarketingReportController : ReportBaseController
    {
        public MarketingReportController()
        {
        }

        [HttpGet]
        public ViewResult Index()
        {
            var viewModel = CreateViewModel();
            return View("~/Views/Desktop/Report/Marketing/Main.cshtml", viewModel);
        }

        private MarketingViewModel CreateViewModel()
        {
            var vm = new MarketingViewModel
            {
                BaseCurrency = DefaultBaseCurrency
            };
            return vm;
        }
    }
}