using Fanex.Athena.Model.BetList.MetaModel;
using Fanex.Athena.Resources;
using Fanex.Athena.Web.ActionFilter;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Fanex.Athena.Controllers.BetList
{
    public class SabaClubJackpotWonBetListController : BetListBaseController
    {
        private static readonly int[] HiddenColumns = new[] { ExternalIdColumn, SystemIdColumn, BetEffectiveColumn, LicenseeWLColumn };

        [HttpGet]
        [ValidationWebRequest(IsValidCurrency = true)]
        public async Task<ActionResult> Detail(BetListExcelMetaModel metaModel)
        {
            CreateDefaultMetaModel(metaModel);
            return await ProcessDefaultRequest(metaModel, "~/Views/Desktop/BetList/SabaClubJackpotWonDetail/Main.cshtml", "Lrf_BetList_Jackpot_Detail").ConfigureAwait(false);
        }

        protected override async Task<ActionResult> ExportExcel(BetListExcelMetaModel metaModel)
        {
            metaModel.ShowingOption = new BetListShowingOption
            {
                CustomerCommVisible = SessionServiceInstance.LicenseeSession.IsAllowedCustomerComm
            };
            metaModel.HiddenColumns = HiddenColumns;

            metaModel.Title = $"{ViewResources.ProductSBC} - {ViewResources.JackpotWonDetails}";

            return await ProcessExportExcel(metaModel, "SabaClub_JackpotWonDetails").ConfigureAwait(false);
        }
    }
}