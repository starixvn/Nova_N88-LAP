import React from 'react';
import LangHelper from '@jsroot/lib/langHelper';

export const ChartMode = {
    Bar: 1,
    Line: 2
}

export const ChartModeOptions = [
    { value: ChartMode.Bar, label: <i className="icon-bar-chart" />},
    { value: ChartMode.Line, label: <i className="icon-line-chart" /> }
]

const ChartColor = {
    Color1: '#F16F37',
    Color2: '#194170' 
}

export const UserActivitiesChartDataMapping = {
    labelField: 'time',
    isDecimal: false, 
    datasets: [
        {
            legend: LangHelper.getSingleResource('AUActiveUsers'),
            dataField: 'activeUsers',
            color: ChartColor.Color1
        },
        {
            legend: LangHelper.getSingleResource('NRUNewlyRegisterdUsers'),
            dataField: 'newlyRegisterUsers',
            color: ChartColor.Color2
        }
    ]
}

export const AvgRevenueChartDataMapping = {
    labelField: 'productName',
    isDecimal: true, 
    datasets: [
        {
            legend: LangHelper.getSingleResource('ARPUAllUsers'),
            dataField: 'allUsersRevenue',
            color: ChartColor.Color1
        },
        {
            legend: LangHelper.getSingleResource('ARPPUPaidUsers'),
            dataField: 'paidUsersRevenue',
            color: ChartColor.Color2
        }
    ]
}

export const PerformanceHighlightDetailBoxKeys = {
    BonusClaimed: 'BonusClaimed',
    NewlyRegisteredUsers: 'NewlyRegisteredUsers',
    WithdrawalAmount: 'WithdrawalAmount'
}