import LangHelper from '@jsroot/lib/langHelper';

export const columnKeys = {
    group: 'group',
    turnover: 'turnover',
    ggr: 'ggr',
    betCount: 'betCount',
    betAmount: 'betAmount',
    uniquePlayers: 'uniquePlayers',
    margin: 'margin',
}

export const displayedColumns = [
    { key: columnKeys.turnover, name: LangHelper.getSingleResource('Turnover'), show: true },
    { key: columnKeys.ggr, name: LangHelper.getSingleResource('GGR'), show: true },
    { key: columnKeys.betCount, name: LangHelper.getSingleResource('BetCount'), show: true },
    { key: columnKeys.betAmount, name: LangHelper.getSingleResource('BetAmount'), show: true },
    { key: columnKeys.uniquePlayers, name: LangHelper.getSingleResource('UniquePlayers'), show: true },
    { key: columnKeys.margin, name: LangHelper.getSingleResource('Margin'), show: true },
]

export const defaultDisplayedColumns = [
    { key: columnKeys.group, name: LangHelper.getSingleResource('Group'), show: true },
]


export const dataColumns = {
    [columnKeys.group]: { sortBy: 'group', colWidth: 100, className: "left-align" },
    [columnKeys.turnover]: { sortBy: 'turnover', colWidth: 100, className: "right-align" },
    [columnKeys.ggr]: { sortBy: 'ggr', colWidth: 100, className: "right-align" },
    [columnKeys.betCount]: { sortBy: 'betCount', colWidth: 100, className:"right-align" },
    [columnKeys.betAmount]: { sortBy: 'betAmount', colWidth: 100, className: "right-align" },
    [columnKeys.uniquePlayers]: { sortBy: 'uniquePlayers', colWidth: 100, className: "right-align" },
    [columnKeys.margin]: { sortBy: 'margin', colWidth: 100, className: "right-align" }
}