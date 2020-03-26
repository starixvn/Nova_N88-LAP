namespace Fanex.Athena.Controllers
{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using System.Web.Mvc;
    using System.Xml.Linq;
    using Fanex.Athena.Model.UserManagement.Criteria;
    using Fanex.Athena.Model.UserManagement.Enum;
    using Fanex.Athena.Model.UserManagement.Model;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.UserManagement.Service;
    using Fanex.Athena.Web.HtmlExtension;
    using MvcPaging;

    public class LogController : CultureBaseController
    {
        private readonly UserLogService userLogService;
        private readonly UserService userService;

        public LogController()
        {
            userLogService = new UserLogService();
            userService = new UserService();
        }

        [HttpGet]
        public ActionResult LogUserLogin(
            int page = 1,
            int size = 20,
            string name = null,
            DateTime? from = null,
            DateTime? to = null)
        {
            var criteria = new GetAllLogUserLoginCriteria
            {
                PageIndex = page,
                PageSize = size,
                Name = name ?? string.Empty,
                From = from ?? DateTime.Now.Date,
                To = to ?? DateTime.Now.Date,
                SiteId = n88Settings.SiteId,
                TotalRows = 0
            };
            ViewBag.Criteria = criteria;

            criteria.To = criteria.To.Date.AddDays(1).AddMilliseconds(-1);
            var listLog = userLogService.GetAllLoginLog(criteria);

            return View("~/Views/Log/UserLoginLog.cshtml", listLog.ToPagedList(criteria.PageIndex - 1, criteria.PageSize, criteria.TotalRows));
        }

        [HttpGet]
        public ActionResult LogExecSp(
            int page = 1,
            int size = 20,
            string name = null,
            string username = null,
            DateTime? from = null,
            DateTime? to = null,
            int filterBy = 1)
        {
            var criteria = new GetAllLogCriteria
            {
                PageIndex = page,
                PageSize = size,
                Name = name ?? string.Empty,
                Username = username,
                From = from ?? DateTime.Now.Date,
                To = to ?? DateTime.Now.AddDays(1).Date,
                FilterType = filterBy,
                TotalRows = 0
            };

            ViewBag.Criteria = criteria;
            var listLog = userLogService.GetExecSPLog(criteria);

            return View("~/Views/Log/ExecSPLog.cshtml", listLog.ToPagedList(criteria.PageIndex - 1, criteria.PageSize, criteria.TotalRows));
        }

        [HttpPost]
        public ActionResult LogExecSp(GetAllLogCriteria criteria)
        {
            return RedirectToAction(
                 "LogExecSp",
                 new
                 {
                     id = criteria.PageIndex,
                     size = criteria.PageSize,
                     q = criteria.Name,
                     username = criteria.Username,
                     from = criteria.From.ToString("MMM dd,yyyy"),
                     to = criteria.To.ToString("MMM dd,yyyy"),
                     filterBy = criteria.FilterType
                 });
        }

        [HttpPost]
        public ActionResult GetLogInsertDetail(int id)
        {
            if (Request.IsAjaxRequest())
            {
                var log = userLogService.GetById(id);

                return View(log);
            }

            return View(new LogExecSp());
        }

        public PartialViewResult N88UserInsert(LogExecSp log)
        {
            if (log.ActionId == (int)LogAction.N88_User_Insert)
            {
                XElement elementNew = XElement.Parse(log.Data);

                var listLogData = new List<LogData>
                {
                    new LogData
                    {
                        FieldName = ViewResources.Username,
                        NewValue = elementNew.Attribute("Username").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Group_Name,
                        NewValue = elementNew.Attribute("GroupName").Value
                    }
                };

                ViewBag.LogData = listLogData;
            }

            return PartialView("~/Views/Log/_N88LogInsert.cshtml");
        }

        public PartialViewResult N88UpdateSite(LogExecSp log)
        {
            XElement newElement = XElement.Parse(log.Data);
            XElement oldElement = XElement.Parse(log.OldData ?? "<ROOT/>");

            if (oldElement.Attribute("UserId") != null)
            {
                var oldSite = new SiteLevel
                {
                    Site = new Site
                    {
                        Id = Convert.ToByte(oldElement.Attribute("SiteId").Value),
                        Name = Convert.ToString(oldElement.Attribute("SiteName").Value)
                    },
                    Level = Convert.ToInt32(oldElement.Attribute("Level").Value),
                    IsActive = oldElement.Attribute("IsActive").Value == "1",
                    IsNeverExpired = oldElement.Attribute("IsNeverExpired").Value == "1"
                };

                DateTime expiredDate;
                DateTime.TryParse(oldElement.Attribute("ExpiredDate").Value, out expiredDate);
                oldSite.ExpiredDate = expiredDate;

                ViewBag.oldSite = oldSite;
            }

            if (newElement.Attribute("UserId") != null)
            {
                var newSite = new SiteLevel
                {
                    Site = new Site
                    {
                        Id = Convert.ToByte(newElement.Attribute("SiteId").Value),
                        Name = Convert.ToString(newElement.Attribute("SiteName").Value)
                    },
                    Level = Convert.ToInt32(newElement.Attribute("Level").Value),
                    IsActive = newElement.Attribute("IsActive").Value == "1",
                    IsNeverExpired = newElement.Attribute("IsNeverExpired").Value == "1"
                };

                DateTime expiredDate;
                DateTime.TryParse(newElement.Attribute("ExpiredDate").Value, out expiredDate);
                newSite.ExpiredDate = expiredDate;

                ViewBag.newSite = newSite;
            }

            return PartialView("~/Views/Log/_N88_Update_Site.cshtml");
        }

        public PartialViewResult N88GroupInsert(LogExecSp log)
        {
            XElement element = XElement.Parse(log.Data);

            if (log.ActionId == (int)LogAction.N88_Group_Insert)
            {
                var listLogData = new List<LogData>
                {
                    new LogData
                    {
                        FieldName = ViewResources.Group_Name,
                        NewValue = element.Attribute("GroupName").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Description,
                        NewValue = element.Attribute("Description").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Active,
                        NewValue = element.Attribute("IsActive").Value == "1" ? "true" : "false"
                    }
                };

                ViewBag.LogData = listLogData;
            }

            return PartialView("~/Views/Log/_N88LogInsert.cshtml");
        }

        public PartialViewResult N88GroupUpdate(LogExecSp log)
        {
            XElement elementNew = XElement.Parse(log.Data);
            XElement elementOld = XElement.Parse(log.OldData ?? "<ROOT/>");

            if (log.ActionId == (int)LogAction.N88_Group_Update)
            {
                var listLogData = new List<LogData>
                {
                    new LogData
                    {
                        FieldName = ViewResources.Group_Name,
                        OldValue = elementOld.Attribute("GroupName").Value,
                        NewValue = elementNew.Attribute("GroupName").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Description,
                        OldValue = elementOld.Attribute("Description").Value,
                        NewValue = elementNew.Attribute("Description").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Active,
                        OldValue = elementOld.Attribute("IsActive").Value == "1" ? "true" : "false",
                        NewValue = elementNew.Attribute("IsActive").Value == "1" ? "true" : "false"
                    }
                };

                ViewBag.LogData = listLogData;
            }

            return PartialView("~/Views/Log/_N88LogUpdate.cshtml");
        }

        public PartialViewResult N88GroupUpdateStatus(LogExecSp log)
        {
            XElement elementNew = XElement.Parse(log.Data);
            XElement elementOld = XElement.Parse(log.OldData ?? "<ROOT/>");

            if (log.ActionId == (int)LogAction.N88_Group_UpdateStatus)
            {
                var listLogData = new List<LogData>
                {
                    new LogData
                    {
                        FieldName = ViewResources.Status,
                        OldValue = elementOld.Attribute("IsActive").Value == "1" ? "Active" : "Unactive",
                        NewValue = elementNew.Attribute("IsActive").Value == "1" ? "Active" : "Unactive"
                    }
                };

                ViewBag.LogData = listLogData;
            }

            return PartialView("~/Views/Log/_N88LogUpdate.cshtml");
        }

        public PartialViewResult N88UserUpdate(LogExecSp log)
        {
            XElement elementNew = XElement.Parse(log.Data ?? "<ROOT/>");
            XElement elementOld = XElement.Parse(log.OldData ?? "<ROOT/>");

            if (log.ActionId == (int)LogAction.N88_User_Update)
            {
                var listLogData = new List<LogData>
                {
                    new LogData
                    {
                        FieldName = ViewResources.Group_Name,
                        OldValue = elementOld.Attribute("GroupName").Value,
                        NewValue = elementNew.Attribute("GroupName").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.First_Name,
                        OldValue = elementOld.Attribute("FirstName").Value,
                        NewValue = elementNew.Attribute("FirstName").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Last_Name,
                        OldValue = elementOld.Attribute("LastName").Value,
                        NewValue = elementNew.Attribute("LastName").Value
                    },

                    new LogData
                    {
                        FieldName = ViewResources.Email,
                        OldValue = elementOld.Attribute("Email").Value,
                        NewValue = elementNew.Attribute("Email").Value
                    }
                };

                ViewBag.LogData = listLogData;
            }

            return PartialView("~/Views/Log/_N88LogUpdate.cshtml");
        }

        public PartialViewResult N88AssignPermission(LogExecSp log)
        {
            XElement elementNew = XElement.Parse(log.Data);
            XElement elementOld = XElement.Parse(log.OldData ?? "<ROOT/>");

            // N88_Group_AssignFunction || N88_User_AssignFunction
            if (log.ActionId == (int)LogAction.N88_Group_AssignFunction
                || log.ActionId == (int)LogAction.N88_User_AssignFunction)
            {
                // Get function list
                int siteId = Convert.ToInt32(elementNew.Attribute("SiteId").Value);

                ViewBag.FunctionList = userService.GetBySiteInHierarchy(siteId, n88Settings.Environment, true);

                // Old data

                if (elementOld.Attribute("Value") != null)
                {
                    var strFunctionPolicy = elementOld.Attribute("Value").Value.DecodeXMLValue();

                    if (!string.IsNullOrWhiteSpace(strFunctionPolicy))
                    {
                        ViewBag.ListOldData = GetOldFunctionPolicyList(strFunctionPolicy);
                    }
                }

                // New data
                if (elementNew.Attribute("Value") != null)
                {
                    var strFunctionPolicy = elementNew.Attribute("Value").Value.DecodeXMLValue();

                    if (!string.IsNullOrWhiteSpace(strFunctionPolicy))
                    {
                        ViewBag.ListNewData = GetNewFunctionPolicyList(strFunctionPolicy);
                    }
                }

                ViewBag.SiteName = SessionServiceInstance.LicenseeSession.LicenseeName;
            }

            return PartialView("~/Views/Log/_N88_Assign_Permission.cshtml");
        }

        

        private List<FunctionPolicy> GetOldFunctionPolicyList(string strFunctionPolicy)
        {
            var listFunctionPolicyOld = new List<FunctionPolicy>();
            var documentFunctionPolicy = XDocument.Parse(strFunctionPolicy);
            IEnumerable<XElement> functionPolicy = documentFunctionPolicy.Descendants("ITEM");

            foreach (XElement item in functionPolicy)
            {
                var objFunctionPolicy = new FunctionPolicy
                {
                    Function = new AccFunction
                    {
                        Id = Convert.ToInt16(item.Attribute("FunctionId").Value)
                    },
                    Policy = Convert.ToInt32(item.Attribute("Policy").Value)
                };

                listFunctionPolicyOld.Add(objFunctionPolicy);
            }

            return listFunctionPolicyOld;
        }

        private static Hashtable GetNewFunctionPolicyList(string strFunctionPolicy)
        {
            var hashNewPolicy = new Hashtable();

            XDocument documentFunctionPolicy = XDocument.Parse(strFunctionPolicy);
            IEnumerable<XElement> functionPolicy = documentFunctionPolicy.Descendants("ITEM");

            foreach (XElement item in functionPolicy)
            {
                short id = Convert.ToInt16(item.Attribute("FunctionId").Value);
                int policy = Convert.ToInt32(item.Attribute("Policy").Value);

                if (!hashNewPolicy.Contains(id))
                {
                    hashNewPolicy.Add(id, policy);
                }
            }

            return hashNewPolicy;
        }
    }
}