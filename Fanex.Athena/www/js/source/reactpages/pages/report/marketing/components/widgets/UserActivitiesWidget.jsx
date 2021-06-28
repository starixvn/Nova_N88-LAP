import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import AppData from '@jsroot/lib/AppData'
import { DateRange } from '@jsroot/components/date-range';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import BarChart from '../common/BarChart';
import LineChart from '../common/LineChart';
import { ChartMode, ChartModeOptions, UserActivitiesChartDataMapping } from '../../constants/chartConst';
import DataService from '../../libs/services/dataService';

let countRender = 0;

export const UserActivitiesWidget = ({ globalFilter, userActivitiesData, fetchUserActivitiesData }) => {
    const { selectedBrand, selectedCurrency, viewMode } = globalFilter;
    const [reportDate, setReportDate] = useState(globalFilter.reportDate);
    const [isLoading, setLoading] = useState(false);
    const [chartMode, setChartMode] = useState(ChartMode.Bar);

    useEffect(() => {
        setReportDate(globalFilter.reportDate);
        _reloadData(globalFilter.reportDate);
        countRender++;
    }, [globalFilter])

    const _title = React.useMemo(() => LangHelper.getSingleResource('UserActivities'), []);

    const _reloadData = reportDate => {
        setLoading(true);
        const apiParams = DataService.getUserActivitiesAPIParams({ selectedBrand, selectedCurrency, reportDate, viewMode });
        fetchUserActivitiesData(apiParams, () => setLoading(false));
    }

    const _renderChart = () => {
        if (chartMode === ChartMode.Bar) {
            return <BarChart data={userActivitiesData} dataMapping={UserActivitiesChartDataMapping} />
        }
        if (chartMode === ChartMode.Line) {
            return <LineChart data={userActivitiesData} dataMapping={UserActivitiesChartDataMapping} />
        }
        return null;
    }

    const _renderReportDateSelection = () => {
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                key={'UserActivitiesWidget_ReportDate_' + countRender}
                startDate={reportDate.fromDate} endDate={reportDate.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                today={AppData.today} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={_onChangeReportDate}
            />
        )
    }

    const _onChangeReportDate = (range, isValidMonthRange = true) => {
        if (isValidMonthRange) {
            const { startDate, endDate } = range;
            const convertedRange = { fromDate: startDate, toDate: endDate }
            setReportDate(convertedRange);
            _reloadData(convertedRange)
        }
        else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    const _renderFilter = () => {
        return (<div className="row">
            <div className="col-12 col-md-4 col-sm-5 col-lg-3 col-xl-2">
                <div className="form-group">
                    <label className="label-text">{LangHelper.getSingleResource("ReportDate")}</label>
                    {_renderReportDateSelection()}
                </div>
            </div>
        </div>)
    }

    const _renderBody = () => {
        return (<div className="chart-body">
            {_renderChart()}
        </div>)
    }

    const _renderFooter = () => {
        return (<div className="chart-footer">
            <RadioGroup
                name={'UserActivities-ViewChartMode'}
                value={ChartMode.Bar}
                options={ChartModeOptions}
                onChange={setChartMode}
            />
        </div>)
    }

    return (<Widget title={_title} isLoading={isLoading}>
        {userActivitiesData && <div className="user-activities-container">
            {_renderFilter()}
            {_renderBody()}
            {_renderFooter()}
        </div>}
    </Widget>)
}

function mapStateToProps(state) {
    const { globalFilter, userActivitiesData } = state;
    return Object.assign({}, { globalFilter, userActivitiesData });
}

function mapDispatchToProps(dispatch) {
    const { fetchUserActivitiesData } = ActionCreators;
    return bindActionCreators({ fetchUserActivitiesData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(UserActivitiesWidget));