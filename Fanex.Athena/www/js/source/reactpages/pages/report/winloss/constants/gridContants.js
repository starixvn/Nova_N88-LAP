import LangHelper from '@jsroot/lib/langHelper';
import { GroupByOptionIds } from './filterConsts';

export const columnKeys = {
    group: 'group',
    sabaId: 'sabaId',
    sabaSystemId: 'sabaSystemId',
    turnover: 'turnover',
    netTurnover: 'netTurnover',
    ggr: 'ggr',
    betCount: 'betCount',
    avgBetAmount: 'avgBetAmount',
    uniquePlayers: 'uniquePlayers',
    margin: 'margin'
}

export const displayedColumns = [
    { key: columnKeys.sabaId, name: LangHelper.getSingleResource('SabaId'), show: true, allowGroups: [ GroupByOptionIds.player ], isTotalColumn: true },
    { key: columnKeys.sabaSystemId, name: LangHelper.getSingleResource('SabaSystemId'), show: true, allowGroups: [ GroupByOptionIds.player ], isTotalColumn: true },
    { key: columnKeys.turnover, name: LangHelper.getSingleResource('Turnover'), show: true },
    { key: columnKeys.netTurnover, name: LangHelper.getSingleResource('NetTurnover'), show: true },
    { key: columnKeys.ggr, name: LangHelper.getSingleResource('GGR'), show: true },
    { key: columnKeys.betCount, name: LangHelper.getSingleResource('BetCount'), show: true },
    { key: columnKeys.avgBetAmount, name: LangHelper.getSingleResource('AvgBetAmount'), show: true },
    { key: columnKeys.uniquePlayers, name: LangHelper.getSingleResource('UniquePlayers'), show: true },
    { key: columnKeys.margin, name: LangHelper.getSingleResource('Margin'), show: true },
]

export const defaultDisplayedColumns = [
    { key: columnKeys.group, name: LangHelper.getSingleResource('Group'), show: true, isTotalColumn: true },
]

export const dataColumns = {
    [columnKeys.group]: { sortBy: columnKeys.group, colWidth: 80, className: "left-align" },
    [columnKeys.sabaId]: { colWidth: 80, className: "left-align" },
    [columnKeys.sabaSystemId]: { colWidth: 80, className: "left-align" },
    [columnKeys.turnover]: { sortBy: columnKeys.turnover, colWidth: 70, className: "right-align" },
    [columnKeys.netTurnover]: { sortBy: columnKeys.netTurnover, colWidth: 70, className: "right-align" },
    [columnKeys.ggr]: { sortBy: columnKeys.ggr, colWidth: 70, className: "right-align" },
    [columnKeys.betCount]: { sortBy: columnKeys.betCount, colWidth: 50, className:"right-align" },
    [columnKeys.avgBetAmount]: { sortBy: columnKeys.avgBetAmount, colWidth: 70, className: "right-align" },
    [columnKeys.uniquePlayers]: { sortBy: columnKeys.uniquePlayers, colWidth: 50, className: "right-align" },
    [columnKeys.margin]: { sortBy: columnKeys.margin, colWidth: 50, className: "right-align" }
}

export const defaultPagingOption =  {
    PageIndex: 1,
    PageSize: 500,
    TotalItem: 0,
    PageList: [500, 1000, 1500, 2000]
}

export const defaultSortOption = {
    sortBy: null,
    sortType: null
}