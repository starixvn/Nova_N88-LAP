namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Common.Extensions;
    using Fanex.Athena.Controllers;
    using Fanex.N88.Admin.Core.Configuration;
    using Fanex.NAP.Core.Configuration;
    using N88.Core.Business;
    using N88.Core.Command;
    using N88.Core.Criteria.Group;
    using N88.Core.Domain;
    using N88.Core.Model.ValueObject;
    using N88.Core.Service.Impl;
    using N88.Core.Service.Interface;
    using N88.Core.Web;
    using N88.Core.Web.Attribute;

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

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(string.Empty, NapSettings.Settings.Environment, isLicenseeGroup: false,siteId: NapSettings.Settings.SiteId);

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