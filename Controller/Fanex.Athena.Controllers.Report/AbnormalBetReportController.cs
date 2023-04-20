using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Mvc;
using Fanex.Athena.DataAccess.Core.Common.Interfaces;
using Fanex.Athena.DataAccess.Report.Interfaces;
using Fanex.Athena.Extension.Utility.Internal;
using Fanex.Athena.Model.Auth.DataDomain;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Core.DTO.Common;
using Fanex.Athena.Model.Report.DTO;
using Fanex.Athena.Model.Report.DTO.AbnormalBet;
using Fanex.Athena.Model.Report.ViewModel;
using Fanex.Athena.Resources;
using Fanex.Athena.Service.StatelessCore.Interfaces;
using Fanex.Athena.Service.StatelessCore.Utility;
using Fanex.Athena.VendorAdapter.Interfaces;
using Fanex.Athena.Web.ActionFilter;

namespace Fanex.Athena.Controllers.Report
{
    [FunctionAuthorization(PermissionKeys.ReportAbnormalBet)]
    public class AbnormalBetReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly ISportTypeDataAccess _sportService;
        private readonly IAbnormalBetDataAcces _abnormalBetDataAcces;
        private readonly IBetTypeService _betTypeService;

        public AbnormalBetReportController(
            IReportSettingService reportSettingService,
            ISportTypeDataAccess sportService,
            IAbnormalBetDataAcces abnormalBetDataAcces,
            IBetTypeService betTypeService
            )
        {
            _reportSettingService = reportSettingService;
            _sportService = sportService;
            _abnormalBetDataAcces = abnormalBetDataAcces;
            _betTypeService = betTypeService;
        }

        public async Task<ActionResult> Index()
        {
            var licenseeSession = SessionServiceInstance.LicenseeSession;
            var userSession = SessionServiceInstance.UserSession;
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportAbnormalBet,
                licenseeSession.LicenseeName);

            var sports = SportHelper.GetSabaSport((await _sportService.GetSportsAndProducts(licenseeSession.LicenseeId, userSession.Language, Product.SB).ConfigureAwait(true))
                    .Where(x => x.ParentId >= 0).ToList());

            var bettypes = await _betTypeService.GetBettypesByProduct(licenseeSession.LicenseeId, Product.SB, userSession.Language).ConfigureAwait(true);

            var model = new AbnormalBetViewModel
            {
                CurrencyList = userSession.CurrencyList,
                IsAllowedCustomerCommission = licenseeSession.IsAllowedCustomerComm,
                ReportSetting = reportSetting,
                Sports = sports.ToDictionary(x => x.ID, y => y.Name),
                Bettypes = bettypes.ToDictionary(x => x.ID, y => y.Name),
                LiveStatusList = GetLiveStatusList(),
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList
            };

            ViewBag.DefaultSelectedBaseCurrency = userSession.DefaultBaseCurrency;
            ViewBag.LicenseeName = licenseeSession.LicenseeName;
            ViewBag.IsShowIpvn = userSession.IsShowIpvn;

            return View("~/Views/Desktop/Report/AbnormalBet/Main.cshtml", model);
        }

        private static IDictionary<int, string> GetLiveStatusList()
        {
            return new Dictionary<int, string>
            {
                { LiveStatusTypes.NonLive, ViewResources.NoneLive },
                { LiveStatusTypes.Live, ViewResources.Live },
                { LiveStatusTypes.Mix, ViewResources.MixLiveAndNoneLive }
            };
        }
    }
}