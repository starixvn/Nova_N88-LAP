import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import MultipleSelect from '@9softstudio/react-multiselect'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import UserGuide from '@jsroot/components/UserGuide';
import LangHelper from '@jsroot/lib/langHelper';
import { GroupByOptionAllowByPermission, GroupByOptionAllowQuickDownload, DefaultDataViewFull } from '../../constants/filterConsts';
import GroupHelper from '../../libs/helpers/groupHelper';
import { displayedColumns as DefaultDisplayedColumns } from '../../constants/gridContants';
import AppData from '@jsroot/lib/AppData'
import Select from 'react-select'

export const GroupFilter = props => {

    const { setSelectedGroupByOption, selectedGroupByOption, userGuideContent, onSubmit, onQuickDownload, isDisabledSubmit,
        displayedColumns, setDisplayedColumns, getUserGuideContent, selectedDataView, setSelectedDataView } = props;

    const allowedGroupByOptions = React.useMemo(() => GroupByOptionAllowByPermission, []);
    const isDisabledQuickDownload = React.useMemo(() =>
        isDisabledSubmit || !GroupByOptionAllowQuickDownload.some(_ => _ === selectedGroupByOption)
        || (AppData.dataView && selectedDataView != DefaultDataViewFull)
        , [selectedGroupByOption, isDisabledSubmit, selectedDataView]);

    const _handleChangeDisplayedColumn = (currentItem, selectedItemsKey) => {
        const selectedKeyList = selectedItemsKey.split(',');
        const newColumnList = displayedColumns.map(item => {
            const isShow = selectedKeyList.indexOf(item.key) !== -1;
            return item.show === isShow ? item : { ...item, show: isShow };
        })
        setDisplayedColumns(newColumnList);
    }

    const _handleChangeDataView = (item) => {
        setSelectedDataView(item.value);
    }

    const _renderViewColumnSelectList = () => {
        return (
            <MultipleSelect id="ddlViewColumn"
                language={LangHelper.currentLanguage}
                dataSource={displayedColumns}
                keyField={"key"}
                valueField={"name"}
                statusField={"show"}
                onChange={_handleChangeDisplayedColumn} />)
    }

    const _renderDataViewSelectList = () => {
        return (
            <Select key="ddlDataView"
                className="ddlDataView"
                value={selectedDataView}
                options={AppData.dataViewList}
                onChange={_handleChangeDataView}
            />)
    }

    const _handleChangeGroupBy = React.useCallback(selectedGroupBy => {
        setSelectedGroupByOption(selectedGroupBy)
        const newDisplayedColumns = GroupHelper.getDislayedColumns(DefaultDisplayedColumns, selectedGroupBy)
        setDisplayedColumns(newDisplayedColumns)
    }, [])

    const showUserGuide = () => {
        if (!userGuideContent || !userGuideContent.length) {
            getUserGuideContent('WinLossAnalysis');
        }
    }

    const _renderUserGuide = () => {
        return (<UserGuide
            title={LangHelper.getSingleResource("UserGuide")}
            contentTitle={LangHelper.getSingleResource("WinLossAnalysis")}
            onClick={showUserGuide}
            content={userGuideContent} />)
    }

    const _renderNote = () => {
        return (<div className="row ddlDataViewNote">
            <p> {LangHelper.getSingleResource('Note')}: {LangHelper.getSingleResource('HouseWinLossNote')}</p>
        </div>
        )
    }

    return (
        <CollapsiblePanel className="group-filter page-filter" stickyFooter={<div>{_renderUserGuide()}</div>}>
            <div className="form-group">
                <label className="label-text">{LangHelper.getSingleResource("GroupBy") + ":"}</label>
                <RadioGroup
                    name={'filterGroupBy'}
                    value={selectedGroupByOption}
                    options={allowedGroupByOptions}
                    onChange={_handleChangeGroupBy}
                />
            </div>
            <div className="form-group">
                <label className="label-text">{LangHelper.getSingleResource("ViewColumn")}</label>
                {_renderViewColumnSelectList()}
            </div>
            {AppData.dataView &&
                <div className="form-group">
                    <label className="label-text">{LangHelper.getSingleResource("DataView")}</label>
                    {_renderDataViewSelectList()}
                </div>
            }
            <div className="form-group">
                <div className="button-group">
                    <button type="button" className="btn btn-submit" disabled={isDisabledSubmit} onClick={onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                </div>
            </div>
            {allowedGroupByOptions.some(_ => GroupByOptionAllowQuickDownload.includes(_.value)) && <div className="form-group">
                <div className="button-group">
                    <button type="button" className="btn" disabled={isDisabledQuickDownload} onClick={onQuickDownload}>{LangHelper.getSingleResource("Download")}</button>
                </div>
            </div>}
            {AppData.dataView && _renderNote()}
        </CollapsiblePanel>
    )
}

function mapDispatchToProps(dispatch) {
    const { setSelectedGroupByOption, setDisplayedColumns, getUserGuideContent, setSelectedDataView } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedGroupByOption,
        setDisplayedColumns,
        getUserGuideContent,
        setSelectedDataView
    }), dispatch)
}

function mapStateToProps(state) {
    const { selectedGroupByOption, displayedColumns, userGuideContent, selectedDataView } = state;
    return Object.assign({}, {
        selectedGroupByOption,
        displayedColumns,
        userGuideContent,
        selectedDataView
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupFilter));