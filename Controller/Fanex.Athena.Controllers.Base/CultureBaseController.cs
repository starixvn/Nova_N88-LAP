namespace Fanex.Athena.Controllers
{
    using System.Collections.Generic;
    using System.Web.Mvc;
    using Extension.Utility;
    using Fanex.Athena.Controllers.Base;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Context;
    using Fanex.N88.Core.Web.Context;
    using Service.Core.Users.Interfaces;

    [CustomAuthorize]
    [XFrameOption]
    public class CultureBaseController : Controller
    {
        protected const string DefaultLanguage = "en-US";
        public ILanguageService LangService { get; set; }
        public ISessionService SessionServiceInstance { get; set; }
        public IAppSettings AppSettingInstance { get; set; }
        public ILicenseeSettingService LicenseeSettingServiceInstance { get; set; }

        protected N88Settings n88Settings;

        private readonly ICurrentContext currentContext = new CurrentContext();

        protected readonly IDictionary<int, string> siteNameList = new Dictionary<int, string>
        {
            { 402, "N88" },
            { 436, "Goal123" },
            { 437, "Bwing" }
        };

        public bool IsFakeLicensee(string licenseeName)
        {
            return LicenseeSettingServiceInstance.IsFakeLicensee(licenseeName);
        }

        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);
            var currentLanguage = LangService.GetCurrentLanguage();
            LangService.SetPageCulture(currentLanguage);
            n88Settings = N88Settings.Settings;
        }

        protected JsonResult JsonNet(object data)
        {
            return new JsonNetResult
            {
                Data = data,
            };
        }

        protected static JsonNetResult JsonString(string jsonData)
        {
            return new JsonNetResult(jsonData);
        }

        public ICurrentContext CurrentContext
        {
            get
            {
                return currentContext;
            }
        }
    }
}