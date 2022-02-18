import React, { useEffect, useMemo, useState } from 'react';
import { Table, Row, Cell, HeaderCell, HeaderRow} from '@9softstudio/react-grid';
import LangHelper from '@jsroot/lib/langHelper';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import { defaultGridData, defaultState } from '../libs/constants';
import QueryService from '../libs/queryService';
import DecimalCell from '../../../components/grid/DecimalCell';

export const GridData = ({ setLoading, sortOption, setSortOption, pagingOption, setPagingOption }) => {
    const [gridData, setGridData] = useState(defaultGridData);

    useEffect(() => {
        fetchBetList({
            ...defaultState,
            sortById: sortOption.sortBy,
            isSortAsc: sortOption.sortType === 'asc'
        },
        response => {
                const { totalRows } = response;
                setPagingOption({ ...pagingOption, TotalItem: totalRows });
            })
    }, [])

    const { dataList, totalData } = gridData;

    const fetchBetList = async (params, after) => {
        setLoading(true);
        const response = await QueryService.getNonSportsBetList(params);
        const { dataList, totalData } = response;
        setLoading(false);
        setGridData({ dataList, totalData });
        after && after(response)
    }

    const _handleSort = (sortBy, sortType) => {
        const params = {
            ...defaultState,
            ...pagingOption,
            sortbyId: sortBy,
            isSortAsc: sortType === 'asc'
        }

        fetchBetList(params,
            _ => {
                setSortOption({ sortBy, sortType });
            })
    }

    const _handlePaging = (pageIndex, pageSize) => {
        const params = {
            ...defaultState,
            sortbyId: sortOption.sortBy,
            isSortAsc: sortOption.sortType === 'asc',
            pageIndex,
            pageSize
        }

        fetchBetList(params,
            response => {
                setPagingOption({ ...pagingOption, PageIndex: pageIndex, PageSize: pageSize, TotalItem: response.totalRows });
            })
    }

    const _header = useMemo(() => {
        return (<HeaderRow style={{ height: '35px' }}>
            <HeaderCell colWidth={30}>{'#'}</HeaderCell>
            <HeaderCell sortBy={1} colWidth={100}>{LangHelper.getSingleResource('RefNo')}</HeaderCell>
            <HeaderCell sortBy={2} colWidth={60}>{LangHelper.getSingleResource('TransTime')}</HeaderCell>
            <HeaderCell sortBy={3} colWidth={70}>{LangHelper.getSingleResource('Stake')}</HeaderCell>
            <HeaderCell sortBy={4} colWidth={70}>{LangHelper.getSingleResource('PlayerWinloss')}</HeaderCell>
            <HeaderCell sortBy={5} colWidth={70}>{LangHelper.getSingleResource('ProgressiveWin')}</HeaderCell>
            <HeaderCell sortBy={6} colWidth={70}>{LangHelper.getSingleResource('ProgressiveBet')}</HeaderCell>
            <HeaderCell sortBy={7} colWidth={50}>{LangHelper.getSingleResource('GGR')}</HeaderCell>
            <HeaderCell sortBy={8} colWidth={40}>{LangHelper.getSingleResource('Status')}</HeaderCell>
        </HeaderRow>)

    }, [])

    const _body = useMemo(() => {
        return dataList.map(item => <Row style={{ height: '25px' }}>
            <Cell className="center-align">{item.rowNumber}</Cell>
            <Cell className="center-align">{item.refNo}</Cell>
            <Cell className="center-align">{item.transTime}</Cell>
            <DecimalCell className="right-align" value={item.stake} disableWarning={true} />
            <DecimalCell className="right-align" value={item.playerWinLoss} disableWarning={true} />
            <DecimalCell className="right-align" value={item.progressiveWin} disableWarning={true} />
            <DecimalCell className="right-align" value={item.progressiveBet} disableWarning={true} />
            <DecimalCell className="right-align" value={item.ggr} />
            <Cell className="center-align">{item.ticketStatus}</Cell>
        </Row>)
    }, [dataList])

    const _footer = useMemo(() => {
        return <Row className="fixed-table-grant-total" key="totalRow">
        <Cell />    
        <Cell />   
        <Cell />    
        <Cell key="total" className="right-align" >
            {LangHelper.getSingleResource("GrandTotal")}
        </Cell>
        <DecimalCell className="right-align" value={totalData.playerWinLoss} disableWarning={true} />
        <DecimalCell className="right-align" value={totalData.progressiveWin} disableWarning={true} />
        <DecimalCell className="right-align" value={totalData.progressiveBet} disableWarning={true} />
        <DecimalCell className="right-align" value={totalData.ggr} />
        <Cell />    
    </Row>
    }, [totalData])

    return (
       <React.Fragment>
            {dataList.length > 0 ? <Table minWidth={500}
                autoWidth={true}
                autoHeight={true}
                header={_header}
                body={_body}
                footer={_footer}
                isPaging={true}
                pageOption={pagingOption}
                onPaging={_handlePaging}
                onSort={_handleSort}
                containerPadding={30}
                shouldResetScrollPosition={true}
            /> : <NoDataTitle />}
        </React.Fragment>
    );
}

export default React.memo(GridData);


