import LangHelper from '@jsroot/lib/langHelper';

export const headerKeys = {
    group: 'group',
    turnover: 'turnover',
    ggr: 'ggr',
    betCount: 'betCount',
    betAmount: 'betAmount',
    uniquePlayers: 'uniquePlayers',
    margin: 'margin',
}

export const dataGridHeaders = [
    { key: 'group', sortBy: 'group', colWidth: 100 },
    { key: 'turnover', sortBy: 'turnover', colWidth: 100 },
    { key: 'ggr', sortBy: 'ggr', colWidth: 100 },
    { key: 'betCount', sortBy: 'betCount', colWidth: 100 },
    { key: 'betAmount', sortBy: 'betAmount', colWidth: 100 },
    { key: 'uniquePlayers', sortBy: 'uniquePlayers', colWidth: 100 },
    { key: 'margin', sortBy: 'margin', colWidth: 100 },
]

export const displayedColumns = {
    [headerKeys.group]: {
        name: LangHelper.getSingleResource('Group'),
        isShow: true
    },
    [headerKeys.turnover]: {
        name: LangHelper.getSingleResource('Turnover'),
        isShow: true
    },
    [headerKeys.ggr]: {
        name:  LangHelper.getSingleResource('GGR'),
        isShow: true
    },
    [headerKeys.betCount]: {
        name: LangHelper.getSingleResource('BetCount'),
        isShow: true
    },
    [headerKeys.betAmount]: {
        name: LangHelper.getSingleResource('BetAmount'),
        isShow: true
    },
    [headerKeys.uniquePlayers]: {
        name: LangHelper.getSingleResource('UniquePlayers'),
        isShow: true
    },
    [headerKeys.margin]: {
        name: LangHelper.getSingleResource('Margin'),
        isShow: true
    }
}