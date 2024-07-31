namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.MetaModel.Product;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Service.StatelessCore.Interfaces;

    using Model.Core.DTO.Common;
    using ONEbook.UM.AspNetMVC.Filters;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;
    using System.Web.SessionState;

    [SessionState(SessionStateBehavior.ReadOnly)]
    [CheckUMFilter]
    public class ReportBaseController : CultureBaseController
    {
        public const int PageSizeExcel = int.MaxValue - 1000;

        public IProductService ProductServiceInstance { get; set; }

        protected static IList<ProductOption> ToProductOptions(IEnumerable<Product> productList)
        {
            return productList.Select(i => new ProductOption
            {
                Code = i.ProductCode,
                Name = i.ProductName,
                Status = true
            }).ToList();
        }

        protected void AssignSpecialReportDataPermission(SpecialReportDataViewModel viewModel)
        {
            var userSession = SessionServiceInstance.UserSession;

            viewModel.IsAllowedTurnover = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_Turnover);
            viewModel.IsAllowedValidTurnover = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_ValidTurnover);
            viewModel.IsAllowedGGR = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_GGR);
            viewModel.IsAllowedPlayerWinLoss = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_PlayerWinLoss);
            viewModel.IsAllowedTotalDepositAmount = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_TotalDepositAmount);
            viewModel.IsAllowedTotalWithdrawalAmount = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_TotalWithdrawalAmount);
            viewModel.IsAllowedMargin = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_Margin);
            viewModel.IsAllowedAvgBetAmount = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.SpecialReportData_AvgBetAmount);
        }
    }
}