import React from 'react';
import { connect } from 'react-redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper'
import Site from '@jsroot/lib/site'
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import PerformanceHighlightWidget from './widgets/PerformanceHighlightWidget';
import UserActivitiesWidget from './widgets/UserActivitiesWidget';
import AvgRevenueWidget from './widgets/AvgRevenueWidget';

export const Content = props => {
    const { globalFilter, isCollapsedFormFilter } = props;

    if (!globalFilter) {
        return null;
    }

    const { selectedBaseCurrency, reportDate, } = globalFilter;
    const { fromDate, toDate } = reportDate;

    const _maxHeightPixel = React.useMemo(() => {
        const { innerHeight } = window;
         return (innerHeight - (isCollapsedFormFilter ? 100 : 220)) + 'px';
    }, [isCollapsedFormFilter]);

    const _renderTitle = () => {
        const reportName = LangHelper.getSingleResource('Marketing');
        if (!globalFilter) {
            return <ReportTitle tag="div" content={reportName} />
        }
        const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
        const content = `${reportName}, ${Site.convertDateToString(fromDate)} - ${Site.convertDateToString(toDate)}, ${displayCurrency}`;
        return <ReportTitle tag="div" content={content} />
    }

    return (
        <div className="marketing-content">
            {_renderTitle()}
            <div className="widget-list" style={{ maxHeight: _maxHeightPixel }}>
                <PerformanceHighlightWidget />
                <UserActivitiesWidget />
                <AvgRevenueWidget />
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { globalFilter, isCollapsedFormFilter } = state;
    return Object.assign({}, { globalFilter, isCollapsedFormFilter });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);