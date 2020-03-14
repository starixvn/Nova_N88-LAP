// -----------------------------------------------------------------------
// <copyright file="AuthorizationController.cs" company="">
// TODO: Update copyright text.
// </copyright>
// -----------------------------------------------------------------------

namespace Fanex.Athena.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Drawing;
    using System.Drawing.Imaging;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Text;
    using System.Text.RegularExpressions;
    using System.Web;
    using System.Web.Caching;
    using System.Web.Mvc;
    using System.Web.Security;
    using System.Web.UI;
    using Extension.Utility.Interfaces;
    using Fanex.Athena.Extension.Utility;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Model.Auth.MetaModel;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Service.Core.Users.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.Common;
    using Fanex.NAP.Core.Configuration;
    using Fanex.NAP.Core.Models;
    using Fanex.NAP.Core.Models.ParameterObject;
    using Fanex.NAP.Core.Web.Auth;
    using Fanex.NAP.Core.Web.Session;
    using ONEbook.UM.Filters;
    using ONEbook.UM.Services;
    using Resources;

    public class AuthorizationController : CultureBaseController
    {
        #region Constant

        private const int InvalidCaptchaError = 101;
        private const int InvalidUserNameError = 102;
        private const int InvalidPasswordError = 103;
        private const int UserNotExistError = 104;

        #endregion Constant

        private readonly IUserService _userService;
        private readonly IAuthService _authService;
        private readonly IMaintenanceService _maintenanceService;
        private readonly IFormsAuthenticationService _formAuthenticationService;
        private readonly NAP.Core.Service.Interface.IUserService userService1;
        private readonly NAP.Core.Service.Interface.IGroupService groupService;
        private readonly NAP.Core.Service.Interface.ISecurityService securityService;
        private readonly ICurrentSession currentSession;

#pragma warning disable S107 // Methods should not have too many parameters

        public AuthorizationController(
            IMaintenanceService maintenanceService,
            IUserService userService,
            IAuthService authService,
            IFormsAuthenticationService formAuthenticationService,
            NAP.Core.Service.Interface.IUserService userService1,
            NAP.Core.Service.Interface.IGroupService groupService,
            NAP.Core.Service.Interface.ISecurityService securityService,
            ICurrentSession currentSession
            )
        {
            _maintenanceService = maintenanceService;
            _userService = userService;
            _authService = authService;
            _formAuthenticationService = formAuthenticationService;
            this.userService1 = userService1;
            this.groupService = groupService;
            this.securityService = securityService;
            this.currentSession = currentSession;
        }

        [CheckUMFilter]
        [AllowAnonymous]
        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult SignIn()
        {
            var requestHost = Request.Url.AbsoluteUri;

            var isInternalDomain = requestHost.Contains(AppSettingInstance.GetValue("InternalSubDomain"));

            if (!isInternalDomain)
            {
                return RedirectToAction("LocationRestriction", "Utility");
            }

            SetErrorForView(0, string.Empty);
            ViewBag.LogInToken = CreateToken();
            return View("~/Views/Desktop/Authorization/SignIn.cshtml");
        }

        [CheckUMFilter]
        [AllowAnonymous]
        [HandleAntiForgeryError]
        [HttpPost]
        [CustomValidateAntiForgery]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult SignIn(LoginMetalModel model)
        {
            if (string.IsNullOrEmpty(model.UserName))
            {
                SetErrorForView(InvalidUserNameError, ViewResources.AlertUserNameMsg);
            }
            else if (string.IsNullOrEmpty(model.PassWord))
            {
                SetErrorForView(InvalidPasswordError, ViewResources.AlertPasswordEmptyMsg);
            }
            else if (!IsValidCaptcha(model.Captcha))
            {
                SessionServiceInstance.CaptchaCode = CreateRandomCaptchaCode();
                SetErrorForView(InvalidCaptchaError, ViewResources.InvalidCaptchaMsg);
            }
            else
            {
                var user = userService1.Get(model.UserName.Trim());
                if (user != null)
                {
                    var password = Cryptography.CfsEnCode(model.PassWord);
                    if (password == user.Password)
                    {
                        if (!IsExistNapSite(user) || !IsExistNapGroup(user))
                        {
                            SetErrorForView(UserNotExistError, ViewResources.UserNotExist);
                        }
                        else
                        {
                            var onUserId = LoginCheckIn(user);
                            if(userService1.HasAnyPermission(user.Id, NapSettings.Settings.SiteId))
                            {
                                CreateSession(user, onUserId);
                                CreateAuthInfo(user, onUserId);

                                return RedirectToAction("Index", "Home");
                            }
                        }
                    }
                }

                //var requestUser = new User
                //{
                //    Username = model.UserName,
                //    Password = model.PassWord,
                //    Request = new Request { Ip = Request.UserHostAddress },
                //};

                //var resultInfo = _authService.ValidateUserForLrf(requestUser, model.LogInToken);

                //if (resultInfo.IsSuccessful)
                //{
                //    var user = resultInfo.ExtendedData;
                //    CreateSession(user);
                //    if (user.IsInRole(UserRole.Admin.ToString()))
                //    {
                //        return RedirectToAction("Index", "LicenseeList");
                //    }
                //    else
                //    {
                //      FormsAuthentication.RedirectFromLoginPage(user.Username, false);
                //    }
                //}
                //else
                //{
                //    SetErrorForView(resultInfo.Code, resultInfo.Message);
                //}
            }

            ViewBag.LogInToken = CreateToken();
            return View("~/Views/Desktop/Authorization/SignIn.cshtml");
        }

        private void CreateAuthInfo(NAP.Core.Models.User user, int onlineUserId)
        {
            var authInfo = new AuthInfo
            {
                UserId = user.Id,
                OnUserId = onlineUserId
            };

            var cookiePath = HttpContext.Request.ApplicationPath;
            var authTicket = new FormsAuthenticationTicket(
                 1,
                user.Username,
                DateTime.Now,
                DateTime.Now.AddMinutes(20000),
                false,
                authInfo.ToXml(),
                cookiePath);

            string encryptedTicket = FormsAuthentication.Encrypt(authTicket);
            var authCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encryptedTicket)
            {
                HttpOnly = true,
                Path = cookiePath,
                Name = FormsAuthentication.FormsCookieName
            };

            Response.Cookies.Add(authCookie);
        }

        private int LoginCheckIn(NAP.Core.Models.User user)
        {
            //var loginParameter = new LoginParameter
            //{
            //    UserId = user.Id,
            //    SiteId = NapSettings.Settings.SiteId,
            //    NetSessionId = Session.SessionID,
            //    Ip = HttpContext.Request.ServerVariables["REMOTE_ADDR"],
            //    LoginDate = DateTime.Now,
            //    BrowserName = CurrentContext.BrowserName,
            //    CountryCode = CurrentContext.CountryCode,
            //    Domain = CurrentContext.DomainName,
            //    Platform = CurrentContext.Platform
            //};

            var loginParam = new LoginParameter
            {
                UserId = user.Id,
                SiteId = NapSettings.Settings.SiteId,
                NetSessionId = HttpContext.Session.SessionID,
                Ip = HttpContext.Request.ServerVariables["REMOTE_ADDR"],
                LoginDate = DateTime.Now
            };

            var onlineUserId = securityService.Login(loginParam);

            currentSession.Level = userService1.GetUserLevel(user.Id, NapSettings.Settings.SiteId);
            currentSession.UserId = user.Id;
            currentSession.Username = user.Username;
            currentSession.OnUserId = onlineUserId;
            currentSession.SessionId = Session.SessionID;
            currentSession.MenuItemList = (userService1.GetMenuItem(user.Id, NapSettings.Settings.SiteId,
                NapSettings.Settings.Environment, true)).OrderBy(x => x.DisplayOrder).ToList();

            return onlineUserId;
        }

        private bool IsExistNapSite(NAP.Core.Models.User user)
        {
            return (userService1.GetSiteLevel(user.Id, NapSettings.Settings.Environment)).Any(s => s.Site.Id == NapSettings.Settings.SiteId && s.IsActive);
        }

        private bool IsExistNapGroup(NAP.Core.Models.User user)
        {
            if (user.Group != null)
            {
                var group = groupService.Get(user.Group.Id);

                if (group != null && !group.IsActive)
                {
                    return false;
                }
            }

            return true;
        }

        [HttpGet]
        [AllowAnonymous]
        [OutputCache(NoStore = true, Duration = 0, Location = OutputCacheLocation.None, VaryByParam = "*")]
        public ActionResult RecheckIn()
        {
            if (_maintenanceService.IsUnderMaintenance())
            {
                var time = _maintenanceService.GetUnderMaintenanceTime();
                var message = string.Format(ViewResources.UndermaintenanceMsg, time.From, time.To);
                return Json(RecheckInResult(ErrorType.UnderMaintenance, message), JsonRequestBehavior.AllowGet);
            }

            var userSession = SessionServiceInstance.UserSession;
            var currentLoginId = Request["onid"];
            if (!Request.IsAuthenticated || string.IsNullOrEmpty(currentLoginId) || userSession == null)
            {
                return Json(RecheckInResult(ErrorType.AccessDenied, ViewResources.InvalidRequestOrNotAuthorizedMsg), JsonRequestBehavior.AllowGet);
            }

            if (currentLoginId != userSession.OnUserId.ToString())
            {
                return Json(RecheckInResult(ErrorType.SessionOverride, ViewResources.SessionLoggedMsg), JsonRequestBehavior.AllowGet);
            }

            var isKickout = _userService.RecheckIn(userSession.OnUserId);

            var errorCode = ErrorType.Success;
            var errorMsg = string.Empty;
            if (isKickout)
            {
                errorCode = ErrorType.KickedOut;
                errorMsg = ViewResources.SessionLoggedMsg;
                _formAuthenticationService.SignOut();
            }

            return Json(RecheckInResult(errorCode, errorMsg), JsonRequestBehavior.AllowGet);
        }

        [AllowAnonymous]
        public FileContentResult Captcha()
        {
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetExpires(Cache.NoAbsoluteExpiration);
            Response.Cache.SetLastModifiedFromFileDependencies();

            var code = CreateRandomCaptchaCode();

            SessionServiceInstance.CaptchaCode = code;

            var img = CreateCaptcha(code);

            return File(img.FileContents, img.ContentType);
        }

        [HttpGet]
        [AllowAnonymous]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public string GetUserSalt(string userName)
        {
            var user = _userService.GetByUsername(userName, false);
            if (user != null)
            {
                return user.UserSalt;
            }

            return string.Empty;
        }

        [HttpGet]
        [AllowAnonymous]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult SignOut()
        {
            DoSignOut();
            return RedirectToAction("LocationRestriction", "Utility");
        }

        [HttpGet]
        [AllowAnonymous]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult InternalSignOut()
        {
            DoSignOut();
            return RedirectToAction("OneTokenRestriction", "Utility", new { Code = OneAuthorizationErrorCode.TokenWasExpired });
        }

        /// <summary>
        /// The changing password page.
        /// </summary>
        /// <returns>The changing password form.</returns>
        [HttpGet]
        public ActionResult ChangePassword()
        {
            ViewBag.PageData = new Dictionary<string, string>
            {
            { "alertInputOldPwd", ViewResources.AlertInputOldPwdMsg },
            { "alertPasswordEmpty", ViewResources.AlertPasswordEmptyMsg },
            { "alertErrorConfirm", ViewResources.PasswordConfirmErrorMsg },
            { "alertPasswordRequire", ViewResources.PasswordNoteMsg },
            { "alertPasswordSucc", ViewResources.PasswordChangedMsg }
            };
            return View("~/Views/Authorization/ChangePass.cshtml");
        }

        [HttpPost]
        [CustomValidateAntiForgery]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult ChangePassword(string oldPassword, string newPassword)
        {
            if (string.IsNullOrEmpty(oldPassword) || !Util.IsPasswordValid(newPassword))
            {
                return Json(new
                {
                    errCode = ErrorType.Unknown,
                    errMsg = ViewResources.PasswordNoteMsg
                });
            }

            var userSession = SessionServiceInstance.UserSession;
            if (userSession.IsInternal)
            {
                return Json(new
                {
                    errCode = ErrorType.AccessDenied,
                    errMsg = ViewResources.AccessDeniedMsg
                });
            }
            else
            {
                var result = _userService.ChangePassword(
                    userSession.UserName,
                    oldPassword,
                    newPassword,
                    Request.UserHostAddress);
                return Json(new
                {
                    errCode = result.Code,
                    errMsg = result.Message
                });
            }
        }

        private static dynamic RecheckInResult(ErrorType type, string msg)
        {
            return new
            {
                ErrCode = (int)type,
                ErrMsg = msg
            };
        }

        private static string CreateToken()
        {
            return Guid.NewGuid().ToString("N", CultureInfo.CurrentCulture);
        }

        private static string CreateRandomCaptchaCode()
        {
            const int CapchaLength = 4;
            const int MaxValueOfCharacter = 9;
            var randomNumber = new StringBuilder();
            for (var i = 0; i < CapchaLength; i++)
            {
                randomNumber.Append(RandomNumber.GenerateRandomInt32(0, MaxValueOfCharacter));
            }

            return randomNumber.ToString();
        }

        private bool IsValidCaptcha(string inputCaptcha)
        {
            var isAllowAutomationCaptchaCode = AppSettingInstance.GetValue("AllowAutomationCaptchaCode") == "1";
            if (isAllowAutomationCaptchaCode ||
                inputCaptcha == SessionServiceInstance.CaptchaCode ||
                IsValidSecretCaptcha(inputCaptcha))
            {
                return true;
            }

            return false;
        }

        private bool IsValidSecretCaptcha(string inputCaptcha)
        {
            var secretCaptcha = AppSettingInstance.GetValue("SecretCaptcha");
            return !string.IsNullOrWhiteSpace(secretCaptcha) && inputCaptcha == secretCaptcha &&
                 Regex.IsMatch(Request.UserHostAddress, AppSettingInstance.GetValue("CompanyIP"));
        }

        private void CreateSession(User user, int onUserId)
        {
            currentSession.UserId = user.Id;
            currentSession.Username = user.Username;
            currentSession.OnUserId = onUserId;

            SessionServiceInstance.CreateNewSession(user.Id, onUserId, user.Username);

            _formAuthenticationService.SetAuthCookie(user.Username, false);
        }

        private void DoSignOut()
        {
            var userSession = SessionServiceInstance.UserSession;
            if (userSession != null)
            {
                _authService.Logout(userSession.OnUserId);
            }

            Session.Clear();
            ClearCookies();
            _formAuthenticationService.SignOut();
        }

        private void SetErrorForView(int errorCode, string errorMsg)
        {
            ViewBag.errCode = errorCode;
            ViewBag.errMsg = errorMsg;
        }

        private void ClearCookies()
        {
            var cache = Response.Cache;
            cache.SetNoStore();
            cache.SetExpires(DateTime.Now.AddMinutes(-1));
            cache.SetCacheability(HttpCacheability.NoCache);
            var cookies = Request.Cookies.AllKeys;
            foreach (string cookie in cookies)
            {
                var item = new HttpCookie(cookie)
                {
                    Expires = DateTime.Now.AddDays(-1),
                    HttpOnly = true
                };
                Response.Cookies.Add(item);
            }
        }

        private FileContentResult CreateCaptcha(string code, int height = 25)
        {
            const int CharacterWidth = 12;
            const int MinPointX = 2;

            var brushColor = Color.Black;
            var backgroundColor = Color.LightGray;

            var iwidth = (code.Length * CharacterWidth) + 10;
            using (var mem = new MemoryStream())
            using (var bmp = new Bitmap(iwidth, height))
            using (var gfx = Graphics.FromImage((Image)bmp))
            {
                var random = new Random();

                var fonts = new[] { "Tahoma", "Arial" };

                var f = new Font(fonts[random.Next(0, fonts.Length - 1)], 11, FontStyle.Bold);
                Brush b = new SolidBrush(brushColor);
                gfx.Clear(backgroundColor);

                gfx.DrawString(code, f, b, random.Next(MinPointX, CharacterWidth), random.Next(-1, 1));

                const int NoisePoint = 50;

                for (int i = 0; i < NoisePoint; i++)
                {
                    int x = random.Next(iwidth);
                    int y = random.Next(height);
                    bmp.SetPixel(x, y, Color.FromArgb(random.Next()));
                }

                bmp.Save(mem, ImageFormat.Png);
                return this.File(mem.GetBuffer(), "image/png");
            }
        }
    }
}