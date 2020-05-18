namespace Fanex.Athena.Api.Report
{
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    [ApiFunctionAuthorization(PermissionKeys.ReportWinLoss)]
    public class WinLossReportController : BaseApiController
    {
        private const string InternalReportUrl = "Api/WinLossReport/GetData";
        private const string InternalExportReportUrl = "Api/WinLossReport/ExportData";

        private readonly IReportApiClient _reportApiClient;

        public WinLossReportController(IReportApiClient reportAPIClient,
            ILanguageService langService)
            : base(langService)
        {
            _reportApiClient = reportAPIClient;
        }

        [HttpPost]
        [ApiAutoBindMetaModel(BindLicenseeId = true, BindCurrencyIdList = true)]
        [ValidationApiRequest(IsValidCurrencyList = true)]
        public async Task<dynamic> GetData(WinLossMetaModel metaModel)
        {
            var data = await _reportApiClient.PostAsync<dynamic>(InternalReportUrl, metaModel, Language).ConfigureAwait(false);
            return data;
        }

        [HttpPost]
        [ApiAutoBindMetaModel(BindLicenseeId = true, BindCurrencyIdList = true)]
        [ValidationApiRequest(IsValidCurrencyList = true)]
        public async Task<HttpResponseMessage> ExportData(WinLossMetaModel metaModel)
        {
            var response = await _reportApiClient.PostAsync(InternalExportReportUrl, metaModel, Language).ConfigureAwait(false);
            return ToStreamResponse(response.Item1, response.Item2);
        }
    }
}