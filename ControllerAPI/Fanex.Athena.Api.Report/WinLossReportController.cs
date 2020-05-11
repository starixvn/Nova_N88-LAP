namespace Fanex.Athena.Api.Report
{
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using System.Threading.Tasks;
    using System.Web.Http;

    [ApiFunctionAuthorization(PermissionKeys.ReportWinLoss)]
    public class WinLossReportController : BaseApiController
    {
        private const string InternalReportUrl = "Api/WinLossReport/GetData";
        private const int Timeout = 30;

        private readonly IReportAPIClient _reportAPIClient;

        public WinLossReportController(IReportAPIClient reportAPIClient,
            ILanguageService langService)
            : base(langService)
        {
            _reportAPIClient = reportAPIClient;
        }

        [HttpPost]
        [ApiAutoBindMetaModel(BindLicenseeId = true)]
        [ValidationApiRequest]
        public async Task<dynamic> GetData(WinLossMetaModel metaModel)
        {
            var json = await _reportAPIClient.PostStringAsync(InternalReportUrl, metaModel, Language, Timeout).ConfigureAwait(false);
            var data = FromJson<dynamic>(json);
            return data;
        }

        [HttpPost]
        [ValidationApiRequest]
        [ApiAutoBindMetaModel]
        public async Task<dynamic> ExportData(WinLossMetaModel metaModel)
        {
            var json = await _reportAPIClient.PostStringAsync("Api/WinLossReport/ExportData", metaModel, Language, 10).ConfigureAwait(false);
            var data = FromJson<dynamic>(json);
            return data;
        }
    }
}