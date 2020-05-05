import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from '@9softstudio/react-grid';
import { ActionCreators } from '../actions';
import NoDataTitle from '@jsroot/components/NoDataTitle';
import GridHelper from '../libs/helpers/gridHelper';

const MAX_WIDTH_PAGE = 1920;

export const DataGrid = (props) => {
    const MAX_WIDTH = Math.min(document.body.clientWidth, MAX_WIDTH_PAGE);
    const { displayedColumns  } = props;

    const gridData = () => {
        const data = []
        for(let i = 0; i < 100; i++) {
            data.push({ group: 'adsa' + i, turnover: 12312321.1232, ggr: 12312321.12412412, betCount: 123123, betAmount: 123123, uniquePlayers: 123123, margin: 35 })
        }
        return data;
    } 
       
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
                body={GridHelper.renderBody(gridData(), displayedColumns)}
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
    const { displayedColumns } = state;
    return Object.assign({}, { displayedColumns });
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(DataGrid));


