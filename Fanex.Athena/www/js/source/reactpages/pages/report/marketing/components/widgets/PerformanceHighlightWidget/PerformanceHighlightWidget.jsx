import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Popup from '@jsroot/components/popup';
import ActionCreators from '../../../actions';
import Widget from '../../common/Widget';
import HighlightBox from '../../common/HighlightBox';
import DateTimeHelper from '../../../libs/helpers/dateTimeHelper';
import DataService from '../../../libs/services/dataService';
import NewlyRegisterUsersDetail from './Details/NewlyRegisterUsersDetail';

export const PerformanceHighlightWidget = props => {
    const { globalFilter, performanceHighlightData, fetchPeformanceHighlightData } = props;
    const [isLoading, setLoading] = useState(false);
    const [selectedBox, setSelectedBox] = useState(null);

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
            enableCompare={false}
            title={LangHelper.getSingleResource('TotalUsers')}
            value={totalUsers}
            rate={growthRateTotalUsers}
        />)
    }

    const _renderPaidUsersBox = () => {
        const { paidUsers, growthRatePaidUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={false}
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
            onViewDetail={() => setSelectedBox(1)}
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

    const _renderPopupTitle = () => {
        const { selectedBaseCurrency, reportDate } = globalFilter;
        const reportName = `${LangHelper.getSingleResource('NRU')} - ${LangHelper.getSingleResource('NewlyRegisteredUsers')}`;
        const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
        const reportDateRange = DateTimeHelper.formatDateRangeToString(reportDate.fromDate, reportDate.toDate);
        return `${reportName}, ${reportDateRange}, ${displayCurrency}`;
    }

    return (<Widget title={_title} isLoading={isLoading}>
        {performanceHighlightData && <div className="sticky-box-container">
            {selectedBox && <Popup height={800} width={1400} isShow={true} title={_renderPopupTitle()} onClose={() => setSelectedBox(null)}>
                <NewlyRegisterUsersDetail reportDate={globalFilter.reportDate} compareDate={globalFilter.compareDate} baseCurrency={globalFilter.selectedBaseCurrency} />
            </Popup>}
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