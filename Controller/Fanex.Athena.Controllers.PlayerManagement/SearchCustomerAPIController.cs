namespace Fanex.Athena.Controllers.PlayerManagement
{
    using System.Threading.Tasks;
    using System.Web.Mvc;
    using System.Web.SessionState;
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Service.PlayerManagement.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Utility;
    using Fanex.Athena.Web.ActionFilter;
    using ONEbook.UM.Filters;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    [FunctionAuthorization(PermissionKeys.BetHistory, PermissionKeys.ReportCustomerWinLoss)]
    public class SearchCustomerAPIController : CultureBaseController
    {
        private readonly ISearchCustomerService _searchCustomerService;

        public SearchCustomerAPIController(ISearchCustomerService searchCustomerService)
        {
            _searchCustomerService = searchCustomerService;
        }

        [AjaxRequest]
        [HttpGet]
        public Task<JsonResult> SearchCustomer(string query)
        {
            return Search(query, false);
        }

        [AjaxRequest]
        [HttpGet]
        public Task<JsonResult> SearchActiveAndDormantCustomer(string query)
        {
            return Search(query, true);
        }

        private async Task<JsonResult> Search(string query, bool isIncludeDormant)
        {
            if (string.IsNullOrWhiteSpace(query))
            {
                return null;
            }

            var userName = query.Trim();
            var userSession = SessionServiceInstance.UserSession;
            var customerNames = await _searchCustomerService.SearchCustomers(userSession.UserId, userName,
                AuthParameterHelper.GenerateAgentListXml(userSession.CurrencyAgentList), isIncludeDormant);

            var searchResult = new
            {
                data = new[] { string.Empty },
                query = userName,
                suggestions = customerNames
            };

            return Json(searchResult, JsonRequestBehavior.AllowGet);
        }
    }
}