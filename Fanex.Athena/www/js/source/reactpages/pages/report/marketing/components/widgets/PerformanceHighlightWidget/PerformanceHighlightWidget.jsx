import React, { useState, useEffect } from 'react';
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
import QueryService from '../../../libs/services/queryService';
import Site from '@jsroot/lib/site';
import { Url } from '../../../constants/queryConst';
import { PerformanceHighlightDetailBoxKeys } from '../../../constants/chartConst';
import QueryString from '@jsroot/lib/QueryString';
import AppData from '@jsroot/lib/AppData';

export const PerformanceHighlightWidget = props => {
    const { globalFilter, performanceHighlightData, fetchPeformanceHighlightData } = props;
    const { allowedCompare, fromLastXDays } = globalFilter;        
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
        const { totalUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={false}
            title={LangHelper.getSingleResource('TotalUsers')}
            description={LangHelper.getSingleResource('AsOfNow')}
            value={totalUsers}
        />)
    }

    const _renderTotalDepositUsersBox = () => {
        const { totalDepositUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={false}
            title={LangHelper.getSingleResource('TotalDepositUsers')}
            description={LangHelper.getSingleResource('AsOfNow')}
            value={totalDepositUsers}
        />)
    }

    const _renderTotalActiveUsersBox = () => {
        const { totalActiveUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={false}
            title={LangHelper.getSingleResource('TotalActiveUsers')}
            description={LangHelper.getSingleResource('AsOfNow')}
            value={totalActiveUsers}
        />)
    }

    const _renderDepositUsersBox = () => {
        const { depositUsers, growthRateDepositUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('PU (APA)')}
            description={LangHelper.getSingleResource('DepositUsers')}
            value={depositUsers}
            rate={growthRateDepositUsers}
        />)
    }

    const _renderActiveUsersBox = () => {
        const { activeUsers, growthRateActiveUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('AU')}
            description={LangHelper.getSingleResource('ActiveUsers')}
            value={activeUsers}
            rate={growthRateActiveUsers}
        />)
    }

    const _renderNewlyRegisteredUsersBox = () => {
        const { newlyRegisterUsers, growthRateNewlyRegisterUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            onViewDetail={() => setSelectedBox(PerformanceHighlightDetailBoxKeys.NewlyRegisteredUsers)}
            title={LangHelper.getSingleResource('NRU')}
            description={LangHelper.getSingleResource('NewlyRegisteredUsers')}
            value={newlyRegisterUsers}
            rate={growthRateNewlyRegisterUsers}
        />)
    }

    const _renderNewlyActiveRegisteredUsersBox = () => {
        const { newlyActiveRegisterUsers, growthRateNewlyActiveRegisterUsers } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('ActiveNRU')}
            value={newlyActiveRegisterUsers}
            rate={growthRateNewlyActiveRegisterUsers}
        />)
    }

    const _renderDepositAmountBox = () => {
        const { depositAmount, growthRateDepositAmount } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            onViewDetail={() => setSelectedBox(PerformanceHighlightDetailBoxKeys.DepositAmount)}
            title={LangHelper.getSingleResource('DepositAmount')}
            value={depositAmount}
            rate={growthRateDepositAmount}
        />)
    }

    const _renderWithdrawalAmountBox = () => {
        const { withdrawalAmount, growthRateWithdrawalAmount } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            onViewDetail={() => setSelectedBox(PerformanceHighlightDetailBoxKeys.WithdrawalAmount)}
            title={LangHelper.getSingleResource('WithdrawalAmount')}
            value={withdrawalAmount}
            rate={growthRateWithdrawalAmount}
        />)
    }

    const _renderBonusClaimedBox = () => {
        const { bonusAmountClaimeds, growthRateBonusAmountClaimeds } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            onViewDetail={() => setSelectedBox(PerformanceHighlightDetailBoxKeys.BonusClaimed)}
            title={LangHelper.getSingleResource('BonusAmountClaimed')}
            value={bonusAmountClaimeds}
            rate={growthRateBonusAmountClaimeds}
        />)
    }

    const _renderNetCashAmountBox = () => {
        const { netCashAmount, growthRateNetCashAmount } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('NetCashAmount')}
            value={netCashAmount}
            rate={growthRateNetCashAmount}
        />)
    }

    const _renderChurnRateBox = () => {
        const { churnRate, differentChurnRate } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('CR')}
            description={LangHelper.getSingleResource('ChurnRate')}
            value={`${NumberFormat.round(churnRate, 0)}%`}
            isNegativeMean={true}
            rate={differentChurnRate}
        />)
    }

    const _renderRetentionRateBox = () => {
        const { retentionRate, differentRetentionRate } = performanceHighlightData;
        return (<HighlightBox
            enableCompare={allowedCompare}
            title={LangHelper.getSingleResource('RR')}
            description={LangHelper.getSingleResource('RetentionRate')}
            value={`${NumberFormat.round(retentionRate, 0)}%`}
            rate={differentRetentionRate}
        />)
    }

    const _renderPopupTitle = () => {
        const { selectedBaseCurrency, reportDate } = globalFilter;
        const displayCurrency = LangHelper.getSingleResource('Viewin').replace('{0}', selectedBaseCurrency);
        return `${LangHelper.getSingleResource('Marketing')}, ${Site.convertDateToString(reportDate.fromDate)} - ${Site.convertDateToString(reportDate.toDate)}, ${displayCurrency}`;
    }

    const _buildPopupUrl = params => {
        const url = Object.keys(params).reduce((result, currentKey) => {
            return QueryString.setParam(result, currentKey, params[currentKey]);
        }, Site.resolveClientUrl(Url.performanceHighlightDetailFrame))
        return url;
    }

    const _renderPopupDetail = () => {
        if(!selectedBox) {
            return null;
        }
        const params = {
            selectedBox: selectedBox,
            baseCurrency: globalFilter.selectedBaseCurrency,
            selectedBrand: globalFilter.selectedBrand,
            selectedCurrency: globalFilter.selectedCurrency,
            allowedCompare: globalFilter.allowedCompare,
            compareFromDate: DateTimeHelper.formatDateStructureToString(globalFilter.compareDate.fromDate),
            compareToDate: DateTimeHelper.formatDateStructureToString(globalFilter.compareDate.toDate),
            fromDate: Site.convertDateToString(globalFilter.reportDate.fromDate),
            toDate: Site.convertDateToString(globalFilter.reportDate.toDate),
        }
        const urlContent =_buildPopupUrl(params);
        return (<Popup iframeUrl={urlContent} height={700} width={1250} isShow={true} title={_renderPopupTitle()} onClose={() => setSelectedBox(null)}>
        </Popup>)
    }

    const _parseToCurrencyNameList = ({ selectedBrand, selectedCurrency }) => {
        const currencies = AppData.brands.find(_ => _.id === selectedBrand).tpCurrencies;
        const stringCurrencies = selectedCurrency.split(",");
        if(currencies.length === stringCurrencies.length) {
            return null;
        }
        return stringCurrencies
                .map(_ => currencies.find(c => c.key == _).value)
                .join(", ");
    }

    const _handleExportExcel = () => {
        const exportParams = DataService.getPerformanceHighlightExportAPIParams({ ...globalFilter, currencyNameList: _parseToCurrencyNameList(globalFilter) });
        QueryService.exportPerformanceHighlightData(exportParams);
    }

    return (<Widget title={_title} isLoading={isLoading} handleExportExcel={_handleExportExcel}>
        {performanceHighlightData && <div className="sticky-box-container">
            {_renderPopupDetail()}
            {_renderTotalUsersBox()}
            {_renderTotalDepositUsersBox()}
            {_renderTotalActiveUsersBox()}
            {_renderDepositUsersBox()}
            {_renderActiveUsersBox()}
            {_renderNewlyRegisteredUsersBox()}
            {_renderNewlyActiveRegisteredUsersBox()}
            {_renderDepositAmountBox()}
            {_renderWithdrawalAmountBox()}
            {_renderBonusClaimedBox()}
            {_renderNetCashAmountBox()}
            {!fromLastXDays && _renderChurnRateBox()}
            {!fromLastXDays && _renderRetentionRateBox()}
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