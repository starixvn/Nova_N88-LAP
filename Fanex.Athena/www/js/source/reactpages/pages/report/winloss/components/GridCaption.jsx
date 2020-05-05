import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReportTitle from '@jsroot/components/ReportTitle';
import MultipleSelect from '@9softstudio/react-multiselect';
import LangHelper from '@jsroot/lib/langHelper';
import { ActionCreators } from '../actions';

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
        const { selectedBaseCurrency } = this.props;
        return (<span key="searchResult">{`
        ${LangHelper.getSingleResource('WinLossReport')}:
         ${'1/23/123'} - ${'12/23/1203'},
          ${LangHelper.getSingleResource('DisplayCurrency')}:  ${selectedBaseCurrency}`}
        </span>);
    }

    _buildRightPart() {
        return (
            <span className="caret-block">
                {this._buildDisplayedColumnList()}
                <span className="icon-excel-wrapper" onClick={() => { }}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>
        )
    }

    // handleExportExcel = () => {
    //     const { playerList, param, displayedColumnList, exportExcel, selectedPlayer } = this.props;
    //     if (displayedColumnList.filter(x => x.show).length === 0) {
    //         window.alert(LangHelper.getSingleResource("NoInfo"));
    //         return;
    //     }

    //     const displayedColumn = buildDisplayedColumnObject(displayedColumnList);
    //     const dataList = selectedPlayer ? [playerList.find(item => item.IbcCustId === selectedPlayer.ibcCustId)] : playerList;

    //     exportExcel(dataList, param, displayedColumn);
    //}

    render() {
        const Content = <>{this._buildLeftPart()}{this._buildRightPart()}</>;
        return (<ReportTitle tag="div" content={Content} />)
    }
}

function mapDispatchToProps(dispatch) {
    const { setDisplayedColumns } = ActionCreators;
    return bindActionCreators(Object.assign({}, { setDisplayedColumns }), dispatch);
}

function mapStateToProps(state) {
    const { selectedBaseCurrency, displayedColumns } = state;
    return Object.assign({}, { selectedBaseCurrency, displayedColumns });
};

export default connect(mapStateToProps, mapDispatchToProps)(GridCaption);