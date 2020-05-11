using Fanex.Athena.Api.Base;
using Fanex.Athena.Service.Core.Common.Interfaces;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;

namespace Fanex.Athena.Api.Report
{
    public class WinLossReportController : BaseApiController
    {
        private readonly IReportAPIClient _reportAPIClient;

        public WinLossReportController(IReportAPIClient reportAPIClient,
            ILanguageService langService)
            : base(langService)
        {
            _reportAPIClient = reportAPIClient;
        }
    }
}