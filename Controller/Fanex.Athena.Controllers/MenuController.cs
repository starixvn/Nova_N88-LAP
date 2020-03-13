// -----------------------------------------------------------------------
// <copyright file="MenuController.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Controllers
{
    using System.Web.Mvc;
    using Fanex.Athena.Model.Core.ViewModel;
    using Fanex.NAP.Core.Web.Session;

    //[AuthorizeRestriction(AppMode.Self)]
    public class MenuController : CultureBaseController
    {
        //private readonly IFunctionService _functionService;
        private readonly ICurrentSession currentSession;

        public MenuController(
            //IFunctionService functionService
            ICurrentSession currentSession
            )
        {
            //_functionService = functionService;
            this.currentSession = currentSession;
        }

        [HttpGet]
        public ActionResult Index()
        {
            return View("~/Views/Desktop/Menu/Index.cshtml", SessionServiceInstance.UserSessionInfo.MenuItemList);
        }

        public ActionResult Test()
        {
            return View();
        }
    }
}