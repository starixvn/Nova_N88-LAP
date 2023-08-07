namespace Fanex.Athena.Controllers.Report
{
    using Fanex.Athena.Model.Auth.DataDomain;
    using Fanex.Athena.Model.Core.DataDomain;
    using Fanex.Athena.Model.Report.MetaModel;
    using Fanex.Athena.Model.Report.ViewModel;
    using Fanex.Athena.Resources;
    using Fanex.Athena.Service.Core.Common.Interfaces;
    using Fanex.Athena.Service.StatelessCore.Interfaces;
    using Fanex.Athena.Web.ActionFilter;
    using Fanex.NVC.Authentication.Infrastructure;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [FunctionAuthorization(PermissionKeys.ReportWinLoss)]
    [RequireCurrencyPermission]
    public class WinLossReportController : ReportBaseController
    {
        private readonly IReportSettingService _reportSettingService;
        private readonly ITpService _tpService;
        private const int TimeZone = 8;
        private const int Top = 1;
        private const int Bottom = 0;
        private const int TO = 1;
        private const int GGR = 2;
        private const int BetCount = 3;
        private const int AvgBetAmount = 4;
        private const string PlayerListValueFormat = "{0}_{1}_{2}";

        public WinLossReportController(IReportSettingService reportSettingService, ITpService tpService)
        {
            _reportSettingService = reportSettingService;
            _tpService = tpService;
        }

        [HttpGet]
        public ViewResult Index()
        {
            var viewModel = CreateViewModel();
            return View("~/Views/Desktop/Report/WinLoss/Main.cshtml", viewModel);
        }

        [HttpGet]
        public ViewResult NonSportsBetList(WinLossNonSportsBetListMetaModel metaModel)
        {
            BindBetListMetaModel(metaModel);
            return View("~/Views/Desktop/Report/WinLoss/NonSportsBetList.cshtml", metaModel);
        }

        private void BindBetListMetaModel(WinLossNonSportsBetListMetaModel metaModel)
        {
            var tpProducts = _tpService.GetListTpProduct();
            metaModel.ProductName = tpProducts.FirstOrDefault(_ => _.Id.Equals(metaModel.ProductId.ToString()))?.Name;
        }

        private WinLossViewModel CreateViewModel()
        {
            var reportSetting = _reportSettingService.GetSetting(PermissionKeys.ReportWinLoss, LicenseeName);
            var tpProducts = _tpService.GetListTpProduct();
            var userSession = SessionServiceInstance.UserSession;
            int.TryParse(userSession.SettingList?.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_SinglePlayer)?.SettingValue, out int wlAnalysisSinglePlayer);

            var vm = new WinLossViewModel
            {
                BaseCurrency = DefaultBaseCurrency,
                TpProducts = tpProducts,
                OwnBrand = BrandList.First(_ => _.Id == LicenseeId),
                Brands = BrandList,
                MaxDate = reportSetting.MaxDate,
                MinDate = GetUserLimitDataRange(reportSetting.MinDate, TimeZone),
                LimitMonthRange = reportSetting.LimitMonthRange,
                IsAllowedGroupByDate = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByDate),
                IsAllowedGroupByMonth = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByMonth),
                IsAllowedGroupByProduct = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByProduct),
                IsAllowedGroupByPlayerSingle = wlAnalysisSinglePlayer == 1,
                IsAllowedGroupByPlayer = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByPlayer),
                IsAllowedGroupByCurrency = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByCurrency),
                IsAllowedGroupByBrand = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_GroupByBrand),
                IsAllowedReportBetlist = userSession.FunctionList.Any(x => x.FunctionKey == PermissionKeys.ReportWinLoss_ReportBetlist),
                TopBottomPlayerList = BuildTopBottomPlayerList(userSession.SettingList)
            };

            AssignSpecialReportDataPermission(vm);

            return vm;
        }

        private static IDictionary<string, string> BuildTopBottomPlayerList(IEnumerable<NVCSettingAuthInfo> settingList)
        {
            var result = new Dictionary<string, string>();

            if (settingList != null)
            {
                BuildTopPlayerList(result, settingList);
                BuildBottomPlayerList(result, settingList);
            }

            return result;
        }

        private static void BuildTopPlayerList(Dictionary<string, string> playerlist, IEnumerable<NVCSettingAuthInfo> settingList)
        {
            var wlAnalysisTopTO = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_TopTO)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisTopTO))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Top, TO, wlAnalysisTopTO),
                    string.Format(ViewResources.TopXPlayerListBasedOn, wlAnalysisTopTO, ViewResources.Turnover));
            }

            var wlAnalysisTopGGR = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_TopGGR)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisTopGGR))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Top, GGR, wlAnalysisTopGGR),
                    string.Format(ViewResources.TopXPlayerListBasedOn, wlAnalysisTopGGR, ViewResources.GGR));
            }

            var wlAnalysisTopBetCount = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_TopBetCount)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisTopBetCount))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Top, BetCount, wlAnalysisTopBetCount),
                    string.Format(ViewResources.TopXPlayerListBasedOn, wlAnalysisTopBetCount, ViewResources.BetCount));
            }

            var wlAnalysisTopAvgBetAmount = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_TopAvgBetAmount)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisTopAvgBetAmount))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Top, AvgBetAmount, wlAnalysisTopAvgBetAmount),
                    string.Format(ViewResources.TopXPlayerListBasedOn, wlAnalysisTopAvgBetAmount, ViewResources.AvgBetAmount));
            }
        }

        private static void BuildBottomPlayerList(Dictionary<string, string> playerlist, IEnumerable<NVCSettingAuthInfo> settingList)
        {
            var wlAnalysisBottomTO = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_BottomTO)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisBottomTO))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Bottom, TO, wlAnalysisBottomTO),
                    string.Format(ViewResources.BottomXPlayerListBasedOn, wlAnalysisBottomTO, ViewResources.Turnover));
            }

            var wlAnalysisBottomGGR = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_BottomGGR)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisBottomGGR))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Bottom, GGR, wlAnalysisBottomGGR),
                    string.Format(ViewResources.BottomXPlayerListBasedOn, wlAnalysisBottomGGR, ViewResources.GGR));
            }

            var wlAnalysisBottomBetCount = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_BottomBetCount)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisBottomBetCount))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Bottom, BetCount, wlAnalysisBottomBetCount),
                    string.Format(ViewResources.BottomXPlayerListBasedOn, wlAnalysisBottomBetCount, ViewResources.BetCount));
            }

            var wlAnalysisBottomAvgBetAmount = settingList.FirstOrDefault(_ => _.SettingKey == SettingKey.WLAnalysis_BottomAvgBetAmount)?.SettingValue.Trim();

            if (!string.IsNullOrEmpty(wlAnalysisBottomAvgBetAmount))
            {
                playerlist.Add(string.Format(PlayerListValueFormat, Bottom, AvgBetAmount, wlAnalysisBottomAvgBetAmount),
                    string.Format(ViewResources.BottomXPlayerListBasedOn, wlAnalysisBottomAvgBetAmount, ViewResources.AvgBetAmount));
            }
        }
    }
}