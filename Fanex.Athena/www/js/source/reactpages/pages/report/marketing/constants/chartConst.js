import LangHelper from '@jsroot/lib/langHelper';

export const ChartMode = {
    Bar: 1,
    Line: 2
}

export const ChartModeOptions = [
    { value: ChartMode.Bar, label: 'Bar chart' },
    { value: ChartMode.Line, label: 'Line chart' }
]

export const ChartColor = {
    Color1: '#F16F37',
    Color2: '#194170' 
}

export const UserActivitiesChartDataMapping = {
    labelField: 'time',
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