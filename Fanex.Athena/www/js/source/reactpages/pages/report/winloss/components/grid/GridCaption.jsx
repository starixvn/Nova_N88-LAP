import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import QueryService from '../../libs/queryService';
import GridHelper from '../../libs/helpers/gridHelper';
import AppData from '@jsroot/lib/AppData'

export class GridCaption extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleExportExcel = event => {
        event.preventDefault();
        const { requestParam, toggleLoader, sortOption } = this.props;
        if (!requestParam) {
            return;
        }
        toggleLoader(true)
        const { displayedColumns, ...restRequestParam } = requestParam;
        const params = {
            ...restRequestParam,
            sortById: sortOption.sortBy,
            isSortAsc: sortOption.sortType === 'asc',
            orderCols: GridHelper.getOrderCols(displayedColumns)
        }
        QueryService.exportReportData(params, () => toggleLoader(false));
    }

    _buildLeftPart() {
        const { baseCurrency, fromDate, toDate, dataView } = this.props.requestParam;
        return (<span key="searchResult">{`
            ${LangHelper.getSingleResource('WinLossAnalysis')},
            ${fromDate} - ${toDate},
            ${LangHelper.getSingleResource('Viewin').replace('{0}', baseCurrency)}${AppData.dataView ? ", " + AppData.dataViewList.find(view => view.value === dataView).label : ''}`}
        </span>);
    }

    _buildRightPart() {
        return (
            <span className="caret-block">
                <span className="icon-excel-wrapper" onClick={this._handleExportExcel}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>
        )
    }

    render() {
        if (!this.props.gridData.dataList) {
            return null;
        }

        const Content = <>{this._buildLeftPart()}{this._buildRightPart()}</>;
        return (<ReportTitle tag="div" content={Content} />)
    }
}

function mapDispatchToProps(dispatch) {
    const { toggleLoader } = ActionCreators;
    return bindActionCreators(Object.assign({}, { toggleLoader }), dispatch);
}

function mapStateToProps(state) {
    const { selectedBaseCurrency, gridData, requestParam, pagingOption, sortOption } = state;
    return Object.assign({}, { selectedBaseCurrency, gridData, requestParam, pagingOption, sortOption });
}

export default connect(mapStateToProps, mapDispatchToProps)(GridCaption);