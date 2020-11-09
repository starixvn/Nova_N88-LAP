import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';

import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import NumberHelper from '../../../../../libs/helpers/numberHelper';
import { StyleRow, DigitsAmount } from '../../../../../constants/gridConst';

const BonusClaimedSummaryWidget = ({ reportDate, compareDate, baseCurrency, selectedBrand, allowedCompare }) => {
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getBonusClaimedSummaryAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand });
        QueryService.fetchBonusClaimedSummaryData(apiParams,
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
            <HeaderCell>{LangHelper.getSingleResource('Total')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('ReportDate')}</HeaderCell>
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('CompareDate')}</HeaderCell>}
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('ChangePercent')}</HeaderCell>}
        </HeaderRow>);

        const item = totalData[0];
        const roundRate = NumberFormat.round(item.changeRate, 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);
        const body = (<Row style={StyleRow}>
            <Cell className='left-align highlight-cell' >{LangHelper.getSingleResource('BonusAmountClaimed')}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.bonusAmountClaimeds, DigitsAmount)}</Cell>
            {allowedCompare && <Cell className='right-align'>{NumberFormat.format(item.compareBonusAmountClaimeds, DigitsAmount)}</Cell>}
            {allowedCompare && <Cell className={`right-align ${colorRate}`}>{displayRate}</Cell>}
        </Row>);

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={document.body.clientWidth}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={body}
                isPaging={true}
                containerPadding={70}
            />
        </div>)
    };

    const _renderCampaignData = () => {
        const { detailData, totalDetailData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{LangHelper.getSingleResource('Bonus')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('NoOfBonusClaimed')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('TotalBonusAmountClaimed')}</HeaderCell>
        </HeaderRow>);
        const body = detailData.map(item => <Row style={StyleRow}>
            <Cell className='left-align highlight-cell'>{item.bonusCode || LangHelper.getSingleResource('None')}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.numberOfBonusClaimed, 0)}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.bonusAmount, DigitsAmount)}</Cell>
        </Row>)

        const totalRow = (<Row>
            <Cell className='left-align total-cell'>{LangHelper.getSingleResource('Total')}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalDetailData.totalBonusClaimeds, 0)}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalDetailData.totalBonusAmount, 2)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={document.body.clientWidth}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={[...body, totalRow]}
                containerPadding={70}
            />
        </div>)
    };

    return (
        <Widget title={LangHelper.getSingleResource('Summary')} isLoading={isLoading}>
            {summaryData && <div className="summary-container">
                {_renderTotalData()}
                {_renderCampaignData()}
            </div>}
        </Widget>
    )
}

export default React.memo(BonusClaimedSummaryWidget);