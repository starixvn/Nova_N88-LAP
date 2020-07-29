import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import ActionCreators from '../../../actions';
import Widget from '../../common/Widget';
import TimePeriodSelect from '../../common/TimePeriodSelect';
import BarChart from '../../common/BarChart';
import LineChart from '../../common/LineChart';
import { ReportDateSelectionOptions, ReportDateOptionValues } from '../../../constants/filterConst';
import FilterHelper from '../../../libs/helpers/filterHelper';
import { ChartMode, ChartModeOptions, UserActivitiesChartDataMapping } from '../../../constants/chartConst';

export const UserActivitiesWidget = props => {
    const { globalFilter, userActivitiesData, fetchUserActivitiesData } = props;
    const [reportDate, setReportDate] = useState(FilterHelper.DefaultReportDateLast7Days);
    const [isLoading, setLoading] = useState(false);
    const [chartMode, setChartMode] = useState(ChartMode.Bar);

    useEffect(() => {
        if (!globalFilter) {
            return;
        }
        setReportDate(globalFilter.reportDate);
        _reloadData(globalFilter.reportDate);
    }, [globalFilter])

    const _title = React.useMemo(() => LangHelper.getSingleResource('UserActivities'), []);
    const _reportDateSelectionOptions = React.useMemo(() => ReportDateSelectionOptions.filter(_ => _.value !== ReportDateOptionValues.yesterday), []);

    const _onChangeReportDate = React.useCallback(selectedRange => {
        setReportDate(selectedRange);
        _reloadData(selectedRange);
    })

    const _reloadData = reportDate => {
        setLoading(true);
        const { viewMode } = globalFilter;
        const apiParams = FilterHelper.getUserActivitiesAPIParams({ reportDate, viewMode });
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

    return (<Widget title={_title} isLoading={isLoading}>
        {userActivitiesData && <div className="user-activities-container">
            <div className="filter-container">
                <TimePeriodSelect
                    selectOptions={_reportDateSelectionOptions}
                    selectOptionGenerateRange={FilterHelper.ReportDateGenerateRangeSelections}
                    selectedRange={reportDate}
                    onChange={_onChangeReportDate}
                />
            </div>
            <div className="chart-container">
                {_renderChart()}
            </div>
            <div className="footer">
                <RadioGroup
                    name={'UserActivities-ViewChartMode'}
                    value={ChartMode.Bar}
                    options={ChartModeOptions}
                    onChange={setChartMode}
                />
            </div>
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