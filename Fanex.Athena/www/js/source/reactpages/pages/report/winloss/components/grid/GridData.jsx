import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '@9softstudio/react-grid';
import ActionCreators from '../../actions';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import GridHelper from '../../libs/helpers/gridHelper';
import QueryHelper from '../../libs/helpers/queryHelper';
import CollectionHelper from '../../libs/helpers/collectionHelper';

const MAX_WIDTH_PAGE = 1920;

export const GridData = props => {

    const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);

    const { gridData, displayedColumns, pagingOption, requestParam, isLoading, setGridData, fetchReportData } = props;
    const { dataList, totalData } = gridData;

    if (!dataList) {
        return null;
    }
    if (!dataList.length) {
        return <NoDataTitle />;
    }

    const _handleSort = useCallback((sortBy, sortType) => {
        const originalDataList = GridHelper.resetGridDataList(dataList);
        const sortedOriginalDataList = CollectionHelper.sort(originalDataList, sortBy, sortType);
        const newGridData = {
            ...gridData,
            ...{ dataList: sortedOriginalDataList }
        }
        setGridData(newGridData);
    })

    const _handlePaging = useCallback((pageIndex, pageSize) => {
        const params = {
            ...requestParam,
            pageIndex,
            pageSize
        }
        fetchReportData(params, QueryHelper.callBackToUpdatePagingOption(pageIndex, pageSize));
    })

    const objectColumns = useMemo(() => GridHelper.toObjectColumns(displayedColumns), [displayedColumns]);
    const header = useMemo(() => GridHelper.renderHeader(objectColumns), [objectColumns]);
    const body = useMemo(() => GridHelper.renderBody(dataList, objectColumns), [dataList, objectColumns]);
    const footer = useMemo(() => GridHelper.renderFooter(totalData, objectColumns), [totalData, objectColumns]);

    return (
        <React.Fragment>
            <Table minWidth={650}
                autoWidth={true}
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
    const { setPagingOption, setGridData, fetchReportData } = ActionCreators;
    return bindActionCreators({ setPagingOption, setGridData, fetchReportData }, dispatch);
}

function mapStateToProps(state) {
    const { gridData, displayedColumns, requestParam, pagingOption, isLoading } = state;
    return Object.assign({}, { gridData, displayedColumns, requestParam, pagingOption, isLoading });
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GridData));


