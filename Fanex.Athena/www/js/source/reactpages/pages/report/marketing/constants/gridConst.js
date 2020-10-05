import LangHelper from '@jsroot/lib/langHelper';

export const TotalNRUGridColumns = {
    total: 'total',
    newlyRegisterUsers: 'newlyRegisterUsers',
    compareNewlyRegisterUsers: 'compareNewlyRegisterUsers',
    changeRate: 'changeRate'
}

export const TotalNRUGridConfig = {
    [TotalNRUGridColumns.total]: { name: LangHelper.getSingleResource('Total'), attributes: { className: "left-align highlight-cell" } },
    [TotalNRUGridColumns.newlyRegisterUsers]: { name: LangHelper.getSingleResource('ReportDate'), attributes: { className: "right-align" } },
    [TotalNRUGridColumns.compareNewlyRegisterUsers]: { name: LangHelper.getSingleResource('CompareDate'), attributes: { className: "right-align" } },
    [TotalNRUGridColumns.changeRate]: { name: LangHelper.getSingleResource('ChangePercent'), attributes: { className: "right-align" } }
}

export const CampaignNRUGridColumns = {
    bonusCode: 'bonusCode',
    newlyRegisterUsers: 'newlyRegisterUsers',
    depositUsers: 'depositUsers',
    firstDepositAmount: 'firstDepositAmount'
}

export const CampaignNRUGridConfig = {
    [CampaignNRUGridColumns.bonusCode]: { name: LangHelper.getSingleResource('Bonus'), attributes: { className: "left-align highlight-cell" } },
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
    [SignupNRUGridColumns.url]: { name: LangHelper.getSingleResource('SignupUrl'), attributes: { className: "left-align highlight-cell" } },
    [SignupNRUGridColumns.newlyRegisterUsers]: { name: LangHelper.getSingleResource('NRU'), attributes: { className: "right-align" } },
    [SignupNRUGridColumns.depositUsers]: { name: LangHelper.getSingleResource('Deposit'), attributes: { className: "right-align" } },
    [SignupNRUGridColumns.firstDepositAmount]: { name: LangHelper.getSingleResource('FirstDepositAmount'), attributes: { className: "right-align" } }
}

export const DetailNRUGridColumns = {
    rowId: 'rowId',
    bonusCode: 'bonusCode',
    username: 'username',
    registeredDateDisplay: 'registeredDateDisplay',
    signupUrl: 'signupUrl',
    isDeposit: 'isDeposit',
    firstDepositAmount: 'firstDepositAmount'
}

export const DetailNRUGridConfig = {
    [DetailNRUGridColumns.rowId]: { name: '#', attributes: { colWidth: 30, className: "center-align" } },
    [DetailNRUGridColumns.bonusCode]: { name: LangHelper.getSingleResource('Bonus'), attributes: { sortBy: 1, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.username]: { name: LangHelper.getSingleResource('Username'), attributes: { sortBy: 2, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.registeredDateDisplay]: { name: LangHelper.getSingleResource('RegisteredDate'), attributes: { sortBy: 3, colWidth: 80, className: "center-align" } },
    [DetailNRUGridColumns.signupUrl]: { name: LangHelper.getSingleResource('SignupUrl'), attributes: { sortBy: 4, colWidth: 80, className: "left-align" } },
    [DetailNRUGridColumns.isDeposit]: { name: LangHelper.getSingleResource('Deposit'), attributes: { sortBy: 5, colWidth: 80, className: "center-align" } },
    [DetailNRUGridColumns.firstDepositAmount]: { name: LangHelper.getSingleResource('FirstDepositAmount'), attributes: { sortBy: 6, colWidth: 80, className: "right-align" } }
}

export const DetailWithdrawalAmountGridColumns = {
    rowId: 'rowId',
    username: 'username',
    registeredDateDisplay: 'registeredDateDisplay',
    numberOfWithdrawals: 'numberOfWithdrawals',
    withdrawalAmount: 'withdrawalAmount'
}

export const DetaiWithdrawalAmountGridConfig = {
    [DetailWithdrawalAmountGridColumns.rowId]: { name: '#', attributes: { colWidth: 30, className: "center-align" } },
    [DetailWithdrawalAmountGridColumns.username]: { name: LangHelper.getSingleResource('Username'), attributes: { sortBy: 1, colWidth: 80, className: "left-align" } },
    [DetailWithdrawalAmountGridColumns.registeredDateDisplay]: { name: LangHelper.getSingleResource('RegisteredDate'), attributes: { sortBy: 2, colWidth: 80, className: "center-align" } },
    [DetailWithdrawalAmountGridColumns.numberOfWithdrawals]: { name: LangHelper.getSingleResource('NumberOfWithdrawals'), attributes: { sortBy: 3, colWidth: 80, className: "right-align" } },
    [DetailWithdrawalAmountGridColumns.withdrawalAmount]: { name: LangHelper.getSingleResource('TotalWithdrawalAmount'), attributes: { sortBy: 4, colWidth: 80, className: "right-align" } }
}

export const DetailBonusClaimedGridColumns = {
    rowId: 'rowId',
    bonusCode: 'bonusCode',
    username: 'username',
    registeredDateDisplay: 'registeredDateDisplay',
    depositAmount: 'depositAmount',
    withdrawalAmount: 'withdrawalAmount',
    bonusAmount: 'bonusAmount'
}

export const DetaiBonusClaimedGridConfig = {
    [DetailBonusClaimedGridColumns.rowId]: { name: '#', attributes: { colWidth: 30, className: "center-align" } },
    [DetailBonusClaimedGridColumns.bonusCode]: { name: LangHelper.getSingleResource('Bonus'), attributes: { sortBy: 1, colWidth: 80, className: "left-align" } },
    [DetailBonusClaimedGridColumns.username]: { name: LangHelper.getSingleResource('Username'), attributes: { sortBy: 2, colWidth: 80, className: "left-align" } },
    [DetailBonusClaimedGridColumns.registeredDateDisplay]: { name: LangHelper.getSingleResource('RegisteredDate'), attributes: { sortBy: 3, colWidth: 80, className: "center-align" } },
    [DetailBonusClaimedGridColumns.depositAmount]: { name: LangHelper.getSingleResource('TotalDepositAmount'), attributes: { sortBy: 4, colWidth: 80, className: "right-align" } },
    [DetailBonusClaimedGridColumns.withdrawalAmount]: { name: LangHelper.getSingleResource('TotalWithdrawalAmount'), attributes: { sortBy: 5, colWidth: 80, className: "right-align" } },
    [DetailBonusClaimedGridColumns.bonusAmount]: { name: LangHelper.getSingleResource('TotalBonusAmountClaimed'), attributes: { sortBy: 6, colWidth: 80, className: "right-align" } }
}

export const DefaultPagingOption = {
    PageIndex: 1,
    PageSize: 100,
    TotalItem: 0,
    PageList: [100, 200, 500, 1000]
}

export const DefaultSortInfo = {
    sortbyId: 1,
    isSortAsc: true
}

export const DigitsAmount = 2;

export const StyleRow = { height: '25px' }