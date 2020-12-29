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

const DepositAmountSummaryWidget = ({ reportDate, compareDate, baseCurrency, selectedBrand, allowedCompare }) => {
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getDepositAmountSummaryAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand });
        QueryService.fetchDepositAmountSummaryData(apiParams,
            () => {
                setLoading(true)
            },
            response => {
                setSummaryData(response.data)
                setLoading(false)
            });
    }, [reportDate, compareDate]);

    const _onDrillDownSignupData = newSignupData => {
        const newSummaryData = {...summaryData };
        newSummaryData.signupData = newSignupData;
        setSummaryData(newSummaryData);
    }

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
            <Cell className='left-align highlight-cell'>{LangHelper.getSingleResource('DepositAmount')}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.depositAmount, DigitsAmount)}</Cell>
            {allowedCompare && <Cell className='right-align'>{NumberFormat.format(item.compareDepositAmount, DigitsAmount)}</Cell>}
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

    const _renderSignupData = () => {
        const { signupData, totalSignupData } = summaryData;
        const header = (<HeaderRow style={StyleRow}>
            <HeaderCell>{LangHelper.getSingleResource('SignupUrl')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('FirstDepositAmount')}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('TotalDepositAmount')}</HeaderCell>
        </HeaderRow>);
        const body = signupData.map(item => <Row style={StyleRow}>
            <GroupCell displayText={item.signupUrl}
                rowData={item}
                dataList={signupData}
                fieldKey={'signupUrl'}
                allowedDrillDown={!item.noGrouping && item.childs && item.childs.length > 0}
                isChild={!item.noGrouping && (!item.childs || !item.childs.length)}
                onDrillDown={_onDrillDownSignupData}
                {...{ className: 'left-align highlight-cell'}} />
            <Cell className='right-align'>{NumberFormat.format(item.firstDepositAmount, DigitsAmount)}</Cell>
            <Cell className='right-align'>{NumberFormat.format(item.depositAmount, DigitsAmount)}</Cell>
        </Row>)

        const totalRow = (<Row>
            <Cell className='left-align total-cell'>{LangHelper.getSingleResource('Total')}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalFirstDepositAmount, DigitsAmount)}</Cell>
            <Cell className='right-align total-cell'>{NumberFormat.format(totalSignupData.totalDepositAmount, DigitsAmount)}</Cell>
        </Row>)

        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={document.body.clientWidth}
                autoWidth={true}
                autoHeight={false}
                bodyHeight={400}
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
                {_renderSignupData()}
            </div>}
        </Widget>
    )
}

export default React.memo(DepositAmountSummaryWidget);