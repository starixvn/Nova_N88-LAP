using System.Web;
using NSubstitute;

namespace Fanex.Athena.UnitTest.Common.Helpers
{
    public static class ExternalApiHelper
    {
        public const int DefaultLicenseeId = 1;
        public const int DefaultUserId = 2;
        public const string DefaultUserName = "test";
        public const string DefaultSiteName = "sitenametest";
        public const string DefaultLanguage = "en";
        public const string DefaultCurrencyIdList = "1";

        public const string DefaultClientIp = "127.0.0.1";

        public static HttpContextBase CreateHttpContext()
        {
            var httpRequest = Substitute.For<HttpRequestBase>();
            httpRequest.UserHostAddress.Returns(DefaultClientIp);

            var httpContext = Substitute.For<HttpContextBase>();
            httpContext.Request.Returns(httpRequest);

            return httpContext;
        }

        public static string CreateDefaultAgentListXml()
        {
            return "<ROOT><Agent AgentId=\"1\" Currency=\"1\"/><Agent AgentId=\"2\" Currency=\"1\"/></ROOT>";
        }
    }
}