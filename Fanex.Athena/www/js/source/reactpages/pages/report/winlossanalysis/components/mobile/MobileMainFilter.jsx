import React, { useEffect, memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify';
import CollapsiblePanel from '@jsroot/components/collapsible-panel'
import AppData from '@jsroot/lib/AppData'
import useBaseCurrencyForMultiSelectCurrency from '@jsroot/customHooks/useBaseCurrencyForMultiSelectCurrency'
import { useFilterHandler } from '../hooks/useFilterHandler.jsx';
import useDisabledGroupInOriginalCurrency from '../hooks/useIsDisabledGroupInOriginalCurrency.jsx';
import DateRangeFilter from '../filters/DateRangeFilter.jsx';
import Service from '../../common/Service.js';
import ProductFilter from '../filters/ProductFilter.jsx';
import SportFilter from '../filters/SportFilter.jsx';
import BetTypeFilter from '../filters/BetTypeFilter.jsx';
import PlatformFilter from '../filters/PlatformFilter.jsx';
import StatusFilter from '../filters/StatusFilter.jsx';
import LiveStatusFilter from '../filters/LiveStatusFilter.jsx';
import BaseCurrencyFilter from '../filters/BaseCurrencyFilter.jsx';
import VipOnlyFilter from '../filters/VipOnlyFilter.jsx';
import RiskLevelFilter from '../filters/RiskLevelFilter.jsx';
import OddsGroupFilter from '../filters/OddsGroupFilter.jsx';
import UserNameFilter from '../filters/UserNameFilter.jsx';
import GroupInOriginalCurrencyCheckBoxFilter from '../filters/GroupInOriginalCurrencyCheckBoxFilter.jsx';
import ExcludeTestDataCheckBoxFilter from '../filters/ExcludeTestDataCheckBoxFilter.jsx';
import ViewCashOutOnlyFilter from '../filters/ViewCashOutOnlyFilter.jsx';
import CurrencyFilter from '../filters/CurrencyFilter.jsx';
import BrandFilter from '../filters/BrandFilter.jsx';
import PropTypes from 'prop-types';

export const MobileMainFilter = (props) => {
    const { isCollapsed } = props;
    const { appUuid, dateRange, selectedProduct, selectedSport, sportList, selectedBettype, bettypeList, selectedPlatform,
        selectedStatus, selectedLiveStatus, selectedBaseCurrency, selectedVipOnly, selectedCustomerClass, selectedOddsGroup,
        searchMode, isGroupInOriginalCurrency, isExcludeTestData, isViewCashOutOnly, selectedCurrency, selectedBrand }
        = useSelector(state => state, shallowEqual)
    const { baseCurrencyList, selectedBaseCurrency: newBaseCurrency } = useBaseCurrencyForMultiSelectCurrency(selectedBaseCurrency, selectedBrand);
    const { onDateRangeChangeHandler, onProductChangeHandler, onSportChangeHandler, onBetTypeChangeHandler,
        onPlatformChangeHandler, onStatusChangeHandler, onLiveStatusChangeHandler, onBaseCurrencyChangeHandler, onVipOnlyChangeHandler, onRiskLevelChangeHandler,
        onOddsGroupChangeHandler, onSearchModeChangeHandler, onUserNameInputHandler, onGroupInOriginalCurrencyChangeHandler, onExcludeTextDataChangeHandler,
        onCashOutOnlyChangeHandler, onCurrencyChangeHandler, onBrandChangeHandler
    } = useFilterHandler();
    const { isOfferCashOutProduct, brandOptions } = AppData;
    const isEnableCashOutFilter = Service.isContainProductSportBookOrBa(selectedProduct);
    const isDisabledGroupInOriginalCurrency = useDisabledGroupInOriginalCurrency();

    useEffect(() => { onProductChangeHandler(null, selectedProduct) }, [appUuid]);
    useEffect(() => { onBaseCurrencyChangeHandler({ value: newBaseCurrency }) }, [newBaseCurrency])
    const collapsedStyle = isCollapsed ? { display: "none" } : {};
    return (
        <CollapsiblePanel className="page-filter" isCollapseMode={false}>
            <div className="row">
                <ToastContainer
                    autoClose={10000}
                    pauseOnFocusLoss={false}
                    style={{ width: "500px" }}
                    transition={Flip} />

                {brandOptions && brandOptions.length > 1 && <div className="col-12 col-xs-6 col-md-3">
                    <BrandFilter key={`brand-${appUuid}`} onChange={onBrandChangeHandler} />
                </div>}

                <div className="col-12 col-xs-6 col-md-3">
                    <DateRangeFilter key={`date-${appUuid}`} onChange={onDateRangeChangeHandler} dateRange={dateRange} isMobile={true} />
                </div>

                <div className="col-12 col-xs-6 col-md-3">
                    <ProductFilter key={`product-${appUuid}`} onChange={onProductChangeHandler} isValid={!!selectedProduct} value={selectedProduct} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <SportFilter key={`sport-${appUuid}`} onChange={onSportChangeHandler} isValid={!!selectedSport} dataSource={sportList} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <BetTypeFilter key={`bettype-${appUuid}`} onChange={onBetTypeChangeHandler} isValid={!!selectedBettype} dataSource={bettypeList} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <PlatformFilter key={`platform-${appUuid}`} onChange={onPlatformChangeHandler} isValid={!!selectedPlatform} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <StatusFilter key={`status-${appUuid}`} onChange={onStatusChangeHandler} isValid={!!selectedStatus} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <LiveStatusFilter key={`live-status-${appUuid}`} onChange={onLiveStatusChangeHandler} isValid={!!selectedLiveStatus} />
                </div>

                <div className="col-12 col-xs-6 col-md-3">
                    <CurrencyFilter key={`currency-${appUuid}`} isValid={!!selectedCurrency} onChange={onCurrencyChangeHandler} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <BaseCurrencyFilter key={`base-currency-${appUuid}`} onChange={onBaseCurrencyChangeHandler} options={baseCurrencyList} value={selectedBaseCurrency} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <VipOnlyFilter key={`vip-only-${appUuid}`} onChange={onVipOnlyChangeHandler} value={selectedVipOnly} />
                </div>

                <div className="col-12 col-xs-6 col-md-3">
                    <RiskLevelFilter key={`risk-level-${appUuid}`} onChange={onRiskLevelChangeHandler} isValid={!!selectedCustomerClass} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <OddsGroupFilter key={`odds-group-${appUuid}`} onChange={onOddsGroupChangeHandler} isValid={!!selectedOddsGroup} />
                </div>

                <div className="col-12 col-xs-6 col-md-3">
                    <UserNameFilter key={`username-${appUuid}`} onChangeSearchMode={onSearchModeChangeHandler} onChangeUserName={onUserNameInputHandler} searchMode={searchMode} />
                </div>

                <div className="col-12 col-xs-12 col-md-3" style={collapsedStyle}>
                    <GroupInOriginalCurrencyCheckBoxFilter disabled={isDisabledGroupInOriginalCurrency} checked={isGroupInOriginalCurrency} onChange={onGroupInOriginalCurrencyChangeHandler} />
                </div>

                <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                    <ExcludeTestDataCheckBoxFilter checked={isExcludeTestData} onChange={onExcludeTextDataChangeHandler} />
                </div>

                {isOfferCashOutProduct &&
                    <div className="col-12 col-xs-6 col-md-3" style={collapsedStyle}>
                        <ViewCashOutOnlyFilter onChange={onCashOutOnlyChangeHandler} disabled={!isEnableCashOutFilter} checked={isViewCashOutOnly} />
                    </div>
                }

            </div>
        </CollapsiblePanel>
    )

}

const propTypes = {
    isCollapsed: PropTypes.bool
}
const defaultProps = {
    isCollapsed: true
}

MobileMainFilter.propTypes = propTypes;
MobileMainFilter.defaultProps = defaultProps;

export default memo(MobileMainFilter);
