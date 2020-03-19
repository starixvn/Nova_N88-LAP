namespace Fanex.Athena.Controllers
{
    using System;
    using System.Web.Mvc;
    using Fanex.Athena.Model.Auth;
    using Fanex.Athena.Service.Core.Users.Interfaces;

    public class VerifyController : CultureBaseController
    {
        private readonly IAuthService _authService;

        public VerifyController(IAuthService authService)
        {
            _authService = authService;
        }

        private string GetToken(string vendorID, string actionLink)
        {
            var userSession = SessionServiceInstance.UserSession;

            var oTokenInfo = new TokenInfo();
            oTokenInfo.UserID = userSession.UserId;
            oTokenInfo.VendorID = vendorID;
            oTokenInfo.ActionLink = actionLink;
            oTokenInfo.Language = userSession.Language;
            oTokenInfo.SiteName = userSession.VendorID;

            oTokenInfo.UserName = userSession.UserName;
            oTokenInfo.IsAdminstrator = userSession.IsSuperAdmin;
            oTokenInfo.WhiteLabelID = userSession.WhiteLabelID;

            oTokenInfo.Currency = userSession.CurrencyList;

            oTokenInfo.Permissions = userSession.FunctionList;

            return _authService.ApplyToken(oTokenInfo);
        }

        [HttpGet]
        [OutputCache(NoStore = true, Duration = 0)]
        public ActionResult ApplyApiToken(string vendorID, string actionLink)
        {
            var token = GetToken(vendorID, actionLink);
            var appUrl = Request.Url.GetLeftPart(UriPartial.Authority) + Url.Content("~");

            return Json(new { Token = token, ApiUrl = appUrl }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ApplyToken(string vendorID, string actionLink)
        {
            var appUrl = Request.Url.GetLeftPart(UriPartial.Authority) + Url.Content("~");

            return Redirect(appUrl + actionLink);
        }
    }
}