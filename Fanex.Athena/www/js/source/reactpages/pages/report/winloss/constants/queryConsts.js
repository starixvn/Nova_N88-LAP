export const Url = {
    setting: 'Api/WinLossReport/GetSetting',
    reportByGroup: 'Api/WinLossReport/GetData',
    playerDetail: 'Api/WinLossReport/GetPlayerDetail',
    exportReportByGroup: 'Api/WinLossReport/ExportData',
    exportReportDetailByGroup: 'Api/WinLossReport/ExportDetailData',
    sportsBetListFrame: 'WinLossReport/SportsBetList',
    nonSportsBetListFrame: 'WinLossReport/NonSportsBetList'
};

export const FileNameExport = {
    reportByGroup: 'WinLossAnalysisReport.xlsx',
    reportDetailByGroup: 'WinLossAnalysisReport_Detail.xlsx'
}

export const errorResponse = {
    data: null,
    isSuccess: false
}

export const successResponse = {
    isSuccess: true
}