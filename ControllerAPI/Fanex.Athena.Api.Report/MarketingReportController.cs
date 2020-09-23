namespace Fanex.Athena.Api.Report
{
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel.Marketing;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    [ApiFunctionAuthorization(PermissionKeys.ReportMarketing)]
    public class MarketingReportController : BaseApiController
    {
        private const string PerformanceHighlightUrl = "Api/PerformanceHighlight/GetData";
        private const string UserActivitiesUrl = "Api/UserActivities/GetData";
        private const string AvgRevenueUrl = "Api/Revenue/GetAvgData";
        private const string NewlyRegisterUsersSummaryUrl = "Api/NewlyRegisterUsers/GetSummaryData";
        private const string NewlyRegisterUsersDetailsUrl = "Api/NewlyRegisterUsers/GetDetailsData";
        private const string NewlyRegisterUsersExportUrl = "Api/NewlyRegisterUsers/ExportData";

        private readonly IReportApiClient _reportApiClient;

        public MarketingReportController(IReportApiClient reportAPIClient,
            ILanguageService langService)
            : base(langService)
        {
            _reportApiClient = reportAPIClient;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> PerformanceHighlight(PerformanceHighlightMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(PerformanceHighlightUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> UserActivities(UserActivitiesMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(UserActivitiesUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> AvgRevenue(AvgRevenueMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(AvgRevenueUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> NewlyRegisterUsersSummary(NewlyRegisterUsersSummaryMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(NewlyRegisterUsersSummaryUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<dynamic> NewlyRegisterUsersDetails(NewlyRegisterUsersDetailsMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(NewlyRegisterUsersDetailsUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest(IsValidBrandId = true)]
        public async Task<HttpResponseMessage> NewlyRegisterUsersExport(NewlyRegisterUsersExportMetaModel metaModel)
        {
            var response = await _reportApiClient.PostAsync(NewlyRegisterUsersExportUrl, metaModel, Language).ConfigureAwait(false);
            return ToStreamResponse(response.Item1, response.Item2);
        }
    }
}