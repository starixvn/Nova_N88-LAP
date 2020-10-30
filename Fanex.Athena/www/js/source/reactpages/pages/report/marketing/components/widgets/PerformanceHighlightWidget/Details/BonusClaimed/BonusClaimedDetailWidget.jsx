import React, { useState, useEffect } from 'react';
import LangHelper from '@jsroot/lib/langHelper';
import NumberFormat from '@jsroot/lib/numberFormat';
import Widget from '../../../../common/Widget';
import DataService from '../../../../../libs/services/dataService';
import { Table, Pager, HeaderRow, HeaderCell, Row, Cell } from '@9softstudio/react-grid';
import QueryService from '../../../../../libs/services/queryService';
import { DetailBonusClaimedGridColumns, DetaiBonusClaimedGridConfig, DefaultPagingOption, StyleRow , DigitsAmount} from '../../../../../constants/gridConst';

const BonusClaimedDetailWidget = ({ reportDate, baseCurrency, selectedBrand, sortInfo, onSort }) => {
    const [isLoading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [pagingOption, setPagingOption] = useState(DefaultPagingOption);

    const MAX_WIDTH = Math.min(document.body.clientWidth, 1360);

    useEffect(() => {
        const apiParams = DataService.getBonusClaimedDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows);
            setPagingOption(newPagingOption);
        });
    }, [reportDate]);

    const _fetchData = (params, before, after) => {
        QueryService.fetchBonusClaimedDetailData(params,
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
        const apiParams = DataService.getBonusClaimedDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption, sortInfo });
        _fetchData(apiParams, null, data => {
            const newPagingOption = getNewPagingOption(null, null, data.totalRows)
            setPagingOption(newPagingOption);
        });
        onSort && onSort(sortInfo);
    }

    const _handlePaging = (pageIndex, pageSize) => {
        const apiParams = DataService.getBonusClaimedDetailAPIParams({ reportDate, baseCurrency, selectedBrand, pagingOption: { PageIndex: pageIndex, PageSize: pageSize }, sortInfo });
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
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.rowId].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.rowId].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusCode].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusCode].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.username].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.username].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.registeredDateDisplay].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.registeredDateDisplay].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.depositAmount].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.depositAmount].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.withdrawalAmount].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.withdrawalAmount].name}</HeaderCell>
            <HeaderCell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusAmount].attributes}>{DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusAmount].name}</HeaderCell>
        </HeaderRow>);
    }

    const _renderBody = () => {
        const { dataList } = detailData;
        return dataList.map(item => <Row style={StyleRow}>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.rowId].attributes}>{item[DetailBonusClaimedGridColumns.rowId]} </Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusCode].attributes} >{item[DetailBonusClaimedGridColumns.bonusCode] || LangHelper.getSingleResource('None')}</Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.username].attributes} >{item[DetailBonusClaimedGridColumns.username]}</Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.registeredDateDisplay].attributes}>{item[DetailBonusClaimedGridColumns.registeredDateDisplay]}</Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.depositAmount].attributes}>{item[DetailBonusClaimedGridColumns.depositAmount] === 0 ? '-' : NumberFormat.format(item[DetailBonusClaimedGridColumns.depositAmount], DigitsAmount)}</Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.withdrawalAmount].attributes} >{item[DetailBonusClaimedGridColumns.withdrawalAmount] === 0 ? '-' : NumberFormat.format(item[DetailBonusClaimedGridColumns.withdrawalAmount], DigitsAmount)}</Cell>
            <Cell {...DetaiBonusClaimedGridConfig[DetailBonusClaimedGridColumns.bonusAmount].attributes}>{NumberFormat.format(item[DetailBonusClaimedGridColumns.bonusAmount], DigitsAmount)}</Cell>
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

export default React.memo(BonusClaimedDetailWidget);