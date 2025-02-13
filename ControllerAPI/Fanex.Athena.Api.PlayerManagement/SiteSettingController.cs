namespace Fanex.Athena.Api.PlayerManagement
{
    using System.Web.Http;
    using Fanex.Athena.Api.Base;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.PlayerManagement.ViewModel;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public class SiteSettingController : BaseApiController
    {
        private readonly ILicenseeSettingService _licenseeSettingService;

        private readonly IAuthorizationService _authService;

        public SiteSettingController(ILanguageService languageService,
            ILicenseeSettingService licenseeSettingService,
            IAuthorizationService authService) : base(languageService)
        {
            _licenseeSettingService = licenseeSettingService;
            _authService = authService;
        }

        [HttpPost]
        public SiteSettingViewModel GetSetting()
        {
            var licenseeSession = SessionService.LicenseeSession;
            var licenseeInfo = _licenseeSettingService.GetLicenseeInfo(licenseeSession.LicenseeName);

            return new SiteSettingViewModel
            {
                IsAllowedCustomerComm = licenseeInfo != null && licenseeInfo.IsAllowedCustomerComm
            };
        }
    }
}