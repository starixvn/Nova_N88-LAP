namespace Fanex.Athena.Controllers
{
    using System.Web.Mvc;
    using DataAccess.Core.Users.Interfaces;
    using Fanex.Athena.Model.Auth.Enum;
    using Web.ActionFilter;

    [AuthorizeRestriction(AppMode.Self)]
    public class LicenseeListController : CultureBaseController
    {
        private readonly ILicenseeDataAccess _licenseeDataAccess;

        public LicenseeListController(
            ILicenseeDataAccess licenseeDataAccess)
        {
            _licenseeDataAccess = licenseeDataAccess;
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult Index(int? licenseeId)
        {
            var userSession = SessionServiceInstance.UserSessionInfo;
            if (userSession == null || userSession.UserId <= 0)
            {
                return RedirectToAction("SignIn", "Authorization");
            }

            if (licenseeId.HasValue && licenseeId.Value > 0)
            {
                return RedirectToHome(licenseeId.Value);
            }
            else
            {
                var licenseeList = _licenseeDataAccess.GetByUser(userSession.UserId);

                if (licenseeList.Count <= 0)
                {
                    return RedirectToAction("SignIn", "Authorization");
                }

                if (licenseeList.Count == 1)
                {
                    return RedirectToHome(licenseeList[0].Id);
                }

                ViewBag.CurrentUsername = userSession.Username;
                ViewBag.LicenseeList = licenseeList;
            }

            return View("~/Views/Desktop/LicenseeList/Index.cshtml");
        }

        private ActionResult RedirectToHome(int licenseeId)
        {
            SessionServiceInstance.UpdateLiceseeSession(licenseeId);

            return RedirectToAction(nameof(Index), "Home");
        }
    }
}