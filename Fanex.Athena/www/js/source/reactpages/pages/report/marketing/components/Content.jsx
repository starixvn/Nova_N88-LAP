import React from 'react';
import { connect } from 'react-redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper'
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import PerformanceHighlightWidget from './widgets/PerformanceHighlightWidget';
import DateTimeHelper from '../libs/helpers/dateTimeHelper';

export const Content = props => {
    const { globalFilter } = props;

    const _renderTitle = () => {
        const reportName = LangHelper.getSingleResource('Marketing');
        if (!globalFilter) {
            return <ReportTitle tag="div" content={reportName} />
        }
        const { selectedBaseCurrency, reportDate } = globalFilter;
        const { fromDate, toDate } = reportDate;
        // const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
        const reportDateRange = DateTimeHelper.isEqualDate(fromDate, toDate) ? DateTimeHelper.formatDateStructureToString(reportDate.fromDate)
            : `${DateTimeHelper.formatDateStructureToString(reportDate.fromDate)} - ${DateTimeHelper.formatDateStructureToString(reportDate.toDate)}`;
        const content = `${reportName}, ${reportDateRange}`;
        return <ReportTitle tag="div" content={content} />
    }

    return (
        <div className="marketing-content">
            {_renderTitle()}
            <PerformanceHighlightWidget />
        </div>
    )
}

function mapStateToProps(state) {
    const { globalFilter } = state;
    return Object.assign({}, { globalFilter });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);