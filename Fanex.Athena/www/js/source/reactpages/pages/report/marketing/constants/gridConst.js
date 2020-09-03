import LangHelper from '@jsroot/lib/langHelper';

export const TotalNRUGridColumns = {
    total: 'total',
    newlyRegisterUsers: 'newlyRegisterUsers',
    compareNewlyRegisterUsers: 'compareNewlyRegisterUsers',
    changeRate: 'changeRate'
}

export const TotalNRUGridConfig = {
    [TotalNRUGridColumns.total]: { name: LangHelper.getSingleResource('Total'), attributes: { className: "left-align" } },
    [TotalNRUGridColumns.newlyRegisterUsers]: { name: LangHelper.getSingleResource('ReportDate'), attributes: { className: "right-align" } },
    [TotalNRUGridColumns.compareNewlyRegisterUsers]: { name: LangHelper.getSingleResource('CompareDate'), attributes: { className: "right-align" } },
    [TotalNRUGridColumns.changeRate]: { name: LangHelper.getSingleResource('ChangePercent'), attributes: { className: "right-align" } }
}

export const CampaignNRUGridColumns = {
    campaign: 'campaignName',
    newlyRegisterUsers: 'newlyRegisterUsers',
    depositUsers: 'depositUsers',
    firstDepositAmount: 'firstDepositAmount'
}

export const CampaignNRUGridConfig = {
    [CampaignNRUGridColumns.campaign]: { name: LangHelper.getSingleResource('Campaign'), attributes: { className: "left-align" } },
    [CampaignNRUGridColumns.newlyRegisterUsers]: { name: LangHelper.getSingleResource('NRU'), attributes: { className: "right-align" } },
    [CampaignNRUGridColumns.depositUsers]: { name: LangHelper.getSingleResource('Deposit'), attributes: { className: "right-align" } },
    [CampaignNRUGridColumns.firstDepositAmount]: { name: LangHelper.getSingleResource('FirstDepositAmount'), attributes: { className: "right-align" } }
}

export const SignupNRUGridColumns = {
    url: 'signupUrl',
    newlyRegisterUsers: 'newlyRegisterUsers',
    depositUsers: 'depositUsers',
    firstDepositAmount: 'firstDepositAmount'
}

export const SignupNRUGridConfig = {
    [SignupNRUGridColumns.url]: { name: LangHelper.getSingleResource('SignupUrl'), attributes: { className: "left-align" } },
    [SignupNRUGridColumns.newlyRegisterUsers]: { name: LangHelper.getSingleResource('NRU'), attributes: { className: "right-align" } },
    [SignupNRUGridColumns.depositUsers]: { name: LangHelper.getSingleResource('Deposit'), attributes: { className: "right-align" } },
    [SignupNRUGridColumns.firstDepositAmount]: { name: LangHelper.getSingleResource('FirstDepositAmount'), attributes: { className: "right-align" } }
}

export const DetailNRUGridColumns = {
    rowId: 'rowId',
    campaign: 'campaignName',
    username: 'username',
    registeredDateDisplay: 'registeredDateDisplay',
    signupUrl: 'signupUrl',
    isDeposit: 'isDeposit',
    firstDepositAmount: 'firstDepositAmount'
}

export const DetailNRUGridConfig = {
    [DetailNRUGridColumns.rowId]: { name: '#', attributes: { colWidth: 30, className: "center-align" } },
    [DetailNRUGridColumns.campaign]: { name: LangHelper.getSingleResource('Campaign'), attributes: { sortBy: 1, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.username]: { name: LangHelper.getSingleResource('Username'), attributes: { sortBy: 2, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.registeredDateDisplay]: { name: LangHelper.getSingleResource('RegisteredDate'), attributes: { sortBy: 3, colWidth: 80, className: "center-align" } },
    [DetailNRUGridColumns.signupUrl]: { name: LangHelper.getSingleResource('SignupUrl'), attributes: { sortBy: 4, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.isDeposit]: { name: LangHelper.getSingleResource('Deposit'), attributes: { sortBy: 5, colWidth: 80, className: "center-align" } },
    [DetailNRUGridColumns.firstDepositAmount]: { name: LangHelper.getSingleResource('FirstDepositAmount'), attributes: { sortBy: 6, colWidth: 80, className: "right-align" } }
}

export const DefaultPagingOption = {
    PageIndex: 1,
    PageSize: 500,
    TotalItem: 0,
    PageList: [500, 1000, 1500, 2000]
}

export const DefaultSortInfo = {
    sortbyId: 1,
    isSortAsc: true
}

export const DigitsAmount = 2;

export const StyleRow = { height: '25px' }