namespace Fanex.Athena.Service.Core.Proxy
{
    using System;
    using System.Collections.Generic;
    using System.Configuration;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web;

    public class ProxyOptions : IProxyOptions
    {
        private const string SharedAuthHeaderKey = "X-Shared-Auth-Key";
        private const string InternalAuthKey = "X-Internal-Auth-Key";

        private static readonly IDictionary<string, string> ProxyApiHostMapper = new Dictionary<string, string>(StringComparer.OrdinalIgnoreCase)
        {
            { "ReportApi", "Proxy_ReportApiHost" }  ,
            { "BetListApi", "Proxy_BetListApiHost" }
        };

        public ProxyOptions(string internalAuthKey, int requestTimeout)
        {
            PrepareRequest = (originalRequest, message) =>
            {
                message.Headers.Add(SharedAuthHeaderKey, HttpContext.Current.Session.SessionID);
                message.Headers.Add(InternalAuthKey, internalAuthKey);
                return Task.CompletedTask;
            };

            Timeout = new TimeSpan(0, 0, requestTimeout);
        }

        public HttpMessageHandler MessageHandler { get; set; }

        public Func<HttpRequest, HttpRequestMessage, Task> PrepareRequest { get; set; }

        public Uri BuildRequestUri(string apiKey, string apiUrl, string query)
        {
            var realApiHost = BuildApiHost(apiKey);
            var realApiPath = BuildApiPath(apiUrl);

            var realUri = new UriBuilder(realApiHost)
            {
                Path = realApiPath,
                Query = query
            };

            return realUri.Uri;
        }

        private string BuildApiHost(string apiKey)
        {
            var settingKey = ProxyApiHostMapper.ContainsKey(apiKey) ? ProxyApiHostMapper[apiKey] : throw new Exception($"{apiKey} is invalid");
            return ConfigurationManager.AppSettings[settingKey] ?? throw new Exception($"{settingKey} doesn't exist");
        }

        private string BuildApiPath(string apiUrl)
        {
            var realPath = apiUrl.Replace('_', '/');
            return realPath;
        }

        public TimeSpan Timeout { get; set; }
    }
}