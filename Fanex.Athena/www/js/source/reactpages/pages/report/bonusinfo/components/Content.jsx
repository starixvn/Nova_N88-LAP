import React from 'react';
import { connect } from 'react-redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper'
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import BonusInfoSummaryWidget from './widgets/BonusInfoSummaryWidget';
import BonusInfoDetailWidget from './widgets/BonusInfoDetailWidget';

export const Content = props => {
    const { globalFilter, detailFilter, isCollapsedFormFilter } = props;

    if (!globalFilter) {
        return null;
    }

    const { selectedBaseCurrency, fromDate, toDate} = globalFilter;

    const _maxHeightPixel = React.useMemo(() => {
        const { innerHeight } = window;
         return (innerHeight - (isCollapsedFormFilter ? 100 : 220)) + 'px';
    }, [isCollapsedFormFilter]);

    const _renderTitle = () => {
        const reportName = LangHelper.getSingleResource('BonusInfo');
        if (!globalFilter) {
            return <ReportTitle tag="div" content={reportName} />
        }
        const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
        const content = `${reportName}, ${fromDate} → ${toDate}, ${displayCurrency}`;
        return <ReportTitle tag="div" content={content} />
    }

    return (
        <div className="bonusinfo-content">
            {_renderTitle()}
            <div className="widget-list" style={{ maxHeight: _maxHeightPixel }}>
                <BonusInfoSummaryWidget />
                {detailFilter && <BonusInfoDetailWidget />}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { globalFilter, detailFilter, isCollapsedFormFilter } = state;
    return Object.assign({}, { globalFilter, detailFilter, isCollapsedFormFilter });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);