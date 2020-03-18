namespace Fanex.Athena.Controllers
{
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.Enum;
    using ONEbook.UM.Filters;
    using Web.ActionFilter;

    [CheckUMFilter]
    public class HomeController : CultureBaseController
    {
        [AuthorizeRestriction(AppMode.Self)]
        public ActionResult Index()
        {
            AssignViewBagData();
            return ReAuthorize("~/Views/Desktop/Home/Index.cshtml");
        }

        [AuthorizeRestriction(AppMode.Self)]
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
            ViewBag.IsInternal = userSession.IsInternal ? "1" : "0";
            ViewBag.HasRecheckIn = AppSettingInstance.LocalTest ? "0" : "1";
        }
    }
}