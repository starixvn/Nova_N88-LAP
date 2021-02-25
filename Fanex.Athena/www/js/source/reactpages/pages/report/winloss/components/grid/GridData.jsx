import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '@9softstudio/react-grid';
import ActionCreators from '../../actions';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import GridHelper from '../../libs/helpers/gridHelper';
import QueryHelper from '../../libs/helpers/queryHelper';

const MAX_WIDTH_PAGE = 1920;

export const GridData = props => {

    const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);

    const { gridData, displayedColumns, pagingOption, sortOption, requestParam, isLoading, setGridData, setSortOption, setDisplayedColumns, fetchReportData } = props;
    const { dataList, totalData } = gridData;

    if (!dataList) {
        return null;
    }
    if (!dataList.length) {
        return <NoDataTitle />;
    }

    const _handleSort = useCallback((sortBy, sortType) => {
        const params = {
            ...requestParam,
            ...pagingOption,
            sortbyId: sortBy,
            isSortAsc: sortType === 'asc'
        }
        fetchReportData(params, QueryHelper.callBackToUpdateGridOption(pagingOption.PageIndex, pagingOption.PageSize, sortBy, sortType, false));
    })

    const _handlePaging = useCallback((pageIndex, pageSize) => {
        const params = {
            ...requestParam,
            sortbyId: sortOption.sortBy,
            isSortAsc: sortOption.sortType === 'asc',
            pageIndex,
            pageSize
        }
        fetchReportData(params, QueryHelper.callBackToUpdateGridOption(pageIndex, pageSize, sortOption.sortBy, sortOption.sortType, false));
    })

    const header = useMemo(() => GridHelper.renderHeader(displayedColumns, displayedColumns => setDisplayedColumns(displayedColumns)), [displayedColumns]);
    const body = useMemo(() => GridHelper.renderBody(dataList, displayedColumns), [dataList, displayedColumns]);
    const footer = useMemo(() => GridHelper.renderFooter(totalData, displayedColumns), [totalData, displayedColumns]);

    return (
       <React.Fragment>
            <Table minWidth={500}
                autoWidth={false}
                maxWidth={MAX_WIDTH}
                autoHeight={true}
                header={header}
                body={body}
                footer={footer}
                isPaging={true}
                pageOption={pagingOption}
                onPaging={_handlePaging}
                onSort={_handleSort}
                containerPadding={30}
                shouldResetScrollPosition={isLoading}
            />
        </React.Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    const { setSortOption, setGridData, setDisplayedColumns, fetchReportData } = ActionCreators;
    return bindActionCreators({ setSortOption, setGridData, setDisplayedColumns, fetchReportData }, dispatch);
}

function mapStateToProps(state) {
    const { gridData, displayedColumns, requestParam, pagingOption, sortOption, isLoading } = state;
    return Object.assign({}, { gridData, displayedColumns, requestParam, pagingOption, sortOption, isLoading });
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GridData));


