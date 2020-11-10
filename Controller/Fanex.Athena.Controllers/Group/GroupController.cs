namespace Fanex.Athena.Controllers.Account
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.Common.Extensions;
    using Fanex.N88.Core.Configuration;
    using MvcPaging;

    [FunctionAuthorization(PermissionKeys.ManageGroup)]
    public class GroupController : CultureBaseController
    {
        private const byte policyRead = 1;
        private const byte policyHost = 2;
        private readonly IGroupService _groupService;
        private readonly IUserService _userService;
        private readonly IFunctionService _functionService;

        public GroupController(IGroupService groupService, IUserService userService, IFunctionService functionService)
        {
            _groupService = groupService;
            _userService = userService;
            _functionService = functionService;
        }

        [HttpGet]
        public ActionResult Manage(
            int page = 1,
            int size = 20,
            string groupName = ""
            )
        {
            ViewBag.HasEditRight = HasPermission(PermissionKeys.ManageGroup, (int)Policy.Host);
            ViewBag.HasAssignFunctionRight = HasPermission(PermissionKeys.ManageGroup, (int)Policy.Host);
            ViewBag.HasManageUserRight = HasPermission(PermissionKeys.ManageUser, (int)Policy.Read);

            var groups = _groupService.GetAllWithNumOfUser(groupName, N88Settings.Settings.Environment, siteId: N88Settings.Settings.SiteId);

            var searchViewModal = new GetAllGroupModal
            {
                PageIndex = page,
                PageSize = size,
                GroupName = groupName,
                TotalRows = groups.Count()
            };

            ViewBag.Criteria = searchViewModal;

            return View("~/Views/Group/Manage.cshtml", groups.ToPagedList(searchViewModal.PageIndex - 1, searchViewModal.PageSize, searchViewModal.TotalRows));
        }

        [HttpGet]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult AddNew()
        {
            return View(new InsertGroupCriteria());
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult AddNew(InsertGroupCriteria criteria)
        {
            if (ModelState.IsValid)
            {
                var getCriteria = new GetByNameGroupCriteria
                {
                    GroupName = criteria.GroupName,
                    IsLicenseeGroup = true,
                    SiteId = N88Settings.SiteId
                };

                GroupData group = _groupService.Get(getCriteria);

                if (!ReferenceEquals(group, null) && group.GroupId != criteria.GroupId)
                {
                    ModelState.AddModelError("SiteName", string.Format(ViewResources.DuplicateMsg, criteria.GroupName));

                    return View(criteria);
                }

                criteria.IsLicenseeGroup = true;
                criteria.SiteId = N88Settings.Settings.SiteId;
                criteria.CreatedBy = SessionServiceInstance.UserSession.UserId;
                criteria.CreatedDate = DateTime.Now;
                UpdateCriteria(criteria);
                CommandResult result = _groupService.ExecuteNonQuery(criteria);

                if (!result.IsSuccessful)
                {
                    ModelState.AddModelError("SiteName", string.Format(ViewResources.DuplicateMsg, criteria.GroupName));
                    return View(criteria);
                }

                ViewBag.Success = true;
            }

            return View(criteria);
        }

        [HttpGet]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult Edit(int id)
        {
            var getCriteria = new GetByIdGroupCriteria
            {
                GroupId = id
            };

            GroupData group = _groupService.Get(getCriteria);

            if (object.ReferenceEquals(group, null))
            {
                return RedirectToAction("Manage");
            }

            var updateCriteria = new UpdateGroupCriteria();

            updateCriteria.GroupId = group.GroupId;
            updateCriteria.Description = group.Description;
            updateCriteria.GroupName = group.GroupName;
            updateCriteria.IsActive = group.IsActive;

            return View(updateCriteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult Edit(UpdateGroupCriteria criteria)
        {
            if (ModelState.IsValid)
            {
                var getCriteria = new GetByNameGroupCriteria
                {
                    SiteId = N88Settings.Settings.SiteId,
                    GroupName = criteria.GroupName,
                    IsLicenseeGroup = true
                };

                GroupData group = _groupService.Get(getCriteria);

                if (!ReferenceEquals(group, null) && group.GroupId != criteria.GroupId)
                {
                    ModelState.AddModelError("SiteName", string.Format(ViewResources.DuplicateMsg, criteria.GroupName));

                    return View(criteria);
                }

                criteria.ModifiedBy = SessionServiceInstance.UserSession.UserId;
                criteria.ModifiedDate = DateTime.Now;
                criteria.IsLicenseeGroup = true;
                criteria.SiteId = N88Settings.Settings.SiteId;

                UpdateCriteria(criteria);

                CommandResult result = _groupService.ExecuteNonQuery(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            return View(criteria);
        }

        #region Activation

        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult Activate(int id, bool isActive)
        {
            if (Request.IsAjaxRequest())
            {
                var criteria = new UpdateStatusGroupCriteria
                {
                    GroupId = id,
                    IsActive = isActive,
                    ModifiedBy = SessionServiceInstance.UserSession.UserId,
                    ModifiedDate = DateTime.Now
                };

                UpdateCriteria(criteria);

                CommandResult result = _groupService.ExecuteNonQuery(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                    return Json(Constant.Ok);
                }
            }

            return new EmptyResult();
        }

        [HttpGet]
        public ActionResult AssignPermission(int id)
        {
            int siteId = N88Settings.Settings.SiteId;
            var userId = SessionServiceInstance.UserSession.UserId;

            var getGroupCriteria = new GetByIdGroupCriteria
            {
                GroupId = id
            };

            var group = _groupService.Get(getGroupCriteria);

            var criteria = new AssignFunctionGroupCriteria();

            criteria.GroupId = group.GroupId;
            criteria.GroupName = group.GroupName;
            criteria.SiteId = siteId;

            ViewBag.HasAssignFunctionRight = HasPermission(PermissionKeys.ManageGroup, (int)Policy.Host);

            ViewBag.FunctionList = _functionService.GetBySiteInHierarchy(criteria.SiteId, N88Settings.Settings.Environment, true);
            ViewBag.GroupFuncPolicyList =
                _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, N88Settings.Settings.Environment);
            ViewBag.UserFuncPolicyList =
                _functionService.GetByUserAndSiteIncludeGroup(userId, criteria.SiteId, N88Settings.Settings.Environment);
            ViewBag.UserLevel = _userService.GetUserSiteLevel(userId, siteId);

            return View(criteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageGroup)]
        public ActionResult AssignPermission(AssignFunctionGroupCriteria criteria)
        {
            criteria.SiteId = N88Settings.Settings.SiteId;

            ViewBag.HasAssignFunctionRight = HasPermission(PermissionKeys.ManageGroup, (int)Policy.Host);

            criteria.ModifiedBy = SessionServiceInstance.UserSession.UserId;
            criteria.ModifiedDate = DateTime.Now;

            // list function policy
            var listFunc =
                _functionService.GetBySiteInHierarchy(criteria.SiteId, N88Settings.Settings.Environment, true);

            // list group function policy
            var listGroupFuncPolicy =
                _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, N88Settings.Settings.Environment);

            // list function will be remove by current user login
            var listGroupFuncRemove = new List<FunctionPolicy>();
            listGroupFuncRemove.AddRange(listGroupFuncPolicy);

            // list function policy of current user login
            List<FunctionPolicy> listCurrentUserFuncPolicy =
                _functionService.GetByUserAndSiteIncludeGroup(SessionServiceInstance.UserSession.UserId, criteria.SiteId, N88Settings.Settings.Environment);

            // check function host,contains in list function
            if (!criteria.FuncHost.IsNullOrDBNull())
            {
                foreach (int itemFunc in criteria.FuncHost)
                {
                    // function find from list function, policy is host
                    if (!listFunc.Any(f => f.Id == itemFunc))
                    {
                        return RedirectToAction("Error", "Common");
                    }

                    listGroupFuncRemove.Remove(f => f.Function.Id == itemFunc);
                }
            }

            // check function read, with current user login have permission
            if (!criteria.FuncRead.IsNullOrDBNull())
            {
                foreach (int itemFunc in criteria.FuncRead)
                {
                    listGroupFuncRemove.Remove(f => f.Function.Id == itemFunc);
                }
            }

            // check permission current user login with group be assign permission
            // check for function policy will be remove ( set policy = 0 )
            listGroupFuncRemove.Remove(f => f.Policy > 0);
            foreach (FunctionPolicy itemFunc in listGroupFuncRemove)
            {
                if (!listCurrentUserFuncPolicy.Any(f => f.Function.Id == itemFunc.Function.Id && f.Policy >= itemFunc.Policy))
                {
                    return RedirectToAction("Error", "Common");
                }
            }

            UpdateCriteria(criteria);
            CommandResult result = _groupService.ExecuteNonQuery(criteria);

            if (result != null && result.IsSuccessful)
            {
                ViewBag.Success = true;

                listGroupFuncPolicy =
                    _functionService.GetByGroupAndSite(criteria.GroupId, criteria.SiteId, N88Settings.Settings.Environment);
            }

            ViewBag.FunctionList = listFunc;
            ViewBag.GroupFuncPolicyList = listGroupFuncPolicy;
            ViewBag.UserFuncPolicyList = listCurrentUserFuncPolicy;
            ViewBag.UserLevel = _userService.GetUserSiteLevel(SessionServiceInstance.UserSession.UserId, N88Settings.Settings.SiteId);

            return View(criteria);
        }

        #endregion Activation

        #region UnassignPermission

        [HttpPost]
        //[N88Auth(FunctionKey = FunctionKeys.AssignFunctionToGroup, Policy = Constant.Policy.Host)]
        public ActionResult UnassignPermission(int groupId, int functionId)
        {
            var getGroupCriteria = new GetByIdGroupCriteria
            {
                GroupId = groupId
            };

            var group = _groupService.Get(getGroupCriteria);
            List<FunctionPolicy> listGroupFuncPolicy = _functionService.GetByGroupAndSite(groupId, N88Settings.Settings.SiteId, AppSettingInstance.Environment).ToList();

            var criteria = new AssignFunctionGroupCriteria();
            criteria.FuncHost = listGroupFuncPolicy.Where(p => p.Policy == policyHost && p.Function.Id != functionId).Select(p => (int)p.Function.Id).ToArray();
            criteria.FuncRead = listGroupFuncPolicy.Where(p => p.Policy == policyRead && p.Function.Id != functionId).Select(p => (int)p.Function.Id).ToArray();
            criteria.ModifiedBy = SessionServiceInstance.UserSession.UserId;
            criteria.ModifiedDate = DateTime.Now;
            criteria.GroupId = groupId;
            criteria.GroupName = group.GroupName;
            criteria.SiteId = N88Settings.Settings.SiteId;

            CommandResult result = _groupService.ExecuteNonQuery(criteria);

            return Json(result);
        }

        #endregion UnassignPermission

        #region Group Info

        //[N88Auth(FunctionKey = FunctionKeys.ManageGroup, Policy = Constant.Policy.Read)]
        public ActionResult GroupInfo(int id)
        {
            var getCriteria = new GetByIdGroupCriteria
            {
                GroupId = id
            };

            var group = _groupService.Get(getCriteria);

            return View("~/Views/Group/GroupInfo.cshtml", group);
        }

        #endregion Group Info

        private void UpdateCriteria(LogExecSpCriteria criteria)
        {
            criteria.CurrentUserId = SessionServiceInstance.UserSession.UserId;
            criteria.CurrentSiteId = N88Settings.Settings.SiteId;
            criteria.LoginIp = HttpContext.Request.UserHostAddress;
            criteria.LogDate = DateTime.Now;
        }

        private bool HasPermission(string functionKey, int policy)
        {
            var userFunctions = SessionServiceInstance.UserSession.FunctionList;

            return userFunctions.Any(function => function.FunctionKey == functionKey && function.Policy >= policy);
        }
    }
}