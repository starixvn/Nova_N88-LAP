namespace Fanex.Athena.Controllers
{
    using System;
    using System.Collections.Generic;
    using System.Drawing;
    using System.Drawing.Imaging;
    using System.Globalization;
    using System.IO;
    using System.Linq;
    using System.Security.Cryptography;
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
    using Fanex.Athena.Model.Auth.Enum;
    using Fanex.Athena.Model.Auth.MetaModel;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.Common;
    using Fanex.N88.Core.Configuration;
    using Fanex.N88.Core.Models;
    using Fanex.N88.Core.Models.ParameterObject;
    using Fanex.N88.Core.Service.Interface;
    using Fanex.N88.Core.Web.Auth;
    using ONEbook.UM.Filters;
    using ONEbook.UM.Services;
    using Resources;

    public class AuthorizationController : CultureBaseController
    {
        private const int InvalidCaptchaError = 101;
        private const int InvalidUserNameError = 102;
        private const int InvalidPasswordError = 103;
        private const int UserNotExistError = 104;
        private const int UserHasNoPermissionError = 105;

        private const int SSOExpiredTimeInSeconds = 30;

        private readonly IMaintenanceService maintenanceService;
        private readonly IFormsAuthenticationService formAuthenticationService;
        private readonly IUserService userService;
        private readonly IGroupService groupService;
        private readonly ISecurityService securityService;
        private readonly ISiteService siteService;
        private readonly HashAlgorithm _hashAlgorithm;

        public AuthorizationController(
            IMaintenanceService maintenanceService,
            IFormsAuthenticationService formAuthenticationService,
            IUserService userService,
            IGroupService groupService,
            ISecurityService securityService,
            ISiteService siteService)
        {
            this.maintenanceService = maintenanceService;
            this.formAuthenticationService = formAuthenticationService;
            this.userService = userService;
            this.groupService = groupService;
            this.securityService = securityService;
            this.siteService = siteService;
            _hashAlgorithm = new SHA256Managed();
        }

        [CheckUMFilter]
        [AllowAnonymous]
        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0, VaryByParam = "*")]
        public ActionResult SignIn()
        {
            var requestHost = Request.Url.AbsoluteUri;

            var isInternalDomain = requestHost.Contains(AppSettingInstance.GetValue("InternalSubDomain"));

            var currentLicenseeId = AppSettingInstance.LicenseeId;

            if (!isInternalDomain)
            {
                return RedirectToAction("LocationRestriction", "Utility");
            }

            SetErrorForView(0, string.Empty);
            ViewBag.LogInToken = CreateToken();
            ViewBag.LogoLoginUrl = $"/www/assets/images/logo-login-{currentLicenseeId}.svg";
            ViewBag.Title = $"{siteNameList[currentLicenseeId]} Admin Site";
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
                var user = userService.Get(model.UserName.Trim(), n88Settings.SiteId);
                if (user != null)
                {
                    var crypPassword = GetHash(user.Password + model.LogInToken);

                    if (model.PassWord == crypPassword)
                    {
                        if (!IsExistNapSite(user) || !IsExistNapGroup(user))
                        {
                            SetErrorForView(UserNotExistError, ViewResources.UserNotExist);
                        }
                        else
                        {
                            var onUserId = LoginCheckIn(user);

                            if (HasAnyPermission(user.Id))
                            {
                                CreateSession(user, onUserId);
                                CreateAuthInfo(user, onUserId);

                                return RedirectToAction("Index", "Home");
                            }
                            else
                            {
                                SetErrorForView(UserHasNoPermissionError, ViewResources.UserHasNoPermissionError);
                            }
                        }
                    }
                    else
                    {
                        SetErrorForView(InvalidPasswordError, ViewResources.WrongUserNamePassword);
                    }
                }
                else
                {
                    SetErrorForView(InvalidUserNameError, ViewResources.UsernameNotExisted);
                }
            }

            ViewBag.LogInToken = CreateToken();
            return View("~/Views/Desktop/Authorization/SignIn.cshtml");
        }

        [Route("userlogin/sso")]
        public ActionResult SSO(SsoLogin ssoLogin)
        {
            var isValidTime = IsValidateTime(ssoLogin.Time);
            if (isValidTime)
            {
                var userId = int.Parse(Cryptography.CfsDeCrypt(ssoLogin.UserId.Replace(" ", "+")));
                var onUserid = int.Parse(Cryptography.CfsDeCrypt(ssoLogin.OnUserId.Replace(" ", "+")));

                var newOnUserId = SSOLogin(userId, onUserid);

                if (newOnUserId > 0)
                {
                    var user = userService.Get(userId);
                    if (user != null)
                    {
                        CreateSession(user, newOnUserId);
                        CreateAuthInfo(user, newOnUserId);

                        return RedirectToAction("Index", "Home");
                    }
                }
            }

            return new RedirectResult("~/Auth/Index");
        }

        private int SSOLogin(int userId, int onuserId)
        {
            var ssoLoginParam = new SSOLoginParameter
            {
                UserId = userId,
                SiteId =  n88Settings.SiteId,
                Domain = CurrentContext.DomainName,
                CheckOnUserId = onuserId,
                IP = CurrentContext.IP,
                BrowserName = CurrentContext.BrowserName,
                CountryCode = CurrentContext.CountryCode,
                NetSessionId = Session.SessionID,
                Platform = CurrentContext.Platform,
                LoginDate = DateTime.Now
            };
            return securityService.SSOLogin(ssoLoginParam);
        }

        private bool IsValidateTime(string time)
        {
            var cfsDescryptTime = Data.Cryptography.DecryptPassword(time.Replace(" ", "+"));
            var serverTime = securityService.GetTime();
            var serverDateTime = DateTime.Parse(serverTime);
            var expiration = serverDateTime - DateTime.Parse(cfsDescryptTime);

            return expiration.TotalSeconds <= SSOExpiredTimeInSeconds;
        }

        private void CreateAuthInfo(User user, int onlineUserId)
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

        private int LoginCheckIn(User user)
        {
            var loginParam = new LoginParameter
            {
                UserId = user.Id,
                SiteId = n88Settings.SiteId,
                Domain = CurrentContext.DomainName,
                Ip = CurrentContext.IP,
                BrowserName = CurrentContext.BrowserName,
                CountryCode = CurrentContext.CountryCode,
                NetSessionId = Session.SessionID,
                Platform = CurrentContext.Platform,
                LoginDate = DateTime.Now
            };

            var onlineUserId = securityService.Login(loginParam);

            return onlineUserId;
        }

        private bool IsExistNapSite(User user)
        {
            return (userService.GetSiteLevel(user.Id, N88Settings.Settings.Environment)).Any(s => s.Site.Id == n88Settings.SiteId && s.IsActive);
        }

        private bool IsExistNapGroup(User user)
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

        private bool HasAnyPermission(int userId)
        {
            var functions = userService.GetPermissions(userId, N88Settings.Settings.SiteId, string.Empty, N88Settings.Settings.Environment).ToList();
            return functions.Any(function => function.Policy > (int)Policy.None);
        }

        [HttpGet]
        [AllowAnonymous]
        [OutputCache(NoStore = true, Duration = 0, Location = OutputCacheLocation.None, VaryByParam = "*")]
        public ActionResult RecheckIn()
        {
            var errorCode = ErrorType.Success;
            var errorMsg = string.Empty;

            if (n88Settings.EnableReCheckIn)
            {
                if (!siteService.IsActivated(n88Settings.SiteId))
                {
                    errorCode = ErrorType.AccessDenied;
                    errorMsg = ViewResources.InvalidRequestOrNotAuthorizedMsg;
                }
                else if (maintenanceService.IsUnderMaintenance())
                {
                    var time = maintenanceService.GetUnderMaintenanceTime();
                    errorMsg = string.Format(ViewResources.UndermaintenanceMsg, time.From, time.To);
                    errorCode = ErrorType.UnderMaintenance;
                }
                else
                {
                    var userSession = SessionServiceInstance.UserSession;
                    var currentLoginId = Request["onid"];
                    if (userSession == null || !Request.IsAuthenticated || string.IsNullOrEmpty(currentLoginId))
                    {
                        errorCode = ErrorType.AccessDenied;
                        errorMsg = ViewResources.InvalidRequestOrNotAuthorizedMsg;
                    }
                    else if (currentLoginId != userSession.OnUserId.ToString())
                    {
                        errorCode = ErrorType.SessionOverride;
                        errorMsg = ViewResources.SessionLoggedMsg;
                    }
                    else if (securityService.ReCheckIn(userSession.OnUserId, n88Settings.SiteId) > 0)
                    {
                        errorCode = ErrorType.KickedOut;
                        errorMsg = ViewResources.SessionLoggedMsg;
                        formAuthenticationService.SignOut();
                    }
                }
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

            var user = userService.Get(SessionServiceInstance.UserSession.UserId);
            string hashOldPassword = Cryptography.CfsEnCode(oldPassword);

            if (string.Equals(hashOldPassword, user.Password, StringComparison.CurrentCultureIgnoreCase))
            {
                string hashNewPassword = Cryptography.CfsEnCode(newPassword);
                var result = securityService.UpdatePassword(n88Settings.SiteId, SessionServiceInstance.UserSession.UserId, hashNewPassword);
                if (result)
                {
                    return Json(new
                    {
                        errCode = 0,
                        errMsg = string.Empty
                    });
                }
            }

            return Json(new
            {
                errCode = ErrorType.Unknown,
                errMsg = ViewResources.PasswordNoteMsg
            });
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
            SessionServiceInstance.CreateNewSession(user.Id, onUserId, user.Username);

            formAuthenticationService.SetAuthCookie(user.Username, false);
        }

        private void DoSignOut()
        {
            var userSession = SessionServiceInstance.UserSession;
            if (userSession != null)
            {
                securityService.Logout(userSession.OnUserId);
            }

            Session.Clear();
            ClearCookies();
            formAuthenticationService.SignOut();
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

        private string GetHash(string input)
        {
            var encrypted = string.Empty;

            if (!string.IsNullOrWhiteSpace(input))
            {
                var hashData = _hashAlgorithm.ComputeHash(Encoding.UTF8.GetBytes(input));

                encrypted = BitConverter.ToString(hashData).Replace("-", string.Empty).ToLowerInvariant();
            }

            return encrypted;
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