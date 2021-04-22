import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import { DetailWithdrawalAmountGridColumns, DetaiWithdrawalAmountGridConfig, DefaultPagingOption, StyleRow, DigitsAmount } from '../../../../../constants/gridConst';

const WithdrawalAmountDetailWidget = ({ reportDate, baseCurrency, selectedBrand, sortInfo, onSort }) => {
    const [isLoading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);

    const MAX_WIDTH = Math.min(document.body.clientWidth, 1360);

    useEffect(() => {
        const apiParams = DataService.getWithdrawalAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows);
            setPagingOption(newPagingOption);
        });
    }, [reportDate]);

    const _fetchData = (params, before, after) => {
        QueryService.fetchWithdrawalAmountDetailData(params,
            () => {
                before && before()
                setLoading(true)
            },
            response => {
                response.isSuccess && after && after(response.data)
                setDetailData(response.data)
                setLoading(false)
            });
    }

    const _handleSort = (sortBy, sortType) => {
        const sortInfo = {
            sortbyId: sortBy,
            isSortAsc: sortType === 'asc'
        }
        const apiParams = DataService.getWithdrawalAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows)
            setPagingOption(newPagingOption);
        });
        onSort && onSort(sortInfo);
    }

    const _handlePaging = (pageIndex, pageSize) => {
        const apiParams = DataService.getWithdrawalAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption: { PageIndex: pageIndex, PageSize: pageSize }, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(pageIndex, pageSize, data.totalRows)
            setPagingOption(newPagingOption);
        });
    }

    const getNewPagingOption = (pageIndex, pageSize, totalRows) => {
        return {
            ...pagingOption,
            ...sortInfo,
            ...{
                PageIndex: pageIndex || pagingOption.PageIndex,
                PageSize: pageSize || pagingOption.PageSize,
                TotalItem: totalRows
            }
        }
    }

    const _renderHeader = () => {
        return (<HeaderRow style={StyleRow}>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.rowId].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.rowId].name}</HeaderCell>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.username].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.username].name}</HeaderCell>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.currency].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.currency].name}</HeaderCell>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.registeredDateDisplay].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.registeredDateDisplay].name}</HeaderCell>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.numberOfWithdrawals].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.numberOfWithdrawals].name}</HeaderCell>
            <HeaderCell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.withdrawalAmount].attributes}>{DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.withdrawalAmount].name}</HeaderCell>
        </HeaderRow>);
    }

    const _renderBody = () => {
        const { dataList } = detailData;
        return dataList.map(item => <Row style={StyleRow}>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.rowId].attributes}>{item[DetailWithdrawalAmountGridColumns.rowId]} </Cell>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.username].attributes} >{item[DetailWithdrawalAmountGridColumns.username]}</Cell>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.currency].attributes} >{item[DetailWithdrawalAmountGridColumns.currency]}</Cell>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.registeredDateDisplay].attributes}>{item[DetailWithdrawalAmountGridColumns.registeredDateDisplay]}</Cell>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.numberOfWithdrawals].attributes}>{NumberFormat.format(item[DetailWithdrawalAmountGridColumns.numberOfWithdrawals], 0)}</Cell>
            <Cell {...DetaiWithdrawalAmountGridConfig[DetailWithdrawalAmountGridColumns.withdrawalAmount].attributes}>{NumberFormat.format(item[DetailWithdrawalAmountGridColumns.withdrawalAmount], DigitsAmount)}</Cell>
        </Row>)
    }

    return (
        <Widget title={LangHelper.getSingleResource('Details')} isLoading={isLoading}>
            {detailData &&
                <>
                    <Pager pageOption={pagingOption} onPaging={_handlePaging} />
                    <Table minWidth={650}
                        autoWidth={true}
                        maxWidth={document.body.clientWidth}
                        autoHeight={false}
                        bodyHeight={400}
                        header={_renderHeader()}
                        body={_renderBody()}
                        onSort={_handleSort}
                        containerPadding={55}
                        shouldResetScrollPosition={isLoading}
                    />
                </>}
        </Widget>
    )
}

export default React.memo(WithdrawalAmountDetailWidget);