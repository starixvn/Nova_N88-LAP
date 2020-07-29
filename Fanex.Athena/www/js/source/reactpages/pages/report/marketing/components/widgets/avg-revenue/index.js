import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import MultipleSelect from '@9softstudio/react-multiselect';
import AppData from '@jsroot/lib/AppData';
import ActionCreators from '../../../actions';
import Widget from '../../common/Widget';
import TimePeriodSelect from '../../common/TimePeriodSelect';
import BarChart from '../../common/BarChart';
import LineChart from '../../common/LineChart';
import { ReportDateSelectionOptions } from '../../../constants/filterConst';
import FilterHelper from '../../../libs/helpers/filterHelper';
import DataService from '../../../libs/services/dataService';
import { ChartMode, ChartModeOptions, AvgRevenueChartDataMapping } from '../../../constants/chartConst';

export const AvgRevenueWidget = props => {
    const { globalFilter, avgRevenueData, fetchAvgRevenueData } = props;
    const [reportDate, setReportDate] = useState(FilterHelper.DefaultReportDate);
    const [products, setProducts] = useState(AppData.defaultSelectedProduct);
    const [isLoading, setLoading] = useState(false);
    const [chartMode, setChartMode] = useState(ChartMode.Bar);

    useEffect(() => {
        if (!globalFilter) {
            return;
        }
        setReportDate(globalFilter.reportDate);
        _reloadData(globalFilter.reportDate);
    }, [globalFilter])

    const _title = React.useMemo(() => LangHelper.getSingleResource('AvgRevenue'), []);

    const _chartData = React.useMemo(() => {
        if (!avgRevenueData) {
            return null;
        }
        const data = DataService.filterDataWithSelectedProducts(avgRevenueData, products);
        return data;
    }, [products, avgRevenueData]);


    const _onChangeReportDate = React.useCallback(selectedRange => {
        setReportDate(selectedRange);
        _reloadData(selectedRange);
    }, [])

    const _reloadData = reportDate => {
        setLoading(true);
        const { selectedBaseCurrency } = globalFilter;
        const apiParams = FilterHelper.getAvgRevenueAPIParams({ reportDate, products: AppData.defaultSelectedProduct, selectedBaseCurrency });
        fetchAvgRevenueData(apiParams, data => {
            setLoading(false);
        });
    }

    const _renderChart = () => {
        if (chartMode === ChartMode.Bar) {
            return <BarChart data={_chartData} dataMapping={AvgRevenueChartDataMapping} />
        }
        if (chartMode === ChartMode.Line) {
            return <LineChart data={_chartData} dataMapping={AvgRevenueChartDataMapping} />
        }
        return null;
    }

    return (<Widget title={_title} isLoading={isLoading}>
        {avgRevenueData && <div className="avg-revenue-container">
            <div className="row filter-container">
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Product")}</label>
                        <TimePeriodSelect
                            selectOptions={ReportDateSelectionOptions}
                            selectOptionGenerateRange={FilterHelper.ReportDateGenerateRangeSelections}
                            selectedRange={reportDate}
                            onChange={_onChangeReportDate}
                        />
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Product")}</label>
                        <MultipleSelect id="ProductList"
                            language={LangHelper.currentLanguage}
                            dataSource={AppData.productOptions}
                            keyField={"key"}
                            valueField={"value"}
                            statusField={"status"}
                            onChange={(_, selectedItemsKey) => setProducts(selectedItemsKey)}
                        />
                    </div>
                </div>
            </div>
            <div className="chart-container">
                {_renderChart()}
            </div>
            <div className="footer">
                <RadioGroup
                    name={'AvgRevenue-ViewChartMode'}
                    value={ChartMode.Bar}
                    options={ChartModeOptions}
                    onChange={setChartMode}
                />
            </div>
        </div>}
    </Widget>)
}

function mapStateToProps(state) {
    const { globalFilter, avgRevenueData } = state;
    return Object.assign({}, { globalFilter, avgRevenueData });
}

function mapDispatchToProps(dispatch) {
    const { fetchAvgRevenueData } = ActionCreators;
    return bindActionCreators({ fetchAvgRevenueData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(AvgRevenueWidget));