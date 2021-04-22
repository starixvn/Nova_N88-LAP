import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import { DetailNRUGridColumns, DetailNRUGridConfig, DefaultPagingOption, StyleRow , DigitsAmount} from '../../../../../constants/gridConst';

const NewlyRegisterUsersDetailWidget = ({ reportDate, baseCurrency, selectedBrand, sortInfo, onSort }) => {
    const [isLoading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);

    useEffect(() => {
        const apiParams = DataService.getNewlyRegisterUsersDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        setTimeout(() => {
            _fetchData(apiParams, null, data => {
                const newPagingOption = getNewPagingOption(null, null, data.totalRows);
                setPagingOption(newPagingOption);
            })
        }, 100)
    }, [reportDate]);

    const _fetchData = (params, before, after) => {
        QueryService.fetchNewlyRegisterUsersDetailData(params,
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
        const apiParams = DataService.getNewlyRegisterUsersDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows)
            setPagingOption(newPagingOption);
        });
        onSort && onSort(sortInfo);
    }

    const _handlePaging = (pageIndex, pageSize) => {
        const apiParams = DataService.getNewlyRegisterUsersDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption: { PageIndex: pageIndex, PageSize: pageSize }, sortInfo });
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
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.rowId].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.rowId].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.bonusCode].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.bonusCode].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.username].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.username].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.currency].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.currency].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.registeredDateDisplay].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.registeredDateDisplay].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.signupUrl].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.signupUrl].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.affCode].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.affCode].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.isDeposit].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.isDeposit].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.firstDepositAmount].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.firstDepositAmount].name}</HeaderCell>
            <HeaderCell {...DetailNRUGridConfig[DetailNRUGridColumns.totalDepositAmount].attributes}>{DetailNRUGridConfig[DetailNRUGridColumns.totalDepositAmount].name}</HeaderCell>
        </HeaderRow>);
    }

    const _renderBody = () => {
        const { dataList } = detailData;
        return dataList.map(item => <Row style={StyleRow}>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.rowId].attributes}>{item[DetailNRUGridColumns.rowId]} </Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.bonusCode].attributes} >{item[DetailNRUGridColumns.bonusCode] || LangHelper.getSingleResource('None')}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.username].attributes} >{item[DetailNRUGridColumns.username]}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.currency].attributes} >{item[DetailNRUGridColumns.currency]}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.registeredDateDisplay].attributes}>{item[DetailNRUGridColumns.registeredDateDisplay]}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.signupUrl].attributes}>{item[DetailNRUGridColumns.signupUrl] || LangHelper.getSingleResource('None')}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.affCode].attributes} >{item[DetailNRUGridColumns.affCode]}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.isDeposit].attributes} >{item[DetailNRUGridColumns.isDeposit] ? LangHelper.getSingleResource('Yes') : LangHelper.getSingleResource('No')}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.firstDepositAmount].attributes}>{NumberFormat.format(item[DetailNRUGridColumns.firstDepositAmount], DigitsAmount)}</Cell>
            <Cell {...DetailNRUGridConfig[DetailNRUGridColumns.totalDepositAmount].attributes}>{NumberFormat.format(item[DetailNRUGridColumns.totalDepositAmount], DigitsAmount)}</Cell>
        </Row>)
    }

    return (
        <Widget title={LangHelper.getSingleResource('Details')} isLoading={isLoading}>
            {detailData &&
                <>
                    <Pager pageOption={pagingOption} onPaging={_handlePaging} />
                    <Table
                        minWidth={650}
                        autoWidth={true}
                        maxWidth={window.innerWidth}
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

export default React.memo(NewlyRegisterUsersDetailWidget);