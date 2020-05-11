using Fanex.Athena.Model.Auth.DataDomain;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Report.ViewModel;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.Web.ActionFilter;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Fanex.Athena.Controllers.Report
{
    [FunctionAuthorization(PermissionKeys.ReportWinLoss)]
    public class WinLossReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly IReportAPIClient _reportAPIClient;

        public WinLossReportController(IReportSettingService reportSettingService, IReportAPIClient reportAPIClient)
        {
            _reportSettingService = reportSettingService;
            _reportAPIClient = reportAPIClient;
        }

        [HttpGet]
        public async Task<ViewResult> Index()
        {
            var viewModel = CreateViewModel();
            var view = CreateView(viewModel);
            return view;
        }

        public async Task<JsonResult> GetData()
        {
            var data = await _reportAPIClient.PostStringAsync("api/WinLossReport/GetData", new { }, Language, 10).ConfigureAwait(false);
            var json = JsonString(data);
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        [HttpPost]
        public async Task<JsonResult> GetData(WinLossViewModel vm)
        {
            var data = await _reportAPIClient.PostStringAsync("api/WinLossReport/GetData", new { }, Language, 10).ConfigureAwait(false);
            var json = JsonString(data);
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }

        private ViewResult CreateView(WinLossViewModel vm)
        {
            return View("~/Views/Desktop/Report/WinLoss/Main.cshtml", vm);
        }

        private WinLossViewModel CreateViewModel()
        {
            var vm = new WinLossViewModel
            {
                CurrencyList = CurrencyList,
                BaseCurrency = DefaultBaseCurrency,
                ProductOptionList = GetProductOptionList()
            };
            return vm;
        }
    }
}