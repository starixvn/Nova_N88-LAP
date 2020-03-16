namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using Fanex.Athena.Controllers;
    using Fanex.NAP.Core.Configuration;
    using System.Web.Mvc;

    public class GroupController : CultureBaseController
    {
        private readonly GroupService _groupService;

        public GroupController()
        {
            _groupService = new GroupService();
        }

        [HttpGet]
        public ActionResult Manage()
        {
            //ViewFlags.HasEditRight = HasRight(FunctionKeys.ManageGroup, Constant.Policy.Host);
            //ViewFlags.HasAssignFunctionRight = HasRight(FunctionKeys.AssignFunctionToGroup, Constant.Policy.Read);
            //ViewFlags.HasManageUserRight = HasRight(FunctionKeys.ManageUser, Constant.Policy.Read);
            ViewBag.ViewFlags.HasEditRight = true;
            ViewBag.ViewFlags.HasAssignFunctionRight = true;
            ViewBag.ViewFlags.HasManageUserRight = true;

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(string.Empty, NapSettings.Settings.Environment, isLicenseeGroup: false, siteId: NapSettings.Settings.SiteId);

            return View(new GetAllWithNumOfUserGroupCriteria());
        }

        [HttpPost]
        public ActionResult Manage(GetAllWithNumOfUserGroupCriteria criteria)
        {
            criteria.Environment = NapSettings.Settings.Environment;

            //ViewFlags.HasEditRight = HasRight(FunctionKeys.ManageGroup, Constant.Policy.Host);
            //ViewFlags.HasAssignFunctionRight = HasRight(FunctionKeys.AssignFunctionToGroup, Constant.Policy.Read);
            //ViewFlags.HasManageUserRight = HasRight(FunctionKeys.ManageUser, Constant.Policy.Read);

            ViewBag.ViewFlags.HasEditRight = true;
            ViewBag.ViewFlags.HasAssignFunctionRight = true;
            ViewBag.ViewFlags.HasManageUserRight = true;

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(criteria.GroupName, isLicenseeGroup: false);

            return View("~/View/Group/Manage", criteria);
        }
    }
}