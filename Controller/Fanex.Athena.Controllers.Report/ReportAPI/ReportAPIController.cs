// -----------------------------------------------------------------------
// <copyright file="ReportAPIController.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    public partial class ReportAPIController : NonCultureBaseController
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

        private bool IsFakeLicensee(string siteName)
        {
            return _licenseeSettingService.IsFakeLicensee(siteName);
        }
    }
}