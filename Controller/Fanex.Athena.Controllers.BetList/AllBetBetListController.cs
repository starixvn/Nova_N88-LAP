namespace Fanex.Athena.Controllers.BetList
{
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Fanex.Athena.Web.ActionFilter;
    using Model.BetList.MetaModel;
    using Resources;

    public class AllBetBetListController : BetListBaseController
    {
        [HttpGet]
        [ValidationWebRequest(IsValidCurrency = true)]
        public async Task<ActionResult> Detail(BetListExcelMetaModel metaModel)
        {
            CreateDefaultMetaModel(metaModel);
            return await ProcessDefaultRequest(metaModel, "~/Views/Desktop/BetList/AGCasinoDetail/Main.cshtml", "Lrf_BetList_LC_Detail").ConfigureAwait(false);
        }

        protected override async Task<ActionResult> ExportExcel(BetListExcelMetaModel metaModel)
        {
            metaModel.ShowingOption = new BetListShowingOption
            {
                GrandTotalVisible = false,
                CustomerCommVisible = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm
            };

            metaModel.HiddenColumns = new[] { ExternalIdColumn, SystemIdColumn, BetEffectiveColumn, LicenseeWLColumn };
            metaModel.Title = GetBetListDetailTitle(ViewResources.ProductAB, metaModel.Date);

            return await ProcessExportExcel(metaModel, "AllBetDetail").ConfigureAwait(false);
        }
    }
}