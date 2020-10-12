namespace Fanex.Athena.Service.Core.Proxy
{
    using System;
    using System.Net.Http;
    using System.Threading.Tasks;
    using System.Web;

    public interface IProxyOptions
    {
        HttpMessageHandler MessageHandler { get; set; }

        Func<HttpRequest, HttpRequestMessage, Task> PrepareRequest { get; set; }

        Uri BuildRequestUri(string apiKey, string apiUrl, string query);

        TimeSpan Timeout { get; set; }
    }
}