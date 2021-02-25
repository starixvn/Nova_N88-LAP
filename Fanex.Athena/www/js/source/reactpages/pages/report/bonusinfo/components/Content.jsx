import React from 'react';
import { connect } from 'react-redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import BonusInfoSummaryWidget from './widgets/BonusInfoSummaryWidget';
import BonusInfoDetailWidget from './widgets/BonusInfoDetailWidget';

export const Content = props => {
    const { globalFilter, detailFilter } = props;

    if (!globalFilter) {
        return null;
    }

    const { baseCurrency, fromDate, toDate} = globalFilter;

    const _renderTitle = () => {
        const reportName = LangHelper.getSingleResource('BonusInfo');
        if (!globalFilter) {
            return <ReportTitle tag="div" content={reportName} />
        }
        const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', baseCurrency);
        const content = `${reportName}, ${fromDate} → ${toDate}, ${displayCurrency}`;
        return <ReportTitle tag="div" content={content} />
    }

    return (
        <div className="bonusinfo-content">
            {_renderTitle()}
            <div className="widget-list">
                <BonusInfoSummaryWidget />
                {detailFilter && <BonusInfoDetailWidget />}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { globalFilter, detailFilter } = state;
    return Object.assign({}, { globalFilter, detailFilter });
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);