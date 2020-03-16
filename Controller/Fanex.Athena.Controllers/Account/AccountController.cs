// -----------------------------------------------------------------------
// <copyright file="AccountController.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Controllers.Account
{
    using Fanex.Common;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    using Web.ActionFilter;

    public class AccountController : Controller
    {
        private readonly UserService userService;

        public AccountController()
        {
            userService = new UserService();
        }

        public ActionResult Manage()
        {
            var criteria = new SearchUserCriteria
            {
                PageIndex = 1,
                PageSize = 20,
                Username = string.Empty,
                GroupId = 0,
                SiteId = 3,
                Status = 1,
                TotalRows = 0,
                Environment = "UAT"
            };

            var groupCriteria = new GetAllGroupCriteria();

            ViewBag.GroupSelectList = userService.GetSettingGroups(groupCriteria);
            IEnumerable<UserLevel> users = userService.SearchUser(criteria);

            return View("~/Views/Account/Manage.cshtml", users);
        }

        public ActionResult NewUser()
        {
            var groupCriteria = new GetAllGroupCriteria();
            ViewBag.GroupSelectList = userService.GetSettingGroups(groupCriteria);
            var criteria = new InsertCustCriteria();
            return View("~/Views/Account/NewUser.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult NewUser(InsertCustCriteria criteria)
        {
            var groupCriteria = new GetAllGroupCriteria();
            ViewBag.GroupSelectList = userService.GetSettingGroups(groupCriteria);

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
                    ViewBag.Success = true;
                    //ViewBag.UserId = criteria.CustId;
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

            var groupCriteria = new GetAllGroupCriteria();
            ViewBag.GroupSelectList = userService.GetSettingGroups(groupCriteria);

            return View("~/Views/Account/EditUser.cshtml", criteria);
        }

        [HttpPost]
        public ActionResult Edit(UpdateCustCriteria criteria)
        {
            var groupCriteria = new GetAllGroupCriteria();
            ViewBag.GroupSelectList = userService.GetSettingGroups(groupCriteria);

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
            var user = userService.GetById(criteria.CustId);
            criteria.UserPwd = Cryptography.CfsEnCode(criteria.UserPwd);
            var result = userService.UpdatePassword(criteria);

            if (result != null && result.IsSuccessful)
            {
                ViewBag.Success = true;
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
    }
}