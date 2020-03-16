namespace Fanex.Athena.Controllers
{
    using System.Web.Mvc;

    public class MenuController : CultureBaseController
    {
        [HttpGet]
        public ActionResult Index()
        {
            return View("~/Views/Desktop/Menu/Index.cshtml", SessionServiceInstance.UserSession.MenuItemList);
        }
    }
}