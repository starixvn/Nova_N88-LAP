namespace Fanex.Athena.Api.Base
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Net.Http.Headers;
    using System.Text;
    using System.Web.Http;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.NVC.Authentication.Infrastructure;
    using Newtonsoft.Json;
    using Newtonsoft.Json.Serialization;
    using NPOI.SS.UserModel;
    using ONEbook.UM.Filters;

    [CheckUMFilter]
    [CLSCompliant(false)]
    public class BaseApiController : ApiController
    {
        private readonly ILanguageService _langService;

        protected internal BaseApiController(ILanguageService languageService)
        {
            _langService = languageService ?? throw new ArgumentNullException(nameof(languageService));
        }

        protected virtual JsonSerializerSettings PascalCassJsonSetting { get; } = new JsonSerializerSettings
        {
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            ContractResolver = new DefaultContractResolver()
        };

        protected string Language => SessionService.UserSession.Language;

        protected IEnumerable<Brand> BrandList => SessionService.UserSession.BrandList;

        protected IDictionary<int, int[]> AgentList => AuthParameterHelper.GetAgentList(BrandList, BrandList.Select(_ => _.Id).ToArray());

        protected IDictionary<int, string> CurrencyList => AuthParameterHelper.GetCurrencyList(BrandList);

        public IProductService ProductService { get; set; }

        public ISessionService SessionService { get; set; }

        [CLSCompliant(false)]
        protected internal virtual HttpResponseMessage ExcelStream(IWorkbook workbook, string fileName)
        {
            var result = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new PushStreamContent(
              (stream, context, transportContext) =>
              {
                  try
                  {
                      workbook.Write(stream);
                  }
                  finally
                  {
                      workbook.Close();
                      workbook = null;
                      stream.Close();
                      context.Dispose();
                  }
              },
              new MediaTypeHeaderValue("application/octet-stream"))
            };
            result.Headers.TransferEncodingChunked = true;
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = fileName
            };
            return result;
        }

        protected internal virtual HttpResponseMessage ToStreamResponse(Stream stream, string mediaType, string fileName = default)
        {
            var result = new HttpResponseMessage(HttpStatusCode.OK)
            {
                Content = new StreamContent(stream)
            };

            result.Headers.TransferEncodingChunked = true;

            result.Content.Headers.ContentType = new MediaTypeHeaderValue(mediaType);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = fileName
            };

            return result;
        }

        protected override void Initialize(System.Web.Http.Controllers.HttpControllerContext controllerContext)
        {
            base.Initialize(controllerContext);
            var currentLanguage = _langService.GetCurrentLanguage();
            _langService.SetPageCulture(currentLanguage);
        }

        protected internal virtual JsonSerializerSettings DefaultJsonSettings { get; } = new JsonSerializerSettings
        {
            ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };

        protected internal JsonNetResult<T> JsonNetResult<T>(T content)
        {
            return JsonNetResult(content, PascalCassJsonSetting);
        }

        protected internal JsonNetResult<T> JsonNetResult<T>(T content, JsonSerializerSettings serializerSettings)
        {
            return JsonNetResult(content, serializerSettings, new UTF8Encoding(encoderShouldEmitUTF8Identifier: false, throwOnInvalidBytes: true));
        }

        protected internal virtual JsonNetResult<T> JsonNetResult<T>(T content, JsonSerializerSettings serializerSettings, Encoding encoding)
        {
            return new JsonNetResult<T>(content, serializerSettings, encoding, this.Request);
        }

        protected DateTime? GetUserLimitDataRange(DateTime? defaultDay, int? timeZone)
        {
            int.TryParse(SessionService.UserSession?.SettingList.FirstOrDefault(_ => _.SettingKey == SettingKey.LimitDays)?.SettingValue, out int userDataRangeLimitation);

            if (userDataRangeLimitation > 0)
            {
                var toDay = timeZone.HasValue ? DateTime.UtcNow.AddHours(timeZone.Value) : DateTime.Now;
                var lastXdays = toDay.AddDays(-userDataRangeLimitation);

                return new DateTime(lastXdays.Year, lastXdays.Month, lastXdays.Day);
            }

            return defaultDay;
        }
    }
}