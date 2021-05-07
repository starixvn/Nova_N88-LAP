import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Pager } from '@9softstudio/react-grid';
import Site from '@jsroot/lib/site';
import Popup from '@jsroot/components/popup';
import QueryString from '@jsroot/lib/QueryString';
import LangHelper from '@jsroot/lib/langHelper';
import GridData from './grid/GridData';
import GridCaption from './grid/GridCaption';
import ActionCreators from '../actions';
import { Url } from '../constants/queryConsts';

export const Content = ({ betListParam, requestParam, setBetListParam }) => { 

    const _buildBetListUrl = () => {
        const params = {
            custId: betListParam.custId,
            productId: betListParam.productId,
            username: betListParam.username,
            sabaSystemId: betListParam.sabaSystemId,
            baseCurrency: requestParam.baseCurrency,
            dateType: requestParam.dateType,
            drilldownInOriginalCurrency: requestParam.drilldownInOriginalCurrency,
            fromDate: requestParam.fromDate,
            toDate: requestParam.toDate,
            isNoDrawTicket: requestParam.isNoDrawTicket,
            timezone: requestParam.timezone,
        }
        const url = QueryString.setParams(Site.resolveClientUrl(Url.nonSportsBetListFrame), params);
        return url;
    }

    const _renderBetListPopup = () => {
        const { custId, productId } = betListParam || {};
        if(!custId || !productId) {
            return null;
        }
        const urlContent = _buildBetListUrl();
        return (<Popup iframeUrl={urlContent} width={1100} height={700} isShow={true} title={LangHelper.getSingleResource('PlayerBetList')} onClose={() => setBetListParam({})}>
        </Popup>)
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