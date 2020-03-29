namespace Fanex.Athena.Controllers
{
    using System.Web.Mvc;

    public class VerifyController : CultureBaseController
    {
        public VerifyController()
        {
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
