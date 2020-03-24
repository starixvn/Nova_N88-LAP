namespace Fanex.Athena.Controllers
{
    using System;
    using System.Web.Mvc;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Service.UserManagement.Service;
    using MvcPaging;

    public class LogController : CultureBaseController
    {
        private readonly UserLogService userLogService;

        public LogController()
        {
            userLogService = new UserLogService();
        }

        [HttpGet]
        public ActionResult LogUserLogin(
            int id = 1,
            int size = 20,
            string q = null,
            DateTime? from = null,
            DateTime? to = null)
        {
            var criteria = new GetAllLogUserLoginCriteria
            {
                PageIndex = id,
                PageSize = size,
                Name = q ?? string.Empty,
                From = from ?? DateTime.Now,
                To = to ?? DateTime.Now.AddDays(1),
                SiteId = n88Settings.SiteId,
                TotalRows = 0
            };

            ViewBag.Criteria = criteria;
            var listLog = userLogService.GetAllLoginLog(criteria);

            return View("~/Views/Log/UserLoginLog.cshtml", listLog.ToPagedList(criteria.PageIndex - 1, criteria.PageSize, criteria.TotalRows));
        }

        [HttpPost]
        public ActionResult LogUserLogin(GetAllLogUserLoginCriteria criteria)
        {
            return RedirectToAction(
                "LogUserLogin",
                new
                {
                    id = criteria.PageIndex,
                    size = criteria.PageSize,
                    q = criteria.Name,
                    from = criteria.From.ToString("MMM dd,yyyy"),
                    to = criteria.To.ToString("MMM dd,yyyy"),
                });
        }
    }
}