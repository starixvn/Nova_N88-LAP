import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import MultipleSelect from '@9softstudio/react-multiselect';
import LangHelper from '@jsroot/lib/langHelper';
import ActionCreators from '../../actions';
import QueryService from '../../libs/queryService';

export class GridCaption extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChangeDisplayedColumn = (currentItem, selectedItemsKey) => {
        const { displayedColumns, setDisplayedColumns } = this.props;
        const selectedKeyList = selectedItemsKey.split(',');
        const newColumnList = displayedColumns.map(item => {
            const isShow = selectedKeyList.indexOf(item.key) !== -1;
            return item.show === isShow ? item : { ...item, show: isShow };
        })
        setDisplayedColumns(newColumnList);
    }

    handleExportExcel = event => {
        event.preventDefault();
        const { requestParam, toggleLoader, pagingOption, sortOption } = this.props;
        if (!requestParam) {
            return;
        }
        toggleLoader(true)
        const params = {
            ...requestParam,
            ...sortOption,
            ...{
                pageIndex: pagingOption.PageIndex,
                pageSize: pagingOption.PageSize,
            }
        }
        QueryService.exportReportData(params, () => toggleLoader(false));
    }

    _buildDisplayedColumnList() {
        return (
            <MultipleSelect id="columnList" className="selection-column"
                language={LangHelper.currentLanguage}
                dataSource={this.props.displayedColumns}
                keyField={"key"}
                valueField={"name"}
                statusField={"show"}
                onChange={this.handleChangeDisplayedColumn} />
        )
    }

    _buildLeftPart() {
        const { baseCurrency, fromDate, toDate } = this.props.requestParam;
        return (<span key="searchResult">{`
        ${LangHelper.getSingleResource('WinLossAnalysis')},
         ${fromDate} - ${toDate},
          ${LangHelper.getSingleResource('Viewin').replace('{0}', baseCurrency)}`}
        </span>);
    }

    _buildRightPart() {
        return (
            <span className="caret-block">
                {this._buildDisplayedColumnList()}
                <span className="icon-excel-wrapper" onClick={this.handleExportExcel}>
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
    const { setDisplayedColumns, toggleLoader } = ActionCreators;
    return bindActionCreators(Object.assign({}, { setDisplayedColumns, toggleLoader }), dispatch);
}

function mapStateToProps(state) {
    const { selectedBaseCurrency, displayedColumns, gridData, requestParam, pagingOption, sortOption } = state;
    return Object.assign({}, { selectedBaseCurrency, displayedColumns, gridData, requestParam, pagingOption, sortOption });
};

export default connect(mapStateToProps, mapDispatchToProps)(GridCaption);