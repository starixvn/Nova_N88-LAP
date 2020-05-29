namespace Fanex.Athena.Controllers.Report
{
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.N88.Core.Web.Attribute;
    using static Fanex.N88.Core.Business.Constant;

    [N88Auth(FunctionKey = PermissionKeys.ReportLicenseeWinLoss, Policy = Policy.Read)]
    public class PromotionPrizeReportController : CultureBaseController
    {
        private readonly IReportApiClient _reportAPIClient;

        public PromotionPrizeReportController(IReportApiClient reportAPIClient)
        {
            _reportAPIClient = reportAPIClient;
        }

        [ValidationWebRequest(IsValidCurrency = true, IsIncludeKeanOcean = true)]
        [AutoBindMetaModel(BindAgent = true)]
        public async Task<ActionResult> ExportExcel(PromotionPrizeMetaModel metaModel)
        {
            var result = await _reportAPIClient.PostAsync(
                "api/PromotionPrize/Export",
                metaModel,
                SessionServiceInstance.UserSession.Language,
                MediaType.MsgPack).ConfigureAwait(false);
            return File(result.Item1, result.Item2);
        }
    }
}