namespace Fanex.Athena.Controllers.Account
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.Linq;
    using System.Web.Hosting;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Service.Interfaces;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.Common;
    using Fanex.N88.Core.Configuration;
    using MvcPaging;
    using Newtonsoft.Json;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Extension.Helper;

    [FunctionAuthorization(PermissionKeys.ManageUser)]
    public class AccountController : CultureBaseController
    {
        private readonly IUserService userService;
        private readonly IFunctionService functionService;
        private readonly IFileManagerService fileManager;
        private const int _MYRCurency = 2;

        public AccountController(IUserService userService, IFunctionService functionService, IFileManagerService fileManager)
        {
            this.userService = userService;
            this.functionService = functionService;
            this.fileManager = fileManager;
        }

        public ActionResult Manage(
             int page = 1,
            int size = 10,
            string username = "",
            int groupId = 0,
            int statusId = 1)
        {
            var criteria = new SearchUserCriteria
            {
                PageIndex = page,
                PageSize = size,
                Username = username,
                GroupId = groupId,
                SiteId = N88Settings.Settings.SiteId,
                Status = statusId,
                TotalRows = 0,
                Environment = N88Settings.Settings.Environment
            };

            ViewBag.HasHostPermission = HasPermission(PermissionKeys.ManageUser, (int)Policy.Host);
            ViewBag.GroupSelectList = GetGroups();
            ViewBag.Criteria = criteria;
            ViewBag.CurrentUserId = SessionServiceInstance.UserSession.UserId;
            ViewBag.currentUserLevel = userService.GetUserSiteLevel(SessionServiceInstance.UserSession.UserId, N88Settings.Settings.SiteId);
            IEnumerable<UserLevel> users = userService.SearchUser(criteria);

            return View("~/Views/Account/Manage.cshtml", users.ToPagedList(criteria.PageIndex - 1, criteria.PageSize, criteria.TotalRows));
        }

        public ActionResult UserInfo(int id)
        {
            return View(userService.GetById(id));
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult UpdateStatus(int id, bool isActive)
        {
            var assignSiteCriteria = new UpdateSiteToUserCriteria
            {
                UserId = id,
                SiteId = N88Settings.Settings.SiteId,
                Level = (int)Constant.Level.User,
                IsActive = isActive,
                ModifiedBy = SessionServiceInstance.UserSession.UserId,
                ModifiedDate = DateTime.Now,
                IsNeverExpired = true
            };
            UpdateCriteria(assignSiteCriteria);
            var assignResult = userService.UpdateSite(assignSiteCriteria);

            if (assignResult != null && assignResult.IsSuccessful)
            {
                ViewBag.Success = true;
                return Json(Constant.Ok);
            }

            return new EmptyResult();
        }

        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult NewUser()
        {
            ViewBag.GroupSelectList = GetGroups();
            ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();
            var criteria = new InsertCustCriteria();
            criteria.DefaultBaseCurrencyId = _MYRCurency;
            ViewBag.Success = false;
            return View("~/Views/Account/NewUser.cshtml", criteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult NewUser(InsertCustCriteria criteria)
        {
            ViewBag.GroupSelectList = GetGroups();
            ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();

            if (ModelState.IsValid)
            {
                if (userService.CheckUsernameExist(criteria.Username, true, N88Settings.Settings.SiteId))
                {
                    ModelState.AddModelError("Username", string.Format("Duplicate User {0}", criteria.Username));
                    return View("~/Views/Account/NewUser.cshtml", criteria);
                }

                UpdateInsertCustCriteria(criteria);
                UpdateCriteria(criteria);
                var result = userService.Insert(criteria);
                if (result != null && result.IsSuccessful)
                {
                    var assignSiteCriteria = new AssignSiteUserCriteria
                    {
                        CreatedBy = SessionServiceInstance.UserSession.UserId,
                        CreatedDate = DateTime.Now,
                        UserId = criteria.UserId,
                        SiteId = N88Settings.Settings.SiteId,
                        Level = (int)Constant.Level.User,
                        IsActive = true,
                        IsNeverExpired = true,
                    };
                    UpdateCriteria(assignSiteCriteria);
                    var assignResult = userService.AssignSite(assignSiteCriteria);

                    if (assignResult != null && assignResult.IsSuccessful)
                    {
                        ViewBag.Success = true;
                        ViewBag.UserId = criteria.UserId;
                    }
                }
            }

            return View("~/Views/Account/NewUser.cshtml", criteria);
        }

        public void UpdateInsertCustCriteria(InsertCustCriteria criteria)
        {
            criteria.UserPwd = Cryptography.CfsEnCode(criteria.UserPwd);
            criteria.FirstName = criteria.FirstName ?? string.Empty;
            criteria.LastName = criteria.LastName ?? string.Empty;
            criteria.Email = criteria.Email ?? string.Empty;
            criteria.IsLicenseeUser = true;
            criteria.SiteId = N88Settings.Settings.SiteId;
        }

        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult Edit(int id)
        {
            var criteria = new UpdateCustCriteria();

            var user = userService.GetById(id);
            UpdateUserInfoToCriteria(criteria, user);

            if (user.IsLicenseeUser)
            {
                criteria.DefaultBaseCurrencyId = user.DefaultBaseCurrencyId != 0 ? user.DefaultBaseCurrencyId : _MYRCurency;
                ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();
            }

            ViewBag.GroupSelectList = GetGroups();

            return View("~/Views/Account/EditUser.cshtml", criteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult Edit(UpdateCustCriteria criteria)
        {
            ViewBag.GroupSelectList = GetGroups();

            if (criteria.IsLicenseeUser)
            {
                ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();
            }

            if (ModelState.IsValid)
            {
                UpdateUserInfoCriteria(criteria);
                CommandResult result = userService.Update(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            return View("~/Views/Account/EditUser.cshtml", criteria);
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult EditUserInfo()
        {
            var criteria = new UpdateCustCriteria();

            var user = userService.GetById(SessionServiceInstance.UserSession.UserId);
            UpdateUserInfoToCriteria(criteria, user);

            if (user.IsLicenseeUser)
            {
                criteria.DefaultBaseCurrencyId = user.DefaultBaseCurrencyId != 0 ? user.DefaultBaseCurrencyId : _MYRCurency;
                ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();
            }

            return View("~/Views/Account/EditUserInfo.cshtml", criteria);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult EditUserInfo(UpdateCustCriteria criteria)
        {
            if (criteria.IsLicenseeUser)
            {
                ViewBag.DefaultBaseCurencyList = GetDefaultBaseCurencyList();
            }

            if (ModelState.IsValid)
            {
                UpdateUserInfoCriteria(criteria);
                CommandResult result = userService.Update(criteria);

                if (result != null && result.IsSuccessful)
                {
                    if (!string.IsNullOrEmpty(criteria.DefaultBaseCurrencyName))
                    {
                        SessionServiceInstance.UserSession.DefaultBaseCurrency = criteria.DefaultBaseCurrencyName;
                    }
                    ViewBag.Success = true;
                }
            }

            return View("~/Views/Account/EditUserInfo.cshtml", criteria);
        }

        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult AssignPermission(int id)
        {
            var user = userService.GetById(id);
            var criteria = new AssignFunctionUserCriteria
            {
                UserId = id,
                Username = user.Username,
                SiteId = N88Settings.Settings.SiteId
            };

            ViewBag.GroupFuncPolicyList = functionService.GetByGroupAndSite(user.Group.Id, criteria.SiteId, N88Settings.Settings.Environment).ToList();
            ViewBag.FunctionList = functionService.GetBySiteInHierarchy(criteria.SiteId, N88Settings.Settings.Environment, true).ToList();
            ViewBag.UserFuncPolicyList = functionService.GetByUserAndSite(criteria.UserId, criteria.SiteId, N88Settings.Settings.Environment).ToList();

            return View("~/Views/Account/AssignPermission.cshtml", criteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult AssignPermission(AssignFunctionUserCriteria criteria)
        {
            var user = userService.GetById(criteria.UserId);

            criteria.Username = user.Username;
            criteria.ModifiedBy = SessionServiceInstance.UserSession.UserId;
            criteria.ModifiedDate = DateTime.Now;

            UpdateCriteria(criteria);
            var result = userService.AssignFunction(criteria);

            ViewBag.FunctionList = functionService.GetBySiteInHierarchy(criteria.SiteId, N88Settings.Settings.Environment, true).ToList();
            if (result != null && result.IsSuccessful)
            {
                ViewBag.Success = true;

                ViewBag.UserFuncPolicyList = functionService.GetByUserAndSite(criteria.UserId, criteria.SiteId, N88Settings.Settings.Environment).ToList();
            }

            if (!ReferenceEquals(user.Group, null))
            {
                ViewBag.GroupFuncPolicyList = functionService.GetByGroupAndSite(user.Group.Id, criteria.SiteId, N88Settings.Settings.Environment).ToList();
            }

            return View("~/Views/Account/AssignPermission.cshtml", criteria);
        }

        [HttpGet]
        [AllowAnonymous]
        public ActionResult SetDataLimits(int id)
        {
            var user = userService.GetById(id);
            var userSetting = userService.GetSetting(id);

            var criteria = new SetDataLimitsCriteria
            {
                UserId = id,
                Username = user.Username
            };

            AssignDataLimitsCriteria(criteria, userSetting);

            return View("~/Views/Account/SetDataLimits.cshtml", criteria);
        }

        [HttpPost]
        [AllowAnonymous]
        public ActionResult SetDataLimits(SetDataLimitsCriteria criteria)
        {
            const int DataLimitMin = 1;
            const int AllReportDataLimitMax = 90;
            const int DataLimitsTopBottomMax = 500;

            DataRangeLimitationValid(criteria.IsAllReportDataLimitsApplied,
                criteria.AllReportDataLimits,
                ViewResources.last_X_days,
                DataLimitMin,
                AllReportDataLimitMax);
            DataRangeLimitationValid(criteria.WinLossAnalysisDataLimitsTop.IsApplied,
                criteria.WinLossAnalysisDataLimitsTop.Value,
                ViewResources.top_X_players,
                DataLimitMin,
                DataLimitsTopBottomMax);
            DataRangeLimitationValid(criteria.WinLossAnalysisDataLimitsBottom.IsApplied,
                criteria.WinLossAnalysisDataLimitsBottom.Value,
                ViewResources.bottom_X_players,
                DataLimitMin,
                DataLimitsTopBottomMax);

            if (ModelState.IsValid)
            {
                criteria.ModifiedBy = SessionServiceInstance.UserSession.UserId;
                criteria.ModifiedDate = DateTime.Now;
                UpdateCriteria(criteria);

                var result = userService.UpdateSetting(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            return View("~/Views/Account/SetDataLimits.cshtml", criteria);
        }

#pragma warning disable S1541 // Methods and properties should not be too complex

        public void AssignDataLimitsCriteria(SetDataLimitsCriteria criteria, IEnumerable<Setting> userSetting)
#pragma warning restore S1541 // Methods and properties should not be too complex
        {
            int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_SinglePlayer)?.Value, out int wlAnalysisSinglePlayer);

            criteria.IsAllReportDataLimitsApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.LimitDays)?.Value, out int allReportDataLimits);
            criteria.AllReportDataLimits = allReportDataLimits > 0 ? allReportDataLimits : default(int?);
            criteria.IsWinLossAnalysisSinglePlayerApplied = wlAnalysisSinglePlayer == 1;
            criteria.WinLossAnalysisDataLimitsTop = new GroupDataPermission
            {
                IsTurnoverApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_TopTO)?.Value, out int wlAnalysisTopTO),
                IsGGRApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_TopGGR)?.Value, out int wlAnalysisTopGGR),
                IsBetCountApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_TopBetCount)?.Value, out int wlAnalysisTopBetCount),
                IsAvgBetAmountApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_TopAvgBetAmount)?.Value, out int wlAnalysisTopAvgBetAmount),
                Value = GetDataLimitsValue(wlAnalysisTopTO, wlAnalysisTopGGR, wlAnalysisTopBetCount, wlAnalysisTopAvgBetAmount)
            };
            criteria.WinLossAnalysisDataLimitsBottom = new GroupDataPermission
            {
                IsTurnoverApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_BottomTO)?.Value, out int wlAnalysisBottomTO),
                IsGGRApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_BottomGGR)?.Value, out int wlAnalysisBottomGGR),
                IsBetCountApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_BottomBetCount)?.Value, out int wlAnalysisBottomBetCount),
                IsAvgBetAmountApplied = int.TryParse(userSetting.FirstOrDefault(_ => _.Key == SettingKey.WLAnalysis_BottomAvgBetAmount)?.Value, out int wlAnalysisBottomAvgBetAmount),
                Value = GetDataLimitsValue(wlAnalysisBottomTO, wlAnalysisBottomGGR, wlAnalysisBottomBetCount, wlAnalysisBottomAvgBetAmount)
            };
        }

        public int? GetDataLimitsValue(params int?[] list)
        {
            return list.FirstOrDefault(_ => _ > 0);
        }

        public void DataRangeLimitationValid(bool isApplied, int? dataRangeLimitation, string displayName, int minDay, int maxDay)
        {
            var dataRangeLimitationMsg = "";

            if (isApplied)
            {
                if (!dataRangeLimitation.HasValue)
                {
                    dataRangeLimitationMsg = string.Format(ViewResources.TheLimitRequiredValidationMsg, displayName);
                }

                if (dataRangeLimitation < minDay || dataRangeLimitation > maxDay)
                {
                    dataRangeLimitationMsg = string.Format(ViewResources.TheLimitValidationMsg, displayName, minDay, maxDay);
                }
            }

            if (!string.IsNullOrEmpty(dataRangeLimitationMsg))
            {
                ModelState.AddModelError("e", dataRangeLimitationMsg);
            }
        }

        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult ResetPassword(int id)
        {
            var user = userService.GetById(id);
            var criteria = new ResetPasswordCustCriteria
            {
                UserId = user.Id,
                Username = user.Username,
                UserPwd = string.Empty,
                ConfirmUserPwd = string.Empty,
                Token = GenerateToken()
            };

            return View("~/Views/Account/ResetPassword.cshtml", criteria);
        }

        [HttpPost]
        [FunctionAuthorization(Policy.Host, PermissionKeys.ManageUser)]
        public ActionResult ResetPassword(ResetPasswordCustCriteria criteria)
        {
            if (ModelState.IsValid)
            {
                UpdateCriteria(criteria);
                var result = userService.UpdatePassword(criteria);

                if (result != null && result.IsSuccessful)
                {
                    ViewBag.Success = true;
                }
            }

            criteria.Token = GenerateToken();
            return View("~/Views/Account/ResetPassword.cshtml", criteria);
        }

        private static void UpdateUserInfoToCriteria(UpdateCustCriteria criteria, User user)
        {
            criteria.UserId = user.Id;
            criteria.FirstName = user.FirstName;
            criteria.LastName = user.LastName;
            criteria.Email = user.Email;
            criteria.Username = user.Username;
            criteria.IsLicenseeUser = user.IsLicenseeUser;
            criteria.GroupId = user.Group != null ? user.Group.Id : 0;
        }

        private void UpdateUserInfoCriteria(UpdateCustCriteria criteria)
        {
            criteria.FirstName = criteria.FirstName ?? string.Empty;
            criteria.LastName = criteria.LastName ?? string.Empty;
            criteria.Email = criteria.Email ?? string.Empty;

            UpdateCriteria(criteria);
        }

        private static string GenerateToken()
        {
            return Guid.NewGuid().ToString("N");
        }

        private IEnumerable<SelectListItem> GetGroups()
        {
            var groupCriteria = new GetAllGroupCriteria
            {
                IsLicenseeGroup = true,
                SiteId = N88Settings.Settings.SiteId
            };

            return userService.GetSettingGroups(groupCriteria);
        }

        private IEnumerable<SelectListItem> GetDefaultBaseCurencyList()
        {
            IEnumerable<SelectListItem> result = null;
            var jsonContent = GetGetDefaultBaseCurencyContent();

            if (!string.IsNullOrEmpty(jsonContent))
            {
                result = JsonConvert.DeserializeObject<IEnumerable<SelectListItem>>(jsonContent);
            }

            return result ?? new List<SelectListItem>();
        }

        private string GetGetDefaultBaseCurencyContent()
        {
            const string FilePath = "~/App_Data/UserDefaultBaseCurencySetting.json";
            using (StreamReader reader = fileManager.StreamReader(HostingEnvironment.MapPath(FilePath)))
            {
                return reader.ReadToEnd();
            }
        }

        private void UpdateCriteria(LogExecSpCriteria criteria)
        {
            criteria.CurrentUserId = SessionServiceInstance.UserSession.UserId;
            criteria.CurrentSiteId = N88Settings.Settings.SiteId;
            criteria.LoginIp = ClientHelper.GetClientIp(HttpContext.Request);
            criteria.LogDate = DateTime.Now;
        }

        private bool HasPermission(string functionKey, int policy)
        {
            var userFunctions = SessionServiceInstance.UserSession.FunctionList;

            return userFunctions.Any(function => function.FunctionKey == functionKey && function.Policy >= policy);
        }
    }
}