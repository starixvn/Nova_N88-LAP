namespace Fanex.Athena.Controllers
{
    using ONEbook.UM.AspNetMVC.Filters;
    using System.Web.Mvc;

    [CheckUMFilter]
    public class HomeController : CultureBaseController
    {
        public ActionResult Index()
        {
            AssignViewBagData();
            return ReAuthorize("~/Views/Desktop/Home/Index.cshtml");
        }

        public ActionResult IndexIpad()
        {
            AssignViewBagData();
            return ReAuthorize("~/Views/Desktop/Home/IndexIpad.cshtml");
        }

        private ActionResult ReAuthorize(string defaultView)
        {
            if (!HttpContext.Response.IsRequestBeingRedirected)
            {
                var user = SessionServiceInstance.UserSession;
                if (user == null || user.UserId <= 0
                    || string.IsNullOrEmpty(user.UserName))
                {
                    Session.Clear();
                    return RedirectToAction("LocationRestriction", "Utility");
                }
            }

            return View(defaultView);
        }

        private void AssignViewBagData()
        {
            var returnPath = TempData["ReturnPath"];
            var userSession = SessionServiceInstance.UserSession;
            ViewBag.DefaultReportUrl = returnPath == null ? userSession.DefaultReportUrl : returnPath.ToString();
            ViewBag.OnUserId = userSession.OnUserId;
            ViewBag.IsInternal = "0";
            ViewBag.HasRecheckIn = AppSettingInstance.LocalTest ? "0" : "1";
            ViewBag.LicenseeName = siteNameList[AppSettingInstance.LicenseeId];
            ViewBag.IsLicenseeUser = userSession.IsLicenseeUser ? "1" : "0";
        }
    }
}