export const defaultState = window.initialState || {}

export const defaultPagingOption = {
    PageIndex: 1,
    PageSize: 50,
    TotalItem: 0,
    PageList: [50, 100, 200, 500, 1000]
}

export const defaultSortOption = {
    sortBy: 2,
    sortType: 'asc'
}

export const defaultGridData = {
    dataList: [],
    totalData: {},
    totalRows: 0
}

export const Url = {
    nonSportsBetList: 'Api/WinLossReport/GetPlayerBetList',
    exportNonSportsBetList: 'Api/WinLossReport/ExportPlayerBetList'
}