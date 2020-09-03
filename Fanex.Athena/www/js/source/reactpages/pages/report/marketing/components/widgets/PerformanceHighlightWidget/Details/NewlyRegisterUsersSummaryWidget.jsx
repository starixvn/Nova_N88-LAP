import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../common/Widget';
import DataService from '../../../../libs/services/dataService';

import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../libs/services/queryService';
import NumberHelper from '../../../../libs/helpers/numberHelper';
import { TotalNRUGridColumns, TotalNRUGridConfig, CampaignNRUGridColumns, CampaignNRUGridConfig, SignupNRUGridColumns, SignupNRUGridConfig, StyleRow, DigitsAmount } from '../../../../constants/gridConst';

const NewlyRegisterUsersSummaryWidget = props => {
    const { reportDate, compareDate, baseCurrency } = props;
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getNewlyRegisterUsersSummaryAPIParams({ reportDate, compareDate, baseCurrency });
        QueryService.fetchNewlyRegisterUsersSummaryData(apiParams,
            () => {
                setLoading(true)
            },
            response => {
                setSummaryData(response.data)
                setLoading(false)
            });
    }, [reportDate, compareDate]);

    const _renderTotalData = () => {
        const { totalData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.total].name}</HeaderCell>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.compareNewlyRegisterUsers].name}</HeaderCell>
            <HeaderCell>{TotalNRUGridConfig[TotalNRUGridColumns.changeRate].name}</HeaderCell>
        </HeaderRow>);

        const item = totalData[0];
        const roundRate = NumberFormat.round(item[TotalNRUGridColumns.changeRate], 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);
        const body = (<Row style={StyleRow}>
            <Cell>{LangHelper.getSingleResource('NRU')}</Cell>
            <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[TotalNRUGridColumns.newlyRegisterUsers])}</Cell>
            <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.compareNewlyRegisterUsers].attributes}>{NumberFormat.format(item[TotalNRUGridColumns.compareNewlyRegisterUsers])}</Cell>
            <Cell {...TotalNRUGridConfig[TotalNRUGridColumns.changeRate].attributes} className={`${TotalNRUGridConfig[TotalNRUGridColumns.changeRate].attributes.className} ${colorRate}`}>{displayRate}</Cell>
        </Row>)
        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={1350}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={body}
                isPaging={true}
                containerPadding={30}
            />
        </div>)
    };

    const _renderCampaignData = () => {
        const { campaignData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{CampaignNRUGridConfig[CampaignNRUGridColumns.campaign].name}</HeaderCell>
            <HeaderCell>{CampaignNRUGridConfig[CampaignNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            <HeaderCell>{CampaignNRUGridConfig[CampaignNRUGridColumns.depositUsers].name}</HeaderCell>
            <HeaderCell>{CampaignNRUGridConfig[CampaignNRUGridColumns.firstDepositAmount].name}</HeaderCell>
        </HeaderRow>);
        const body = campaignData.map(item => <Row style={StyleRow}>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.campaign].attributes}>{item[CampaignNRUGridColumns.campaign]}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.newlyRegisterUsers])}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.depositUsers].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.depositUsers])}</Cell>
            <Cell {...CampaignNRUGridConfig[CampaignNRUGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[CampaignNRUGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={1350}
                autoWidth={true}
                bodyHeight={300}
                autoHeight={true}
                header={header}
                body={body}
                isPaging={true}
                containerPadding={30}
            />
        </div>)
    };

    const _renderSignupData = () => {
        const { signupData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.url].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.newlyRegisterUsers].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.depositUsers].name}</HeaderCell>
            <HeaderCell>{SignupNRUGridConfig[SignupNRUGridColumns.firstDepositAmount].name}</HeaderCell>
        </HeaderRow>);
        const body = signupData.map(item => <Row style={StyleRow}>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.url].attributes}>{item[SignupNRUGridColumns.url]}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.newlyRegisterUsers].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.newlyRegisterUsers])}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.depositUsers].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.depositUsers])}</Cell>
            <Cell {...SignupNRUGridConfig[SignupNRUGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[SignupNRUGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={1350}
                autoWidth={true}
                bodyHeight={300}
                autoHeight={true}
                header={header}
                body={body}
                isPaging={true}
                containerPadding={30}
            />
        </div>)
    };

    return (
        <Widget title={LangHelper.getSingleResource('Summary')} isLoading={isLoading}>
            {summaryData && <div className="summary-container">
                {_renderTotalData()}
                {_renderCampaignData()}
                {_renderSignupData()}
            </div>}
        </Widget>
    )
}

export default React.memo(NewlyRegisterUsersSummaryWidget);