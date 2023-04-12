namespace Fanex.Athena.Controllers
{
    using Extension.Utility;
    using Fanex.Athena.Controllers.Base;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Context;
    using Fanex.N88.Core.Web.Context;
    using Fanex.NVC.Authentication.Infrastructure;
    using Service.Core.Users.Interfaces;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [CustomAuthorize]
    public class CultureBaseController : Controller
    {
        protected const string DefaultLanguage = "en-US";
        protected const int DefaultTimeZone = -4;
        public ILanguageService LangService { get; set; }
        public ISessionService SessionServiceInstance { get; set; }
        public IAppSettings AppSettingInstance { get; set; }
        public ILicenseeSettingService LicenseeSettingServiceInstance { get; set; }
        public N88Settings N88Settings { get; set; }

        protected string DefaultBaseCurrency => SessionServiceInstance.UserSession.DefaultBaseCurrency;

        protected string LicenseeName => SessionServiceInstance.LicenseeSession.LicenseeName;

        protected int LicenseeId => SessionServiceInstance.LicenseeSession.LicenseeId;

        protected IEnumerable<Brand> BrandList => SessionServiceInstance.UserSession.BrandList;

        protected IDictionary<int, int[]> AgentList => AuthParameterHelper.GetAgentList(BrandList, BrandList.Select(_ => _.Id).ToArray());

        protected readonly IDictionary<int, string> siteNameList = new Dictionary<int, string>
        {
            { 402, "N88" },
            { 436, "Goal123" },
            { 437, "Bwing" }
        };

        public ICurrentContext CurrentContext { get; } = new CurrentContext();

        protected override void Initialize(System.Web.Routing.RequestContext requestContext)
        {
            base.Initialize(requestContext);
            var currentLanguage = LangService.GetCurrentLanguage();
            LangService.SetPageCulture(currentLanguage);
            N88Settings = N88Settings.Settings;
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

        protected DateTime GetUserLimitDataRange(DateTime defaultDay, int? timeZone)
        {
            var userDataRangeLimitation = SessionServiceInstance.UserSession.DataRangeLimitation;
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