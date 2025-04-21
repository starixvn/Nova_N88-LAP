using Fanex.Athena.Extension.Helper;
using Fanex.Athena.Model.Auth.DataDomain;
using Fanex.Athena.Model.Core.DataDomain;
using Fanex.Athena.Model.Report.ViewModel;
using Fanex.Athena.Web.ActionFilter;
using System.Linq;
using System.Web.Mvc;

namespace Fanex.Athena.Controllers.Report
{
    [FunctionAuthorization(PermissionKeys.PlayerSabaCoins)]
    public class PlayerSabaCoinsReportController : ReportBaseController
    {
        public ActionResult Index()
        {
            var licenseeSession = SessionServiceInstance.LicenseeSession;
            var userSession = SessionServiceInstance.UserSession;

            int.TryParse(userSession.SettingList?.FirstOrDefault(_ => _.SettingKey == SettingKey.LimitDays)?.SettingValue, out int userDataRangeLimitation);
            var minDate = userDataRangeLimitation > 0 ? DateTimeHelper.Today.AddDays(-userDataRangeLimitation) : DateTimeHelper.Today.AddMonths(-3);

            var model = new PlayerSabaCoinsViewModel
            {
                MinDate = minDate,
                MaxDate = DateTimeHelper.Today,
                CurrencyList = userSession.CurrencyList,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList
            };

            ViewBag.DefaultSelectedBaseCurrency = userSession.DefaultBaseCurrency;
            ViewBag.LicenseeName = licenseeSession.LicenseeName;
            ViewBag.IsShowIpvn = userSession.IsShowIpvn;

            return View("~/Views/Desktop/Report/PlayerSabaCoins/Main.cshtml", model);
        }
    }
}