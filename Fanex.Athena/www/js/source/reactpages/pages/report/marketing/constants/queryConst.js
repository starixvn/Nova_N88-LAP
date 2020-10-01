export const Url = {
    performanceHighlight: 'Api/Marketing/PerformanceHighlight/GetData',
    performanceHighlightExport: 'Api/Marketing/PerformanceHighlight/ExportData',

    userActivities: 'Api/Marketing/UserActivities/GetData',
    avgRevenue: 'Api/Marketing/Revenue/GetAvgData',

    newlyRegisterUsersSummary: 'Api/Marketing/NewlyRegisterUsers/GetSummaryData',
    newlyRegisterUsersDetail: 'Api/Marketing/NewlyRegisterUsers/GetDetailsData',
    newlyRegisterUsersExport: 'Api/Marketing/NewlyRegisterUsers/ExportData',

    withdrawalAmountSummary: 'Api/Marketing/Withdrawal/GetSummaryData',
    withdrawalAmountDetail: 'Api/Marketing/Withdrawal/GetDetailsData',
    withdrawalAmountExport: 'Api/Marketing/Withdrawal/ExportData',

    bonusClaimedSummary: 'Api/Marketing/BonusClaimed/GetSummaryData',
    bonusClaimedDetail: 'Api/Marketing/BonusClaimed/GetDetailsData',
    bonusClaimedExport: 'Api/Marketing/BonusClaimed/ExportData'
}

export const FileNameExport = {
    newlyRegisterUsers: 'MarketingReport_NewlyRegisterUsers.xls',
    withdrawalAmount: 'MarketingReport_WithdrawalAmount.xls',
    bonusClaimed: 'MarketingReport_BonusClaimed.xls',
    performanceHighlight: 'MarketingReport_BusinessPerformanceHighlight.xls'
}

export const errorResponse = {
    data: null,
    isSuccess: false
}

export const successResponse = {
    isSuccess: true
}