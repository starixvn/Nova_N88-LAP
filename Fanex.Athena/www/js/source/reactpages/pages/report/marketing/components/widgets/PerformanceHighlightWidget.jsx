import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import ActionCreators from '../../actions';
import Widget from '../common/Widget';
import HighlightBox from '../common/HighlightBox';
import DateTimeHelper from '../../libs/helpers/dateTimeHelper';
import DataService from '../../libs/services/dataService';

export const PerformanceHighlightWidget = props => {
    const { globalFilter, performanceHighlightData, fetchPeformanceHighlightData } = props;
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (!globalFilter) {
            return;
        }
        const apiParams = DataService.getPerformanceHighlightAPIParams(globalFilter);
        setLoading(true);
        fetchPeformanceHighlightData(apiParams, () => setLoading(false))
    }, [globalFilter]);

    const _title = React.useMemo(() => LangHelper.getSingleResource('BusinessPerformanceHighlights'), []);

    const _renderTotalUsersBox = () => {
        const { totalUsers, growthRateTotalUsers } = performanceHighlightData;
        return (<HighlightBox
            title={LangHelper.getSingleResource('TotalUsers')}
            value={totalUsers}
            rate={growthRateTotalUsers}
        />)
    }

    const _renderPaidUsersBox = () => {
        const { paidUsers, growthRatePaidUsers } = performanceHighlightData;
        return (<HighlightBox
            title={'PU (APA)'}
            description={LangHelper.getSingleResource('DepositUsers')}
            value={paidUsers}
            rate={growthRatePaidUsers}
        />)
    }

    const _renderActiveUsersBox = () => {
        const { activeUsers, growthRateActiveUsers } = performanceHighlightData;
        return (<HighlightBox
            title={LangHelper.getSingleResource('AU')}
            description={LangHelper.getSingleResource('ActiveUsers')}
            value={activeUsers}
            rate={growthRateActiveUsers}
        />)
    }

    const _renderNewlyRegisteredUsersBox = () => {
        const { newlyRegisterUsers, growthRateNewlyRegisterUsers } = performanceHighlightData;
        return (<HighlightBox
            title={LangHelper.getSingleResource('NRU')}
            description={LangHelper.getSingleResource('NewlyRegisteredUsers')}
            value={newlyRegisterUsers}
            rate={growthRateNewlyRegisterUsers}
        />)
    }

    const _renderChurnRateBox = () => {
        const { fromDate, toDate } = globalFilter.reportDate;
        const { churnRate, differentChurnRate } = performanceHighlightData;
        const isSingleDate = DateTimeHelper.isEqualDate(fromDate, toDate);
        return !isSingleDate && (<HighlightBox
            title={LangHelper.getSingleResource('CR')}
            description={LangHelper.getSingleResource('ChurnRate')}
            value={`${NumberFormat.round(churnRate, 0)}%`}
            isNegativeMean={true}
            rate={differentChurnRate}
        />)
    }

    const _renderRetentionRateBox = () => {
        const { fromDate, toDate } = globalFilter.reportDate;
        const { retentionRate, differentRetentionRate } = performanceHighlightData;
        const isSingleDate = DateTimeHelper.isEqualDate(fromDate, toDate);
        return !isSingleDate && (<HighlightBox
            title={LangHelper.getSingleResource('RR')}
            description={LangHelper.getSingleResource('RetentionRate')}
            value={`${NumberFormat.round(retentionRate, 0)}%`}
            rate={differentRetentionRate}
        />)
    }

    return (<Widget title={_title} isLoading={isLoading}>
        {performanceHighlightData && <div className="sticky-box-container">
            {_renderTotalUsersBox()}
            {_renderPaidUsersBox()}
            {_renderActiveUsersBox()}
            {_renderNewlyRegisteredUsersBox()}
            {_renderChurnRateBox()}
            {_renderRetentionRateBox()}
        </div>}
    </Widget>)
}

function mapStateToProps(state) {
    const { globalFilter, performanceHighlightData } = state;
    return Object.assign({}, { globalFilter, performanceHighlightData });
}

function mapDispatchToProps(dispatch) {
    const { fetchPeformanceHighlightData } = ActionCreators;
    return bindActionCreators({ fetchPeformanceHighlightData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(PerformanceHighlightWidget));