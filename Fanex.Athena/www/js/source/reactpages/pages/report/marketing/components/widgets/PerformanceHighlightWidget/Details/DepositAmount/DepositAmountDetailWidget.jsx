import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import { DetailDepositAmountGridColumns, DetailDepositAmountGridConfig, DefaultPagingOption, StyleRow , DigitsAmount} from '../../../../../constants/gridConst';

const DepositAmountDetailWidget = ({ reportDate, baseCurrency, selectedBrand, sortInfo, onSort }) => {
    const [isLoading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);

    useEffect(() => {
        const apiParams = DataService.getDepositAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows);
            setPagingOption(newPagingOption);
        });
    }, [reportDate]);

    const _fetchData = (params, before, after) => {
        QueryService.fetchDepositAmountDetailData(params,
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
        const apiParams = DataService.getDepositAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows)
            setPagingOption(newPagingOption);
        });
        onSort && onSort(sortInfo);
    }

    const _handlePaging = (pageIndex, pageSize) => {
        const apiParams = DataService.getDepositAmountDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption: { PageIndex: pageIndex, PageSize: pageSize }, sortInfo });
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
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.rowId].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.rowId].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.username].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.username].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.registeredDateDisplay].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.registeredDateDisplay].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.signupUrl].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.signupUrl].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.firstDepositAmount].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.firstDepositAmount].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.numberOfDeposits].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.numberOfDeposits].name}</HeaderCell>
            <HeaderCell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.depositAmount].attributes}>{DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.depositAmount].name}</HeaderCell>
        </HeaderRow>);
    }

    const _renderBody = () => {
        const { dataList } = detailData;
        return dataList.map(item => <Row style={StyleRow}>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.rowId].attributes}>{item[DetailDepositAmountGridColumns.rowId]} </Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.username].attributes} >{item[DetailDepositAmountGridColumns.username]}</Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.registeredDateDisplay].attributes}>{item[DetailDepositAmountGridColumns.registeredDateDisplay]}</Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.signupUrl].attributes}>{item[DetailDepositAmountGridColumns.signupUrl]}</Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[DetailDepositAmountGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.numberOfDeposits].attributes} >{NumberFormat.format(item[DetailDepositAmountGridColumns.numberOfDeposits], 0)}</Cell>
            <Cell {...DetailDepositAmountGridConfig[DetailDepositAmountGridColumns.depositAmount].attributes}>{NumberFormat.format(item[DetailDepositAmountGridColumns.depositAmount], DigitsAmount)}</Cell>
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

export default React.memo(DepositAmountDetailWidget);