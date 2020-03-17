// -----------------------------------------------------------------------
// <copyright file="AccountController.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Controllers.Account
{
    using Fanex.Common;
    using Fanex.N88.Core.Configuration;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    using Web.ActionFilter;

    public class AccountController : CultureBaseController
    {
        private readonly UserService userService;

        public AccountController()
        {
            userService = new UserService();
        }

        public ActionResult Manage(
             int id = 1,
            int size = 5000,
            string username = "",
            int groupId = 0,
            int statusId = 1)
        {
            var criteria = new SearchUserCriteria
            {
                PageIndex = id,
                PageSize = size,
                Username = username,
                GroupId = groupId,
                SiteId = Consts.SiteId,
                Status = statusId,
                TotalRows = 0,
                Environment = "UAT"
            };

            ViewBag.GroupSelectList = GetGroups();
            ViewBag.Criteria = criteria;
            IEnumerable<UserLevel> users = userService.SearchUser(criteria);

            ViewBag.currentUserLevel = userService.GetUserSiteLevel(SessionServiceInstance.UserSession.UserId, N88Settings.Settings.SiteId);

            var model = new PagerList<UserLevel>(criteria.PageIndex, criteria.PageSize, criteria.TotalRows, users);
            return View("~/Views/Account/Manage.cshtml", model);
        }

        public ActionResult NewUser()
        {
            ViewBag.GroupSelectList = GetGroups();
            var criteria = new InsertCustCriteria();
            ViewBag.Success = false;
            return View("~/Views/Account/NewUser.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult NewUser(InsertCustCriteria criteria)
        {
            ViewBag.GroupSelectList = GetGroups();

            if (ModelState.IsValid)
            {
                if (userService.CheckUsernameExist(criteria.Username))
                {
                    ModelState.AddModelError("Username", string.Format("Duplicate User {0}", criteria.Username));
                    return View("~/Views/Account/NewUser.cshtml", criteria);
                }

                // add new user
                criteria.UserPwd = Cryptography.CfsEnCode(criteria.UserPwd);
                criteria.FirstName = criteria.FirstName ?? string.Empty;
                criteria.LastName = criteria.LastName ?? string.Empty;
                criteria.Email = criteria.Email ?? string.Empty;

                var result = userService.Insert(criteria);
                if (result != null && result.IsSuccessful)
                {
                    var assignSiteCriteria = new AssignSiteUserCriteria
                    {
                        CreatedBy = Consts.CurrentUserId,
                        CreatedDate = DateTime.Now,
                        UserId = criteria.CustId,
                        SiteId = Consts.SiteId,
                        Level = Consts.UserLevel,
                        IsActive = true,
                        IsNeverExpired = true,
                    };
                    var assignResult = userService.AssignSite(assignSiteCriteria);

                    if (assignResult != null && assignResult.IsSuccessful)
                    {
                        ViewBag.Success = true;
                        ViewBag.UserId = criteria.CustId;
                    }
                }
            }

            
            return View("~/Views/Account/NewUser.cshtml", criteria);
        }

        public ActionResult Edit(int id)
        {
            var criteria = new UpdateCustCriteria();

            var user = userService.GetById(id);
            criteria.CustId = user.Id;
            criteria.FirstName = user.FirstName;
            criteria.LastName = user.LastName;
            criteria.Email = user.Email;
            criteria.Username = user.Username;
            criteria.GroupId = user.Group != null ? user.Group.Id : 0;

            ViewBag.GroupSelectList = GetGroups();

            return View("~/Views/Account/EditUser.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult Edit(UpdateCustCriteria criteria)
        {
            ViewBag.GroupSelectList = GetGroups();

            if (ModelState.IsValid)
            {
                criteria.FirstName = criteria.FirstName ?? string.Empty;
                criteria.LastName = criteria.LastName ?? string.Empty;
                criteria.Email = criteria.Email ?? string.Empty;

                CommandResult result = userService.Update(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            return View("~/Views/Account/EditUser.cshtml", criteria);
        }

        public ActionResult AssignPermission(int id,
            int siteId = 0)
        {
            var user = userService.GetById(id);
            //var site = userService.GetSiteById(siteId);

            var criteria = new AssignFunctionUserCriteria
            {
                UserId = id,
                Username = user.Username,
                SiteId = siteId
            };

            ViewBag.GroupFuncPolicyList = userService.GetByGroupAndSite(user.Group.Id, criteria.SiteId, "UAT").ToList();
            ViewBag.FunctionList = userService.GetBySiteInHierarchy(criteria.SiteId, "UAT", true).ToList();
            ViewBag.UserFuncPolicyList = userService.GetByUserAndSite(criteria.UserId, criteria.SiteId, "UAT").ToList();

            return View("~/Views/Account/AssignPermission.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult AssignPermission(AssignFunctionUserCriteria criteria)
        {
            var sessionUserId = 1;
            var user = userService.GetById(criteria.UserId);
            //var site = userService.GetSiteById(criteria.SiteId);

            criteria.Username = user.Username;
            criteria.ModifiedBy = sessionUserId;
            criteria.ModifiedDate = DateTime.Now;

            //var functionList = userService.GetBySiteInHierarchy(criteria.SiteId, "UAT", true).ToList();
            //var userFuncPolicyList = userService.GetByUserAndSite(criteria.UserId, criteria.SiteId, "UAT").ToList();

            // list function will be remove by current user login
            //var listUserFuncRemove = new List<FunctionPolicy>();
            //listUserFuncRemove.AddRange(userFuncPolicyList);

            var result = userService.AssignFunction(criteria);

            ViewBag.FunctionList = userService.GetBySiteInHierarchy(criteria.SiteId, "UAT", true).ToList();
            if (result != null && result.IsSuccessful)
            {
                ViewBag.Success = true;

                ViewBag.UserFuncPolicyList = userService.GetByUserAndSite(criteria.UserId, criteria.SiteId, "UAT").ToList();
            }

            if (!ReferenceEquals(user.Group, null))
            {
                ViewBag.GroupFuncPolicyList = userService.GetByGroupAndSite(user.Group.Id, criteria.SiteId, "UAT").ToList();
            }

            return View("~/Views/Account/AssignPermission.cshtml", criteria);
        }

        public ActionResult ResetPassword(int id)
        {
            var user = userService.GetById(id);
            var criteria = new ResetPasswordCustCriteria
            {
                CustId = user.Id,
                Username = user.Username,
                UserPwd = string.Empty,
                ConfirmUserPwd = string.Empty,
                Token = GenerateToken()
            };

            return View("~/Views/Account/ResetPassword.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult ResetPassword(ResetPasswordCustCriteria criteria)
        {
            if (ModelState.IsValid)
            {
                //var user = userService.GetById(criteria.CustId);
                criteria.UserPwd = Cryptography.CfsEnCode(criteria.UserPwd);
                var result = userService.UpdatePassword(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            criteria.Token = GenerateToken();
            return View("~/Views/Account/ResetPassword.cshtml", criteria);
        }

        private string GenerateToken()
        {
            string token = Guid.NewGuid().ToString("N");

            //FormToken = token;

            return token;
        }

        private IEnumerable<SelectListItem> GetGroups()
        {
            var groupCriteria = new GetAllGroupCriteria
            {
                IsLicenseeGroup = true,
                SiteId = Consts.SiteId
            };

            return userService.GetSettingGroups(groupCriteria);
        }
    }
}