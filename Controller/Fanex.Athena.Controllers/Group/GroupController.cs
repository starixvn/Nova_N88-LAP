namespace Fanex.N88.Admin.Areas.UserControl.Controllers
{
    using System;
    using System.Web.Mvc;
    using Fanex.Athena.Controllers;
    using Fanex.Athena.Controllers.Account;
    using Fanex.Athena.Resources;
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
            ViewBag.HasEditRight = true;
            ViewBag.HasAssignFunctionRight = true;
            ViewBag.HasManageUserRight = true;

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(string.Empty, N88Settings.Settings.Environment, isLicenseeGroup: true, siteId: N88Settings.Settings.SiteId);

            return View(new GetAllWithNumOfUserGroupCriteria());
        }

        [HttpPost]
        public ActionResult Manage(GetAllWithNumOfUserGroupCriteria criteria)
        {
            criteria.Environment = N88Settings.Settings.Environment;

            //ViewFlags.HasEditRight = HasRight(FunctionKeys.ManageGroup, Constant.Policy.Host);
            //ViewFlags.HasAssignFunctionRight = HasRight(FunctionKeys.AssignFunctionToGroup, Constant.Policy.Read);
            //ViewFlags.HasManageUserRight = HasRight(FunctionKeys.ManageUser, Constant.Policy.Read);

            ViewBag.HasEditRight = true;
            ViewBag.HasAssignFunctionRight = true;
            ViewBag.HasManageUserRight = true;

            ViewBag.GroupList = _groupService.GetAllWithNumOfUser(criteria.GroupName, isLicenseeGroup: true, siteId: N88Settings.Settings.SiteId, env: N88Settings.Settings.Environment);

            return View(criteria);
        }

        [HttpGet]
        public ActionResult AddNew()
        {
            return View(new InsertGroupCriteria());
        }

        [HttpPost]
        public ActionResult AddNew(InsertGroupCriteria criteria)
        {
            if (ModelState.IsValid)
            {
                criteria.IsLicenseeGroup = true;
                criteria.SiteId = N88Settings.Settings.SiteId;
                criteria.CreatedBy = SessionServiceInstance.UserSession.UserId;
                criteria.CreatedDate = DateTime.Now;
                criteria.LogDate = DateTime.Now;
                CommandResult result = _groupService.Insert(criteria);

                if (!result.IsSuccessful)
                {
                    ModelState.AddModelError("SiteName", string.Format(ViewResources.DuplicateMsg, criteria.GroupName));
                    return View(criteria);
                }

                ViewBag.Success = true;
            }

            return View(criteria);
        }

        //        #region Edit Group

        //[HttpGet]
        //public ActionResult Edit(int id)
        //{
        //    GroupData group = _groupService.GetById(id);

        //    if (object.ReferenceEquals(group, null))
        //    {
        //        return RedirectToAction("Manage");
        //    }

        //    var criteria = new UpdateGroupCriteria();

        //    criteria.GroupId = group.Id;
        //    criteria.Description = group.Description;
        //    criteria.GroupName = group.Name;
        //    criteria.IsActive = group.IsActive;

        //    return View(criteria);
        //}

        //        /// <summary>
        //        /// Update group.
        //        /// </summary>
        //        /// <param name="criteria">The criteria.</param>
        //        /// <returns>Action result.</returns>
        //        [HttpPost]
        //        [N88Auth(FunctionKey = FunctionKeys.ManageGroup, Policy = Constant.Policy.Host)]
        //        public ActionResult Edit(UpdateGroupCriteria criteria)
        //        {
        //            if (ModelState.IsValid)
        //            {
        //                // check name exist
        //                IGroup group = _groupService.GetByName(criteria.GroupName);

        //                if (!ReferenceEquals(group, null) && group.Id != criteria.GroupId)
        //                {
        //                    ModelState.AddModelError("SiteName", string.Format(ViewResources.DuplicateMsg, criteria.GroupName));

        //                    return View(criteria);
        //                }

        //                // update function
        //                criteria.ModifiedBy = CurrentSession.UserId;
        //                criteria.ModifiedDate = DateTime.Now;

        //                ICommandResult result = _groupService.Update(criteria);

        //                if (result != null && result.IsSuccessful)
        //                {
        //                    ViewBag.Success = true;
        //                }
        //            }

        //            return View(criteria);
        //        }

        //        #endregion Edit Group

        //        #region Activation

        //        /// <summary>
        //        /// Update group status.
        //        /// </summary>
        //        /// <param name="id">The group ID.</param>
        //        /// <param name="isActive">Is active or not.</param>
        //        /// <returns>Action result.</returns>
        //        [N88Auth(FunctionKey = FunctionKeys.ManageGroup, Policy = Constant.Policy.Host)]
        //        public ActionResult Activate(int id, bool isActive)
        //        {
        //            if (Request.IsAjaxRequest())
        //            {
        //                var criteria = new UpdateStatusGroupCriteria
        //                {
        //                    GroupId = id,
        //                    IsActive = isActive,
        //                    ModifiedBy = CurrentSession.UserId,
        //                    ModifiedDate = DateTime.Now
        //                };

        //                ICommandResult result = _groupService.UpdateStatus(criteria);

        //                if (result != null && result.IsSuccessful)
        //                {
        //                    return Json(Constant.Ok);
        //                }
        //            }

        //            return new EmptyResult();
        //        }

        //        #endregion Activation

        //        #region Assign Permission

        //        /// <summary>
        //        /// Assign group permission.
        //        /// </summary>
        //        /// <param name="id">The group ID.</param>
        //        /// <param name="siteId">The site ID.</param>
        //        /// <returns>Action result.</returns>
        //        [HttpGet]
        //        [N88Auth(FunctionKey = FunctionKeys.AssignFunctionToGroup, Policy = Constant.Policy.Read)]
        //        public ActionResult AssignPermission(int id, int siteId = 0)
        //        {
        //            var siteIdValue = siteId == 0 || SiteId != N88AdminId ? SiteId : siteId;

        //            var group = _groupService.GetById(id);
        //            var site = _siteService.GetById(siteIdValue);

        //            if (group == null || site == null)
        //            {
        //                return RedirectToAction("Manage");
        //            }

        //            var criteria = new AssignFunctionGroupCriteria();

        //            criteria.GroupId = group.Id;
        //            criteria.GroupName = group.Name;
        //            criteria.SiteId = site.Id;

        //            ViewFlags.HasAssignFunctionRight =
        //                HasRightOnSite(criteria.SiteId, FunctionKeys.AssignFunctionToGroup, Constant.Policy.Host);

        //            ViewBag.SiteSelectList = CurrentSession.Level == (int)Constant.Level.PortalAdmin ?
        //                _siteService.GetAllSelectListItem(Environment, true, criteria.SiteId) :
        //                _siteService.GetSelectListItemByUserAndFunctionKeyIncludeGroup(CurrentSession.UserId,
        //                                                                                FunctionKeys.AssignFunctionToGroup,
        //                                                                                Environment,
        //                                                                                selectedSiteId: criteria.SiteId);

        //            ViewBag.FunctionList = _functionService.GetBySiteInHierarchy(criteria.SiteId, Environment, true);
        //            ViewBag.GroupFuncPolicyList =
        //                _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, Environment);
        //            ViewBag.UserFuncPolicyList =
        //                _functionService.GetByUserAndSiteIncludeGroup(CurrentSession.UserId, criteria.SiteId, Environment);
        //            ViewBag.UserLevel = CurrentSession.Level;

        //            return View(criteria);
        //        }

        //        /// <summary>
        //        /// Assign group permission.
        //        /// </summary>
        //        /// <param name="criteria">The criteria.</param>
        //        /// <returns>Action result.</returns>
        //        [HttpPost]
        //        [N88Auth(FunctionKey = FunctionKeys.AssignFunctionToGroup, Policy = Constant.Policy.Host)]
        //#pragma warning disable S3776 // Cognitive Complexity of methods should not be too high
        //#pragma warning disable S1541 // Methods and properties should not be too complex
        //        public ActionResult AssignPermission(AssignFunctionGroupCriteria criteria)
        //#pragma warning restore S1541 // Methods and properties should not be too complex
        //#pragma warning restore S3776 // Cognitive Complexity of methods should not be too high
        //        {
        //            // check group and site
        //            IGroup group = _groupService.GetById(criteria.GroupId);
        //            ISite site = _siteService.GetById(criteria.SiteId);

        //            if (group == null || site == null)
        //            {
        //                return RedirectToAction("Manage");
        //            }

        //            // check policy
        //            int policy = _userService.GetUserSiteFunctionKeyPolicy(
        //                CurrentSession.UserId,
        //                criteria.SiteId,
        //                FunctionKeys.AssignFunctionToGroup);

        //            if (policy < (int)Constant.Policy.Host)
        //            {
        //                return RedirectToAction("Unauthorize", "Common");
        //            }

        //            ViewFlags.HasAssignFunctionRight = policy >= (int)Constant.Policy.Host;

        //            criteria.ModifiedBy = CurrentSession.UserId;
        //            criteria.ModifiedDate = DateTime.Now;

        //            // list function policy
        //            List<IFunction> listFunc =
        //                _functionService.GetBySiteInHierarchy(criteria.SiteId, Environment, true).ToList();

        //            // list group function policy
        //            List<FunctionPolicy> listGroupFuncPolicy =
        //                _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, Environment).ToList();

        //            // list function will be remove by current user login
        //            var listGroupFuncRemove = new List<FunctionPolicy>();
        //            listGroupFuncRemove.AddRange(listGroupFuncPolicy);

        //            // list function policy of current user login
        //            List<FunctionPolicy> listCurrentUserFuncPolicy =
        //                _functionService.GetByUserAndSiteIncludeGroup(CurrentSession.UserId, criteria.SiteId, Environment).ToList();

        //            // check function host,contains in list function
        //            if (!criteria.FuncHost.IsNullOrDBNull())
        //            {
        //                foreach (int itemFunc in criteria.FuncHost)
        //                {
        //                    // function find from list function, policy is host
        //                    if (!listFunc.Any(f => f.Id == itemFunc))
        //                    {
        //                        return RedirectToAction("Error", "Common");
        //                    }

        //                    listGroupFuncRemove.Remove(f => f.Function.Id == itemFunc);
        //                }
        //            }

        //            // check function read, with current user login have permission
        //            if (!criteria.FuncRead.IsNullOrDBNull())
        //            {
        //                foreach (int itemFunc in criteria.FuncRead)
        //                {
        //                    listGroupFuncRemove.Remove(f => f.Function.Id == itemFunc);
        //                }
        //            }

        //            // check permission current user login with group be assign permission
        //            // check for function policy will be remove ( set policy = 0 )
        //            listGroupFuncRemove.Remove(f => f.Policy > 0);
        //            foreach (FunctionPolicy itemFunc in listGroupFuncRemove)
        //            {
        //                if (!listCurrentUserFuncPolicy.Any(f => f.Function.Id == itemFunc.Function.Id && f.Policy >= itemFunc.Policy))
        //                {
        //                    return RedirectToAction("Error", "Common");
        //                }
        //            }

        //            // assign permission
        //            ICommandResult result = _groupService.AssignFunction(criteria);

        //            if (result != null && result.IsSuccessful)
        //            {
        //                ViewBag.Success = true;

        //                listGroupFuncPolicy =
        //                    _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, Environment).ToList();
        //            }

        //            ViewBag.SiteSelectList = UserIsPortalAdmin ?
        //                _siteService.GetAllSelectListItem(Environment, true, criteria.SiteId) :
        //                _siteService.GetSelectListItemByUserAndFunctionKeyIncludeGroup(
        //                    CurrentSession.UserId,
        //                    FunctionKeys.AssignFunctionToGroup,
        //                    Environment,
        //                    selectedSiteId: criteria.SiteId);

        //            ViewBag.FunctionList = listFunc;
        //            ViewBag.GroupFuncPolicyList = listGroupFuncPolicy;
        //            ViewBag.UserFuncPolicyList = listCurrentUserFuncPolicy;
        //            ViewBag.UserLevel = CurrentSession.Level;

        //            return View(criteria);
        //        }

        //        #endregion Assign Permission

        //        #region UnassignPermission

        //        /// <summary>
        //        /// Assign group permission.
        //        /// </summary>
        //        /// <param name="criteria">The criteria.</param>
        //        /// <returns>Action result.</returns>
        //        [HttpPost]
        //        [N88Auth(FunctionKey = FunctionKeys.AssignFunctionToGroup, Policy = Constant.Policy.Host)]
        //        public ActionResult UnassignPermission(int groupId, int functionId)
        //        {
        //            // check group and site
        //            var function = _functionService.GetById(functionId);
        //            IGroup group = _groupService.GetById(groupId);
        //            ISite site = function.Site;
        //            List<FunctionPolicy> listGroupFuncPolicy = _functionService.GetByGroupAndSite(groupId, site.Id, Environment).ToList();

        //            var criteria = new AssignFunctionGroupCriteria();
        //            criteria.FuncHost = listGroupFuncPolicy.Where(p => p.Policy == 2 && p.Function.Id != functionId).Select(p => (int)p.Function.Id).ToArray();
        //            criteria.FuncRead = listGroupFuncPolicy.Where(p => p.Policy == 1 && p.Function.Id != functionId).Select(p => (int)p.Function.Id).ToArray();
        //            criteria.ModifiedBy = CurrentSession.UserId;
        //            criteria.ModifiedDate = DateTime.Now;
        //            criteria.GroupId = groupId;
        //            criteria.GroupName = group.Name;
        //            criteria.SiteId = site.Id;

        //            // assign permission
        //            ICommandResult result = _groupService.AssignFunction(criteria);

        //            return Json(result);
        //        }

        //        #endregion UnassignPermission

        //        #region Group Info

        //        /// <summary>
        //        /// Get group information.
        //        /// </summary>
        //        /// <param name="id">The group ID.</param>
        //        /// <returns>Action result.</returns>
        //        [HttpPost]
        //        [N88Auth(FunctionKey = FunctionKeys.ManageGroup, Policy = Constant.Policy.Read)]
        //        public ActionResult GroupInfo(int id)
        //        {
        //            return View(_groupService.GetById(id));
        //        }

        //        #endregion Group Info
    }
}