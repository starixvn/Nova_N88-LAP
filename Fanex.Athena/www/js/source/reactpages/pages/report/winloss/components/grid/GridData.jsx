import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '@9softstudio/react-grid';
import ActionCreators from '../../actions';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import GridHelper from '../../libs/helpers/gridHelper';

const MAX_WIDTH_PAGE = 1920;

export const GridData = (props) => {

    const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);

    const { gridData, displayedColumns, pagingOption, requestParam, setPagingOption, setGridData, fetchReportData } = props;
    const { dataList, dataTotal } = gridData;
       
    if (!dataList) {
        return null;
    }
    if (!dataList.length) {
        return <NoDataTitle />;
    }

    const _handleSort = useCallback((sortBy, sortOrder) => {
    })

    const _handlePaging = useCallback((pageIndex, pageSize) => {
        const newPagingOption = {
            ...pagingOption,
            ...{ PageIndex: pageIndex, PageSize: pageSize }
        }

        const params = {
            ...requestParam,
            pageIndex,
            pageSize
        }
        fetchReportData(params);
        setPagingOption(newPagingOption);
    })

    const objectColumns = useMemo(() => GridHelper.toObjectColumns(displayedColumns), [displayedColumns]);
    const headers = useMemo(() => GridHelper.renderHeader(objectColumns), [objectColumns]);
    const body = useMemo(() => GridHelper.renderBody(dataList, objectColumns), [dataList, objectColumns]);
    const footer = useMemo(() => GridHelper.renderFooter(dataTotal, objectColumns), [dataTotal, objectColumns]);

    return (
        <React.Fragment>
            <Table minWidth={650}
                autoWidth={true}
                maxWidth={MAX_WIDTH}
                autoHeight={true}
                header={headers}
                body={body}
                footer={footer}
                isPaging={true}
                pageOption={pagingOption}
                onPaging={_handlePaging}
                onSort={_handleSort}
                containerPadding={30}
                shouldResetScrollPosition={false}
                />
        </React.Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    const { setPagingOption, setGridData, fetchReportData } = ActionCreators;
    return bindActionCreators({ setPagingOption, setGridData, fetchReportData }, dispatch);
}

function mapStateToProps(state) {
    const { gridData, displayedColumns, requestParam, pagingOption } = state;
    return Object.assign({}, { gridData, displayedColumns, requestParam, pagingOption });
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GridData));


