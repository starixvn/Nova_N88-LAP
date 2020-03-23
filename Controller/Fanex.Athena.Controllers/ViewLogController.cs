using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace Fanex.Athena.Controllers
{
    public class ViewLogController : CultureBaseController
    {
        public ActionResult LogExecSp()
        {
            return View();
        }
    }
}
