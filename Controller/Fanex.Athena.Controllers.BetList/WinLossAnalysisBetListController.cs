namespace Fanex.Athena.Controllers.BetList
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Model.BetList.MetaModel;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Web.ActionFilter;

    [FunctionAuthorization(PermissionKeys.ReportWinLoss)]
    [BetListAuthorization]
    public class WinLossAnalysisBetListController : BetListBaseController
    {
        private const string NoteFormat = "{0}: {1}\r\n         {2}";
        private const string TitleFormat = "{0} {1} → {2} - {3} - {4}{5} - {6}";
        private const string UspKey = "N88_BetList_WinLossAnalysis";

        private static readonly int[] HiddenColumns = new[] { ExternalIdColumn, SystemIdColumn, BetEffectiveColumn };

        private readonly ITpService _tpService;

        public WinLossAnalysisBetListController(ITpService tpService)
        {
            _tpService = tpService;
        }

        [HttpGet]
        public Task<ActionResult> Index(BetListExcelMetaModel metaModel)
        {
            CreateDefaultMetaModel(metaModel);
            metaModel.ProductName = _tpService.GetListTpProduct()
                .FirstOrDefault(_ => _.Id.Equals(metaModel.ProductId.ToString()))?
                .Name;

            return ProcessDefaultRequest(metaModel, "~/Views/Desktop/BetList/WinLossAnalysis/Main.cshtml", UspKey);
        }

        protected override Task<ActionResult> ExportExcel(BetListExcelMetaModel metaModel)
        {
            metaModel.Title = GetTitle(metaModel);
            metaModel.Note = string.Format(NoteFormat, ViewResources.Note, ViewResources.LatencySabaSideNote, ViewResources.TimezoneServerNote);
            metaModel.ShowingOption = new BetListShowingOption
            {
                CustomerCommVisible = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm,
            };
            metaModel.HiddenColumns = HiddenColumns;

            return ProcessExportExcel(metaModel, $"{ViewResources.PlayerBetList}_{metaModel.ProductName}");
        }

        protected static string GetTitle(BetListExcelMetaModel metaModel)
        {
            var currencyTitle = string.Format(ViewResources.Viewin, metaModel.IsConvert ? SystemConstants.BaseCurrencyList[metaModel.BaseCurrencyId] : metaModel.CurrencyName);
            return string.Format(TitleFormat, ViewResources.PlayerBetList,
                metaModel.FromDate.ToShortDateString(), metaModel.ToDate.ToShortDateString(),
                metaModel.ProductName,
                metaModel.ExternalId, string.IsNullOrWhiteSpace(metaModel.SystemId) ? string.Empty : $" ({metaModel.SystemId})", currencyTitle);
        }
    }
}