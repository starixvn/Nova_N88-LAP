import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Site from '@jsroot/lib/site';
import Popup from '@jsroot/components/popup';
import QueryString from '@jsroot/lib/QueryString';
import LangHelper from '@jsroot/lib/langHelper';
import GridData from './grid/GridData';
import GridCaption from './grid/GridCaption';
import ActionCreators from '../actions';
import { Url } from '../constants/queryConsts';
import { SportsOWBetListIds } from '../constants/filterConsts';

export const Content = ({ betListParam, requestParam, setBetListParam }) => {

    const _buildNonSportsBetListUrl = () => {
        const params = {
            custId: betListParam.custId,
            productId: betListParam.productId,
            username: betListParam.username,
            sabaSystemId: betListParam.sabaSystemId,
            originalCurrency: betListParam.originalCurrency,
            baseCurrency: requestParam.baseCurrency,
            dateType: requestParam.dateType,
            drilldownInOriginalCurrency: requestParam.drilldownInOriginalCurrency,
            fromDate: requestParam.fromDate,
            toDate: requestParam.toDate,
            isNoDrawTicket: requestParam.isNoDrawTicket,
            isIncludedFreeSpin: requestParam.isIncludedFreeSpin,
            timezone: requestParam.timezone,
        }
        const url = QueryString.setParams(Site.resolveClientUrl(Url.nonSportsBetListFrame), params);
        return url;
    }

    const _buildSportsBetListUrl = () => {
        const params = {
            custId: betListParam.custId,
            productId: betListParam.productId,
            externalId: betListParam.username,
            systemId: betListParam.sabaSystemId,
            currencyName: betListParam.originalCurrency,
            baseCurrency: requestParam.drilldownInOriginalCurrency ? '' : requestParam.baseCurrency,
            fromDate: requestParam.fromDate,
            toDate: requestParam.toDate,
            filterBy: requestParam.dateType,
            excludeDrawTicket: requestParam.isNoDrawTicket,
            timezone: requestParam.timezone,
        }
        const url = QueryString.setParams(Site.resolveClientUrl(Url.sportsBetListFrame), params);
        return url;
    }

    const _renderBetListPopup = () => {
        const { custId, productId } = betListParam || {};
        if (!custId || !productId) {
            return null;
        }
        const betlistUrl = SportsOWBetListIds.indexOf(productId) !== -1 ? _buildSportsBetListUrl() : _buildNonSportsBetListUrl();
        return <Popup iframeUrl={betlistUrl} width={1100} height={700} isShow={true} title={LangHelper.getSingleResource('PlayerBetList')} onClose={() => setBetListParam({})}>
        </Popup>
    }

    return (
        <>
            <GridCaption />
            <GridData />
            {_renderBetListPopup()}
        </>
    )
}

function mapStateToProps(state) {
    const { betListParam, requestParam } = state;
    return Object.assign({}, { betListParam, requestParam });
}

function mapDispatchToProps(dispatch) {
    const { setBetListParam } = ActionCreators;
    return bindActionCreators({ setBetListParam }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);