import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';

import { Table, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import NumberHelper from '../../../../../libs/helpers/numberHelper';
import { StyleRow, DigitsAmount } from '../../../../../constants/gridConst';

const WithdrawalAmountSummaryWidget = ({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency ,allowedCompare }) => {
    const [isLoading, setLoading] = useState(false);
    const [summaryData, setSummaryData] = useState(null);

    useEffect(() => {
        const apiParams = DataService.getWithdrawalAmountSummaryAPIParams({ reportDate, compareDate, baseCurrency, selectedBrand, selectedCurrency });
        QueryService.fetchWithdrawalAmountSummaryData(apiParams,
            () => {
                setLoading(true)
            },
            response => {
                setSummaryData(response.data)
                setLoading(false)
            });
    }, [reportDate, compareDate]);

    const _header = React.useMemo(() => {
        return (<HeaderRow style={StyleRow}>
            <HeaderCell>{}</HeaderCell>
            <HeaderCell>{LangHelper.getSingleResource('ReportDate')}</HeaderCell>
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('CompareDate')}</HeaderCell>}
            {allowedCompare && <HeaderCell>{LangHelper.getSingleResource('ChangePercent')}</HeaderCell>}
        </HeaderRow>);
    }, []);

    const _renderTotalAmountRow =() => {
        const roundRate = NumberFormat.round(summaryData.withdrawalAmountChangeRate, 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);

        return (<Row style={StyleRow}>
            <Cell className='left-align highlight-cell' >{LangHelper.getSingleResource('TotalWithdrawalAmount')}</Cell>
            <Cell className='right-align'>{NumberFormat.format(summaryData.withdrawalAmount, DigitsAmount)}</Cell>
            {allowedCompare && <Cell className='right-align'>{NumberFormat.format(summaryData.compareWithdrawalAmount, DigitsAmount)}</Cell>}
            {allowedCompare && <Cell className={`right-align ${colorRate}`}>{displayRate}</Cell>}
        </Row>)
    }

    const _renderTotalUsersRow = () => {
        const roundRate = NumberFormat.round(summaryData.withdrawalUsersChangeRate, 0);
        const displayRate = NumberHelper.displayRate(roundRate);
        const colorRate = NumberHelper.getColorRate(roundRate);

        return (<Row style={StyleRow}>
            <Cell className='left-align highlight-cell'>{LangHelper.getSingleResource('TotalWithdrawalUsers')}</Cell>
            <Cell className='right-align'>{summaryData.withdrawalUsers === 0 ? '-' : NumberFormat.format(summaryData.withdrawalUsers, 0)}</Cell>
            {allowedCompare &&<Cell className='right-align'>{summaryData.compareWithdrawalUsers === 0 ? '-' : NumberFormat.format(summaryData.compareWithdrawalUsers, 0)}</Cell>}
            {allowedCompare && <Cell className={`right-align ${colorRate}`}>{displayRate}</Cell>}
        </Row>)
    }

    const _renderTotalData = () => {
        const totalAmountRow = _renderTotalAmountRow();
        const totalUsersRow = _renderTotalUsersRow();
        return (<div className="summary-table">
            <Table
                minWidth={500}
                maxWidth={document.body.clientWidth}
                autoWidth={true}
                autoHeight={true}
                header={_header}
                body={[totalAmountRow, totalUsersRow]}
                containerPadding={70}
            />
        </div>)
    };

    return (
        <Widget title={LangHelper.getSingleResource('Summary')} isLoading={isLoading}>
            {summaryData && <div className="summary-container">
                {_renderTotalData()}
            </div>}
        </Widget>
    )
}

export default React.memo(WithdrawalAmountSummaryWidget);