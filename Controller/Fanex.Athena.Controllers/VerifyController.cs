namespace Fanex.Athena.Controllers
{
    using System;
    using System.Web;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Service.Core.Users.Interfaces;

    public class VerifyController : CultureBaseController
    {
        private readonly IAuthService _authService;

        public VerifyController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult ApplyApiToken(string vendorID, string actionLink)
        {
            return Json(new { }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ApplyToken(string vendorID, string actionLink)
        {
            var appUrl = Url.Content("~/");

            return Redirect(appUrl + actionLink);
        }
    }
}
