import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../../actions';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import MultipleSelect from '@9softstudio/react-multiselect'
import RadioGroup from '@jsroot/components/radio/RadioGroup';
import UserGuide from '@jsroot/components/UserGuide';
import LangHelper from '@jsroot/lib/langHelper';
import { GroupByOptions, GroupByOptionAllowQuickDownload, SupportClosingFromDate } from '../../constants/filterConsts';
import GroupHelper from '../../libs/helpers/groupHelper';
import { displayedColumns as DefaultDisplayedColumns } from '../../constants/gridContants';

export const GroupFilter = props => {

    const { setSelectedGroupByOption, selectedGroupByOption, userGuideContent, onSubmit, onQuickDownload, isDisabledSubmit,
        displayedColumns, setDisplayedColumns, getUserGuideContent } = props;
        
    const isDisabledQuickDownload = React.useMemo(() => isDisabledSubmit || !GroupByOptionAllowQuickDownload.some(_ => _ === selectedGroupByOption), [selectedGroupByOption, isDisabledSubmit]);

    const _handleChangeDisplayedColumn = (currentItem, selectedItemsKey) => {
        const selectedKeyList = selectedItemsKey.split(',');
        const newColumnList = displayedColumns.map(item => {
            const isShow = selectedKeyList.indexOf(item.key) !== -1;
            return item.show === isShow ? item : { ...item, show: isShow };
        })
        setDisplayedColumns(newColumnList);
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

    return (
        <CollapsiblePanel className="group-filter page-filter" stickyFooter={<div>{_renderUserGuide()}</div>}>
            <div className="form-group">
                <label className="label-text">{LangHelper.getSingleResource("GroupBy") + ":"}</label>
                <RadioGroup
                    name={'filterGroupBy'}
                    value={selectedGroupByOption}
                    options={GroupByOptions}
                    onChange={_handleChangeGroupBy}
                />
            </div>
            <div className="form-group">
                <label className="label-text">{LangHelper.getSingleResource("ViewColumn")}</label>
                {_renderViewColumnSelectList()}
            </div>
            <div className="form-group">
                <div className="button-group">
                    <button type="button" className="btn btn-submit" disabled={isDisabledSubmit} onClick={onSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                </div>
            </div>
            <div className="form-group">
                <div className="button-group">
                    <button type="button" className="btn" disabled={isDisabledQuickDownload} onClick={onQuickDownload}>{LangHelper.getSingleResource("Download")}</button>
                </div>
            </div>
            <div className="row">
                <div className="col-1 note" style={{ flex: "0 0 4%" }}>
                    {LangHelper.getSingleResource('Note')}:
                    </div>
                <div className="col-9 note">
                    {LangHelper.getSingleResource('NoteReportGrossRevenue')}
                    <br />
                    {LangHelper.getSingleResource('NoteReportDepositAndWithdrawal')}
                    <br />
                    {LangHelper.getSingleResource('NoteSupportClosingBalance').replace('{0}', SupportClosingFromDate)}
                </div>
            </div>
        </CollapsiblePanel>
    )
}

function mapDispatchToProps(dispatch) {
    const { setSelectedGroupByOption, setDisplayedColumns, getUserGuideContent } = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setSelectedGroupByOption,
        setDisplayedColumns,
        getUserGuideContent
    }), dispatch)
}

function mapStateToProps(state) {
    const { selectedGroupByOption, displayedColumns, userGuideContent } = state;
    return Object.assign({}, {
        selectedGroupByOption,
        displayedColumns,
        userGuideContent
    })
}


export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GroupFilter));