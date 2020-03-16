namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System.Web.Mvc;
    using Fanex.Athena.Controllers;
    using Fanex.N88.Core.Configuration;

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

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(string.Empty, N88Settings.Settings.Environment, isLicenseeGroup: false, siteId: N88Settings.Settings.SiteId);

            return View(new GetAllWithNumOfUserGroupCriteria());
        }

        [HttpPost]
        public ActionResult Manage(GetAllWithNumOfUserGroupCriteria criteria)
        {
            criteria.Environment = N88Settings.Settings.Environment;

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