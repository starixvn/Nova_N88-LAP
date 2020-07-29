import React from 'react';
import { Bar } from 'react-chartjs-2';
import ChartHelper from '../../libs/helpers/chartHelper';

export const BarChart = props => {
    const { data, dataMapping } = props;
    const _chartData = ChartHelper.buildBarChartData(data, dataMapping);
    const _chartOptions = ChartHelper.buildBarChartOptions(_chartData.labels);
    return (
        <Bar data={_chartData} options={_chartOptions} />
    )
}

export default React.memo(BarChart);