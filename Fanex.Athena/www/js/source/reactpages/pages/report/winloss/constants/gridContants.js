import React from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import { GroupByOptionIds } from './filterConsts';
import { Cell } from '@9softstudio/react-grid';
import GroupCell from '../components/grid/GroupCell';
import DecimalCell from '../components/grid/DecimalCell';

export const columnKeys = {
    group: 'group',
    sabaId: 'sabaId',
    sabaSystemId: 'sabaSystemId',
    turnover: 'turnover',
    netTurnover: 'netTurnover',
    ggr: 'ggr',
    playerWinloss: 'playerWinloss',
    betCount: 'betCount',
    avgBetAmount: 'avgBetAmount',
    uniquePlayers: 'uniquePlayers',
    margin: 'margin',
    closingBalance: 'closingBalance',
    noOfDeposit: 'numberOfDeposit',
    totalDepositAmount: 'depositAmount',
    noOfWithdrawal: 'numberOfWithdrawal',
    totalWithdrawalAmount: 'withdrawalAmount',
    bonusAmount: 'bonusAmount',
    progressiveBet: 'progressiveBet',
    progressiveWin: 'progressiveWin'
}

export const displayedColumns = [
    { key: columnKeys.sabaId, name: LangHelper.getSingleResource('SabaId'), show: true, allowGroups: [GroupByOptionIds.player], hasTotal: false },
    { key: columnKeys.sabaSystemId, name: LangHelper.getSingleResource('SabaSystemId'), show: true, allowGroups: [GroupByOptionIds.player], hasTotal: false },
    { key: columnKeys.turnover, name: LangHelper.getSingleResource('Turnover'), show: true, hasTotal: true },
    { key: columnKeys.netTurnover, name: LangHelper.getSingleResource('NetTurnover'), show: true, hasTotal: true },
    { key: columnKeys.ggr, name: LangHelper.getSingleResource('GGR'), show: true, hasTotal: true },
    { key: columnKeys.playerWinloss, name: LangHelper.getSingleResource('PlayerWinloss'), show: true, hasTotal: true },
    { key: columnKeys.progressiveWin, name: LangHelper.getSingleResource('ProgressiveWin'), show: true, hasTotal: true },
    { key: columnKeys.progressiveBet, name: LangHelper.getSingleResource('ProgressiveBet'), show: true, hasTotal: true },
    { key: columnKeys.betCount, name: LangHelper.getSingleResource('BetCount'), show: true, hasTotal: true },
    { key: columnKeys.avgBetAmount, name: LangHelper.getSingleResource('AvgBetAmount'), show: true, hasTotal: true },
    { key: columnKeys.uniquePlayers, name: LangHelper.getSingleResource('UniquePlayers'), show: true, hasTotal: true },
    { key: columnKeys.margin, name: LangHelper.getSingleResource('Margin'), show: true, hasTotal: true },
    { key: columnKeys.closingBalance, name: LangHelper.getSingleResource('ClosingBalance'), show: true, allowGroups: [GroupByOptionIds.player], hasTotal: true },
    { key: columnKeys.noOfDeposit, name: LangHelper.getSingleResource('NoOfDeposit'), allowGroups: [GroupByOptionIds.date, GroupByOptionIds.month, GroupByOptionIds.currency, GroupByOptionIds.player], show: true, hasTotal: true },
    { key: columnKeys.totalDepositAmount, name: LangHelper.getSingleResource('TotalDepositAmount'), allowGroups: [GroupByOptionIds.date, GroupByOptionIds.month, GroupByOptionIds.currency, GroupByOptionIds.player], show: true, hasTotal: true },
    { key: columnKeys.noOfWithdrawal, name: LangHelper.getSingleResource('NoOfWithdrawal'), allowGroups: [GroupByOptionIds.date, GroupByOptionIds.month, GroupByOptionIds.currency, GroupByOptionIds.player], show: true, hasTotal: true },
    { key: columnKeys.totalWithdrawalAmount, name: LangHelper.getSingleResource('TotalWithdrawalAmount'), allowGroups: [GroupByOptionIds.date, GroupByOptionIds.month, GroupByOptionIds.currency, GroupByOptionIds.player], show: true, hasTotal: true },
    { key: columnKeys.bonusAmount, name: LangHelper.getSingleResource('TotalBonus'), allowGroups: [GroupByOptionIds.date, GroupByOptionIds.month, GroupByOptionIds.currency, GroupByOptionIds.player], show: true, hasTotal: true },
]

export const defaultDisplayedColumns = [
    { key: columnKeys.group, name: LangHelper.getSingleResource('Group'), show: true }
]

