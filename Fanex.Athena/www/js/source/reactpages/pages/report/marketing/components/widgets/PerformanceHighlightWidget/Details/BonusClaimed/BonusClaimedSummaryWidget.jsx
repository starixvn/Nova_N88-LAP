import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';

import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import GroupCell from '../../../../common/GroupCell';
import QueryService from '../../../../../libs/services/queryService';
import NumberHelper from '../../../../../libs/helpers/numberHelper';
import { StyleRow, DigitsAmount } from '../../../../../constants/gridConst';

const BonusClaimedSummaryWidget = ({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency, allowedCompare }) => {
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getBonusClaimedSummaryAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency });
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
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{LangHelper.getSingleResource('TotalBonusAmountClaimed')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('ReportDate')}</HeaderCell>
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('CompareDate')}</HeaderCell>}
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('ChangePercent')}</HeaderCell>}
        </HeaderRow>);

        const body = _renderBodyTotalData();
        const totalRow = _rendertotalRowTotalData();

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={document.body.clientWidth}
                autoWidth={true}
                autoHeight={true}
                header={header}
                body={[...body, totalRow]}
                isPaging={true}
                containerPadding={70}
            />
        </div>)
    };

    const _renderBodyTotalData = () => {
        const { totalData } = summaryData;
        return totalData.map(item => {
            const roundRate = NumberFormat.round(item.changeRate, 0);
            const displayRate = NumberHelper.displayRate(roundRate);
            const colorRate = NumberHelper.getColorRate(roundRate);
            return (<Row style={StyleRow}>
                <Cell className='left-align highlight-cell' >{item.currencyCode}</Cell>
                <Cell className='right-align'>{NumberFormat.format(item.bonusAmountClaimeds, DigitsAmount)}</Cell>
                {allowedCompare && <Cell className='right-align'>{NumberFormat.format(item.compareBonusAmountClaimeds, DigitsAmount)}</Cell>}
                {allowedCompare && <Cell className={`right-align ${colorRate}`}>{displayRate}</Cell>}
            </Row>)
        })
    }

    const _rendertotalRowTotalData = () => {
        const { totalTotalData } = summaryData;
        const roundRate = NumberFormat.round(totalTotalData.changeRate, 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);
        return (<Row>
            <Cell className='left-align total-cell' >{LangHelper.getSingleResource('Total')}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalTotalData.bonusAmountClaimeds, DigitsAmount)}</Cell>
            {allowedCompare && <Cell className='right-align total-cell'>{NumberFormat.format(totalTotalData.compareBonusAmountClaimeds, DigitsAmount)}</Cell>}
            {allowedCompare && <Cell className={`right-align total-cell ${colorRate}`}>{displayRate}</Cell>}
        </Row>)
    }

    const _onDrillDownCampaignData = newCampaignData => {
        const newSummaryData = { ...summaryData };
        newSummaryData.detailData = newCampaignData;
        setSummaryData(newSummaryData);
    }

    const _renderCampaignData = () => {
        const { detailData, totalDetailData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{LangHelper.getSingleResource('BonusCode')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('BonusName')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('NoOfUserClaimingBonus')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('TotalBonusAmountClaimed')}</HeaderCell>
        </HeaderRow>);

        const body = detailData.map(item => <Row key={item.id} style={StyleRow}>
            {_renderGroupCampaignCell(item, detailData)}
            <Cell className='left-align'>{item.bonusName}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.numberOfBonusUser, 0)}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.bonusAmount, DigitsAmount)}</Cell>
        </Row>)

        const totalRow = (<Row>
            <Cell className='left-align total-cell'>{LangHelper.getSingleResource('Total')}</Cell>
            <Cell className='total-cell' />
            <Cell className='right-align total-cell'>{NumberFormat.format(totalDetailData.totalBonusUsers, 0)}</Cell>
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

    const _renderGroupCampaignCell = (item, detailData) => {
        const isParent = item.childs && item.childs.length > 0; 
        return <GroupCell displayText={item[isParent ? 'bonusCode' : 'currencyCode'] || LangHelper.getSingleResource('None')}
        rowData={item}
        dataList={detailData}
        fieldKey={'id'}
        allowedDrillDown={isParent}
        isChild={!isParent}
        onDrillDown={_onDrillDownCampaignData}
        {...{ className: "left-align" + (isParent ? " highlight-cell" : "")  }} />
    }

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