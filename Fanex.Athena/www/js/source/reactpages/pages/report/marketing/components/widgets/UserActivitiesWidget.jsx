import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import { decode } from '@jsroot/lib/htmlHelper';
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import TimePeriodSelect from '../common/TimePeriodSelect';
import BarChart from '../common/BarChart';
import LineChart from '../common/LineChart';
import { ReportDateSelectionOptions, ReportDateOptionValues, ViewModeOptionValues } from '../../constants/filterConst';
import FilterHelper from '../../libs/helpers/filterHelper';
import { ChartMode, ChartModeOptions, UserActivitiesChartDataMapping } from '../../constants/chartConst';
import DataService from '../../libs/services/dataService';

export const UserActivitiesWidget = props => {
    const { globalFilter, userActivitiesData, fetchUserActivitiesData } = props;
    const { viewMode } = globalFilter;
    const [reportDate, setReportDate] = useState(globalFilter.reportDate);
    const [isLoading, setLoading] = useState(false);
    const [chartMode, setChartMode] = useState(ChartMode.Bar);

    useEffect(() => {
        setReportDate(globalFilter.reportDate);
        _reloadData(globalFilter.reportDate);
    }, [globalFilter])

    const _title = React.useMemo(() => decode(LangHelper.getSingleResource('UserActivities')), []);

    const _reportDateSelectOptions = React.useMemo(() => {
        const isDailyMode = viewMode === ViewModeOptionValues.Daily;
        return ReportDateSelectionOptions.filter(_ => _.value !== ReportDateOptionValues.yesterday &&
            (isDailyMode || _.value !== ReportDateOptionValues.last7Days));
    }, [viewMode])

    const _onChangeReportDate = React.useCallback(selectedRange => {
        setReportDate(selectedRange);
        _reloadData(selectedRange);
    })

    const _reloadData = reportDate => {
        setLoading(true);
        const apiParams = DataService.getUserActivitiesAPIParams({ reportDate, viewMode });
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

    const _renderFilter = () => {
        return (<div className="row">
            <div className="col-12 col-md-6 col-sm-6 col-lg-5 col-xl-3">
                <div className="form-group">
                    <label className="label-text">{LangHelper.getSingleResource("ReportDate")}</label>
                    <TimePeriodSelect
                        selectOptions={_reportDateSelectOptions}
                        selectOptionGenerateRange={FilterHelper.ReportDateGenerateRangeSelections}
                        selectedRange={reportDate}
                        onChange={_onChangeReportDate}
                    />
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