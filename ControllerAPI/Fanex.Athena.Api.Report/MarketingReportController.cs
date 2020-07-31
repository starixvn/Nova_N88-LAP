namespace Fanex.Athena.Api.Report
{
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel.Marketing;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using System.Threading.Tasks;
    using System.Web.Http;

    [ApiFunctionAuthorization(PermissionKeys.ReportMarketing)]
    public class MarketingReportController : BaseApiController
    {
        private const string PerformanceHighlightUrl = "Api/PerformanceHighlight/GetData";

        private readonly IReportApiClient _reportApiClient;

        public MarketingReportController(IReportApiClient reportAPIClient,
            ILanguageService langService)
            : base(langService)
        {
            _reportApiClient = reportAPIClient;
        }

        [HttpPost]
        [ApiAutoBindMetaModel(BindLicenseeId = true)]
        [ValidationApiRequest]
        public async Task<dynamic> PerformanceHighlight(PerformanceHighlightMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(PerformanceHighlightUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }
    }
}