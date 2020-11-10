namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public class ReportAPIController : NonCultureBaseController
    {
        private readonly IBetTypeService _betTypeService;
        private readonly ILicenseeSettingService _licenseeSettingService;

        public ReportAPIController(
            IBetTypeService betTypeService,
            ILicenseeSettingService licenseeSettingService)
        {
            _betTypeService = betTypeService;
            _licenseeSettingService = licenseeSettingService;
        }
    }
}