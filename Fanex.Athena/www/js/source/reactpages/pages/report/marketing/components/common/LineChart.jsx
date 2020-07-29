import React from 'react';
import { Line } from 'react-chartjs-2';
import ChartHelper from '../../libs/helpers/chartHelper';

export const LineChart = props => {
    const { data, dataMapping } = props;
    const _chartData = ChartHelper.buildLineChartData(data, dataMapping);
    const _chartOptions = ChartHelper.buildLineChartOptions(_chartData.labels);
    return (
        <Line data={_chartData} options={_chartOptions} />
    )
}

export default React.memo(LineChart);