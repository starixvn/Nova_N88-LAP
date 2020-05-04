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
        const { displayedColumnList, setDisplayedColumnList } = this.props;
        const selectedKeyList = selectedItemsKey.split(',');
        const newColumnList = displayedColumnList.map(item => {
            const isShow = selectedKeyList.indexOf(item.key) !== -1;

            return item.show === isShow ? item : { ...item, show: isShow };
        })

        setDisplayedColumnList(newColumnList);
    }

    _buildDisplayedColumnList() {
        return (
            <MultipleSelect id="columnList" className="selection-column"
                language={LangHelper.currentLanguage}
                dataSource={this.props.displayedColumnList}
                keyField={"key"}
                valueField={"value"}
                statusField={"show"}
                onChange={this.handleChangeDisplayedColumn} />
        )
    }

    // _buildLeftPart() {
    //     const { selectedPlayer } = this.props;
    //     if (selectedPlayer) {
    //         const {userName, currency} = selectedPlayer;
    //         return (
    //             <>
    //                 <span className="link" onClick={() => this.props.setSelectedPlayer(null)}>{LangHelper.getSingleResource('PreviousSearchResult')}</span>
    //                 <span><i className="chevron right icon-separator"></i> {LangHelper.getSingleResource('Player')}: {userName} {currency && `(${currency})`}</span>
    //             </>
    //         )
    //     }
    //     else {
    //         const { playerCount } = this.props;
    //         return (<span key="searchResult">{`${LangHelper.getSingleResource('SearchResult')}: ${playerCount} ${LangHelper.getSingleResource('Player')}(s)`}</span>);
    //     }
    // }

    _buildRightPart() {
        return (
            <span className="caret-block">
                {this._buildDisplayedColumnList()}
                <span className="icon-excel-wrapper" onClick={() => {}}>
                    <i className="icon-excel" title={LangHelper.getSingleResource('ExportToExcel')}></i>
                </span>
            </span>
        )
    }

    // handleExportExcel = () => {aaaaa
    //     const { playerList, param, displayedColumnList, exportExcel, selectedPlayer } = this.props;
    //     if (displayedColumnList.filter(x => x.show).length === 0) {
    //         window.alert(LangHelper.getSingleResource("NoInfo"));
    //         return;
    //     }

    //     const displayedColumn = buildDisplayedColumnObject(displayedColumnList);
    //     const dataList = selectedPlayer ? [playerList.find(item => item.IbcCustId === selectedPlayer.ibcCustId)] : playerList;

    //     exportExcel(dataList, param, displayedColumn);
    // }

    render() {
        const Content = <>{}{this._buildRightPart()}</>;
        return (<ReportTitle tag="div" content={Content} />)
    }
}

function mapDispatchToProps(dispatch) {
    const { exportExcel } = ActionCreators;
    return bindActionCreators({  exportExcel }, dispatch);
}

function mapStateToProps(state) {
    const { } = state;
    return Object.assign({}, { });
};

export default connect(mapStateToProps, mapDispatchToProps)(GridCaption);