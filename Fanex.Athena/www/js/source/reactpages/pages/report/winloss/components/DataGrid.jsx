import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '@9softstudio/react-grid';
import { ActionCreators } from '../actions';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import AppData from '@jsroot/lib/AppData';
import GridHelper from '../libs/helpers/gridHelper';
import { displayedColumns } from '../constants/gridContants';

const MAX_WIDTH_PAGE = 1920;

export const DataGrid = (props) => {
    const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);
    const {  } = props;

    // if (playerList == null) {
    //     return null;
    // }
    // if (!playerList.length) {
    //     return <NoDataTitle />;
    // }

    const _renderDataSection = () => []

    const _handleSort = (orderCol, sortType) => {
        const sortInfo = GridHelper.getSortInfo(orderCol, sortType);
        const _pagingOption = {
            ...pagingOption,
            ...sortInfo
        }
        const params = {
            ...selectedParams,
            ..._pagingOption
        }
        searchPlayer(selectedTabKey, params, GridHelper.callBackToUpdatePaging({ pagingOption, setPagingOption }));
    }

    return (
        <React.Fragment>
            <Table minWidth={650}
                autoWidth={true}
                maxWidth={MAX_WIDTH}
                autoHeight={true}
                header={GridHelper.renderHeader(displayedColumns)}
                body={_renderDataSection([])}
                containerPadding={30}
                shouldResetScrollPosition={false}
                onSort={_handleSort} />
        </React.Fragment>
    );
}

function mapDispatchToProps(dispatch) {
    const { } = ActionCreators;
    return bindActionCreators({ }, dispatch);
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, {});
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(DataGrid));