export const dataColumns = {
    [columnKeys.group]: { sortBy: 1, colWidth: 80, className: "left-align" },
    [columnKeys.sabaId]: {
        colWidth: 70, className: "left-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.sabaId)
    },
    [columnKeys.sabaSystemId]: {
        colWidth: 70, className: "left-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.sabaSystemId)
    },
    [columnKeys.turnover]: {
        sortBy: 2, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.turnover)
    },
    [columnKeys.netTurnover]: {
        sortBy: 3, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.netTurnover)
    },
    [columnKeys.ggr]: {
        sortBy: 4, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.ggr)
    },
    [columnKeys.playerWinloss]: {
        sortBy: 5, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.playerWinloss)
    },
    [columnKeys.progressiveWin]: {
        sortBy: 6, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.progressiveWin)
    },
    [columnKeys.progressiveBet]: {
        sortBy: 7, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.progressiveBet)
    },
    [columnKeys.betCount]: {
        sortBy: 8, colWidth: 50, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.betCount)
    },
    [columnKeys.avgBetAmount]: {
        sortBy: 9, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.avgBetAmount)
    },
    [columnKeys.uniquePlayers]: {
        sortBy: 10, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.uniquePlayers)
    },
    [columnKeys.margin]: {
        sortBy: 11, colWidth: 50, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.margin)
    },
    [columnKeys.closingBalance]: {
        sortBy: 12, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.closingBalance)
    },
    [columnKeys.noOfDeposit]: {
        sortBy: 13, colWidth: 50, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.noOfDeposit)
    },
    [columnKeys.totalDepositAmount]: {
        sortBy: 14, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.totalDepositAmount)
    },
    [columnKeys.noOfWithdrawal]: {
        sortBy: 15, colWidth: 60, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.noOfWithdrawal)
    },
    [columnKeys.totalWithdrawalAmount]: {
        sortBy: 16, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.totalWithdrawalAmount)
    },
    [columnKeys.bonusAmount]: {
        sortBy: 17, colWidth: 70, className: "right-align",
        draggable: true,
        onDragOver: event => event.preventDefault(),
        onDragStart: event => onDragStart(event, columnKeys.bonusAmount)
    }      
}

const onDragStart = (event, columnKey) => {
    const headerX = event.clientX - event.currentTarget.getBoundingClientRect().x
    event.dataTransfer.setData("headerX", headerX)
    event.dataTransfer.setData("headerKey", columnKey)
}

export const componentCells = {
    [columnKeys.group]: (rowData, highLight, groupChildClassName) => <GroupCell rowData={rowData} className={highLight + groupChildClassName} />,
    [columnKeys.sabaId]: (rowData, highLight) => <Cell className={dataColumns[columnKeys.sabaId].className + highLight} >{rowData[columnKeys.sabaId]}</Cell>,
    [columnKeys.sabaSystemId]: (rowData, highLight) => <Cell className={dataColumns[columnKeys.sabaSystemId].className + highLight} >{rowData[columnKeys.sabaSystemId]}</Cell>,
    [columnKeys.turnover]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.turnover]} className={dataColumns[columnKeys.turnover].className + highLight} />,
    [columnKeys.netTurnover]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.netTurnover]} className={dataColumns[columnKeys.netTurnover].className + highLight} />,
    [columnKeys.ggr]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.ggr]} className={dataColumns[columnKeys.ggr].className + highLight} />,
    [columnKeys.playerWinloss]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.playerWinloss]} disableWarning={true} className={dataColumns[columnKeys.playerWinloss].className + highLight} />,
    [columnKeys.betCount]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.betCount]} className={dataColumns[columnKeys.betCount].className + highLight} digits={0} />,
    [columnKeys.avgBetAmount]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.avgBetAmount]} className={dataColumns[columnKeys.avgBetAmount].className + highLight} />,
    [columnKeys.uniquePlayers]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.uniquePlayers]} className={dataColumns[columnKeys.uniquePlayers].className + highLight} digits={0} />,
    [columnKeys.margin]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.margin]} className={dataColumns[columnKeys.margin].className + highLight}>{'%'}</DecimalCell>,
    [columnKeys.closingBalance]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.closingBalance]} className={dataColumns[columnKeys.closingBalance].className + highLight} />,
    [columnKeys.noOfDeposit]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.noOfDeposit]} className={dataColumns[columnKeys.noOfDeposit].className + highLight} digits={0} />,
    [columnKeys.totalDepositAmount]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.totalDepositAmount]} className={dataColumns[columnKeys.totalDepositAmount].className + highLight} />,
    [columnKeys.noOfWithdrawal]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.noOfWithdrawal]} className={dataColumns[columnKeys.noOfWithdrawal].className + highLight} digits={0} />,
    [columnKeys.totalWithdrawalAmount]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.totalWithdrawalAmount]} className={dataColumns[columnKeys.totalWithdrawalAmount].className + highLight} />,
    [columnKeys.bonusAmount]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.bonusAmount]} className={dataColumns[columnKeys.bonusAmount].className + highLight} />,
    [columnKeys.progressiveWin]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.progressiveWin]} disableWarning={true} className={dataColumns[columnKeys.progressiveWin].className + highLight} />,
    [columnKeys.progressiveBet]: (rowData, highLight) => <DecimalCell value={rowData[columnKeys.progressiveBet]} disableWarning={true} className={dataColumns[columnKeys.progressiveBet].className + highLight} />
}

export const defaultPagingOption = {
    PageIndex: 1,
    PageSize: 500,
    TotalItem: 0,
    PageList: [500, 1000, 1500, 2000]
}

export const defaultSortOption = {
    sortBy: 1,
    sortType: 'asc'
}