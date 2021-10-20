import LangHelper from '@jsroot/lib/langHelper';

export const BonusInfoSummaryGridColumns = {
    total: 'total',
    brand: 'brandName',
    bonusName: 'bonusName',
    bonusCode: 'bonusCode',
    date: 'dateString',
    gGR: 'ggr',
    bonusType: 'bonusTypeName',
    startDate: 'startDateString',
    endDate: 'endDateString',
    bonusStatus: 'bonusStatusText',
    claimStatus: 'claimStatus',
    totalClaimants: 'totalClaimants',
    totalClaimedAmount: 'totalClaimedAmount',
    totalDeposit: 'totalDeposit',
    totalWithdrawal: 'totalWithdrawal',
    claimStatus1: 'running',
    claimStatus2: 'canceled',
    claimStatus4: 'fulfill',
    claimStatus5: 'otherPlatform'
}

export const BonusInfoDetailGridColumns = {
    userName: 'userName',
    brand: 'brandName',
    bonusName: 'bonusName',
    bonusCode: 'bonusCode',
    bonusType: 'bonusType',
    claimDate: 'claimDateString',
    bonusAmountClaimed: 'claimedAmount',
    totalDeposit: 'totalDeposit',
    totalWithdrawal: 'totalWithdrawal',
    status: 'statusText',
    completion: 'percentagedCompletion'
}

export const BonusInfoSummaryGridConfig = {
    [BonusInfoSummaryGridColumns.total]: { name: LangHelper.getSingleResource('Total'), attributes: { colSpan: 6, className: "left-align" } },
    [BonusInfoSummaryGridColumns.date]: { name: LangHelper.getSingleResource('Date'), attributes: { sortBy: 'Date', colWidth: 60, className: "center-align" } },
    [BonusInfoSummaryGridColumns.bonusName]: { name: LangHelper.getSingleResource('BonusName'), attributes: { sortBy: 'bonusName', colWidth: 110, className: "left-align" } },
    [BonusInfoSummaryGridColumns.bonusCode]: { name: LangHelper.getSingleResource('BonusCode'), attributes: { sortBy: 'bonusCode', colWidth: 110, className: "left-align" } },
    [BonusInfoSummaryGridColumns.bonusType]: { name: LangHelper.getSingleResource('BonusType'), attributes: { sortBy: 'bonusTypeName', colWidth: 85, className: "left-align" } },
    [BonusInfoSummaryGridColumns.startDate]: { name: LangHelper.getSingleResource('StartDate'), attributes: { sortBy: 'startDate', colWidth: 60, className: "center-align" } },
    [BonusInfoSummaryGridColumns.endDate]: { name: LangHelper.getSingleResource('EndDate'), attributes: { sortBy: 'endDate', colWidth: 60, className: "center-align" } },
    [BonusInfoSummaryGridColumns.bonusStatus]: { name: LangHelper.getSingleResource('BonusStatus'), attributes: { sortBy: 'bonusStatus', colWidth: 55, className: "center-align" } },
    [BonusInfoSummaryGridColumns.claimStatus]: { name: LangHelper.getSingleResource('ClaimStatus') },
    [BonusInfoSummaryGridColumns.totalClaimants]: { name: LangHelper.getSingleResource('TotalClaimants'), attributes: { sortBy: 'totalClaimants', colWidth: 55, className: "right-align" } },
    [BonusInfoSummaryGridColumns.totalClaimedAmount]: { name: LangHelper.getSingleResource('TotalClaimedAmount'), attributes: { sortBy: 'totalClaimedAmount', colWidth: 70, className: "right-align" } },
    [BonusInfoSummaryGridColumns.gGR]: { name: LangHelper.getSingleResource('GGR'), attributes: { sortBy: 'ggr', colWidth: 70, className: "right-align" } },
    [BonusInfoSummaryGridColumns.totalDeposit]: { name: LangHelper.getSingleResource('TotalDeposit'), attributes: { sortBy: 'totalDeposit', colWidth: 70, className: "right-align" } },
    [BonusInfoSummaryGridColumns.totalWithdrawal]: { name: LangHelper.getSingleResource('TotalWithdrawal'), attributes: { sortBy: 'totalWithdrawal', colWidth: 70, className: "right-align" } },
    [BonusInfoSummaryGridColumns.claimStatus1]: { name: LangHelper.getSingleResource('Running'), attributes: { sortBy: 'running', colWidth: 50, className: "right-align" } },
    [BonusInfoSummaryGridColumns.claimStatus2]: { name: LangHelper.getSingleResource('Canceled'), attributes: { sortBy: 'canceled', colWidth: 50, className: "right-align" } },
    [BonusInfoSummaryGridColumns.claimStatus4]: { name: LangHelper.getSingleResource('Fullfill'), attributes: { sortBy: 'fulfill', colWidth: 50, className: "right-align" } },
    [BonusInfoSummaryGridColumns.claimStatus5]: { name: LangHelper.getSingleResource('OtherPlatform'), attributes: { sortBy: 'otherPlatform', colWidth: 50, className: "right-align" } }
}

export const BonusInfoDetailGridConfig = {
    [BonusInfoDetailGridColumns.userName]: { name: LangHelper.getSingleResource('UserName'), attributes: { sortBy: 1, colWidth: 100, className: "left-align" } },
    [BonusInfoDetailGridColumns.bonusCode]: { name: LangHelper.getSingleResource('BonusCode'), attributes: { colWidth: 120, className: "left-align" } },
    [BonusInfoDetailGridColumns.claimDate]: { name: LangHelper.getSingleResource('ClaimDate') },
    [BonusInfoDetailGridColumns.bonusAmountClaimed]: { name: LangHelper.getSingleResource('BonusAmountClaimed'), attributes: { sortBy: 3, colWidth: 100, className: "right-align" } },
    [BonusInfoDetailGridColumns.totalDeposit]: { name: LangHelper.getSingleResource('TotalDeposit'), attributes: { sortBy: 4, colWidth: 100, className: "right-align" } },
    [BonusInfoDetailGridColumns.totalWithdrawal]: { name: LangHelper.getSingleResource('TotalWithdrawal'), attributes: { sortBy: 5, colWidth: 100, className: "right-align" } },
    [BonusInfoDetailGridColumns.status]: { name: LangHelper.getSingleResource('ClaimStatus'), attributes: { sortBy: 6, colWidth: 80, className: "center-align" } },
    [BonusInfoDetailGridColumns.completion]: { name: '% ' + LangHelper.getSingleResource('Completion'), attributes: { sortBy: 7, colWidth: 120, className: "center-align" } }
}

export const DefaultPagingOption = {
    PageIndex: 1,
    PageSize: 100,
    TotalItem: 0,
    PageList: [100, 200, 500, 1000]
}

export const DefaultDetailSortInfo = {
    sortbyId: 7,
    isSortAsc: false
}

export const DefaultSummarySortInfo = {
    sortBy: 'BonusCode',
    sortType: 'asc'
}

export const DefaultSummarySortInfoGroupByDate = {
    sortBy: 'Date',
    sortType: 'asc'
}

export const DigitsAmount = 2;

export const StyleRow = { height: '32px' }