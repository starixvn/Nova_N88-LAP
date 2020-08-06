import NumberFormat from '@jsroot/lib/numberFormat';

export default class ChartHelper {
    static buildBarChartData = (data, chartDataMapping) => {
        const labels = data.map(_ => _[chartDataMapping.labelField]);
        const datasets = chartDataMapping.datasets.map(dataMapping => {
            const valueOfCols = data.map(item => item[dataMapping.dataField])
            return {
                label: dataMapping.legend,
                data: valueOfCols,
                backgroundColor: dataMapping.color
            }
        });

        return {
            labels,
            datasets
        }
    }

    static buildLineChartData = (data, chartDataMapping) => {
        const labels = data.map(_ => _[chartDataMapping.labelField]);
        const datasets = chartDataMapping.datasets.map(dataMapping => {
            const valueOfCols = data.map(item => item[dataMapping.dataField])
            return {
                label: dataMapping.legend,
                data: valueOfCols,
                lineTension: 0,
                pointRadius: 1,
                borderWidth: 2,
                fill: false,
                borderColor: dataMapping.color,
                backgroundColor: dataMapping.color,
                pointBorderColor: dataMapping.color,
                pointBackgroundColor: dataMapping.color,
            }
        });

        return {
            labels,
            datasets
        }
    }

    static buildBarChartOptions = (labels, isDecimal) => {
        return {
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 5,
                    padding: 20,
                    usePointStyle: true
                }
            },
            hover: {
                animationDuration: 0
            },
            tooltips: {
                callbacks: {
                    label: this.tooltipFunc(isDecimal)
                }
            },
            scales: {
                xAxes: [
                    {
                        ...{ barPercentage: 1, categoryPercentage: 0.6 },
                        ...{
                            display: true,
                            gridLines: {
                                display: false
                            },
                            labels: {
                                show: true
                            },
                            labels
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        labels: {
                            show: true
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }

    static buildLineChartOptions = (labels, isDecimal) => {
        return {
            maintainAspectRatio: false,
            legend: {
                position: 'bottom',
                labels: {
                    boxWidth: 10,
                    boxHeight: 5,
                    padding: 20,
                    usePointStyle: true
                },
            },
            hover: {
                animationDuration: 0
            },
            tooltips: {
                callbacks: {
                    label: this.tooltipFunc(isDecimal)
                }
            },
            scales: {
                xAxes: [
                    {
                        ...{
                            display: true,
                            gridLines: {
                                display: false
                            },
                            labels: {
                                show: true
                            },
                            labels,
                        }
                    }
                ],
                yAxes: [
                    {
                        display: true,
                        labels: {
                            show: true
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }

    static tooltipFunc = isDecimal => (tooltipItem, data) => {
        const dataSet = data.datasets[tooltipItem.datasetIndex];
        return NumberFormat.format(dataSet.data[tooltipItem.index], isDecimal ? 2 : 0);
    }
}