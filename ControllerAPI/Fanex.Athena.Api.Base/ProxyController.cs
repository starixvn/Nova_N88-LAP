namespace Fanex.Athena.Api.Base
{
    using Fanex.Athena.Api.Base.Attributes;
    using Fanex.Athena.Service.Core.Proxy;
    using ONEbook.UM.Filters;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web.Http;

    [CheckUMFilter]
    public class ProxyController : ApiController
    {
        private readonly IProxyService _proxyService;

        public ProxyController(IProxyService proxyService)
        {
            _proxyService = proxyService;
        }

        [HttpPost]
        [ApiValidateAntiForgery]
        public async Task<HttpResponseMessage> Post([FromUri]string apiKey, [FromUri]string apiUrl)
        {
            var result = await _proxyService.HandleRequest(apiKey, apiUrl);
            return result;
        }
    }
}