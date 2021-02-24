import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import LangHelper from '@jsroot/lib/langHelper';
import AppData from '@jsroot/lib/AppData';
import Site from '@jsroot/lib/site';
import ActionCreators from '../actions';
import { DateRange } from '@jsroot/components/date-range';
import MultipleSelect from '@9softstudio/react-multiselect';
import QueryService from '../libs/services/queryService';
import GroupFilter from './filter/GroupFilter';
import { DefaultSummarySortInfo, DefaultSummarySortInfoGroupByDate } from '../constants/gridConst';
import { GroupByOptionIds } from '../constants/filterConsts';

export const FormFilter = props => {
    const { setDateRange, setSelectedBonusName, setSelectedBrand, setSelectedBaseCurrency, setSelectedClaimStatus, setSelectedBonusStatus, setSelectedBonusType, selectedClaimStatus, selectedBonusStatus, selectedBonusType, setGlobalFilter, setCollapseFormFilter,
        dateRange, selectedBonusName, selectedBrand, selectedGroupByOption, selectedBaseCurrency, dropdownOptionsData, setDropdownOptionsData, setSummarySortInfo
    } = props;

    useEffect(() => {
        QueryService.fetchDropdownOptionsData(response => {
            if(response.isSuccess)
            {
                setDropdownOptionsData(response.data);
                setSelectedClaimStatus(response.data.claimStatusList.map(item => item.status && item.key).join(','));
                setSelectedBonusStatus(response.data.bonusStatusList.map(item => item.status && item.key).join(','));
                setSelectedBonusType(response.data.bonusTypeList.map(item => item.status && item.key).join(','));
            }
        });
    }, []);    

    const _onChangeDateRange = (range, isValid = true) => {
        if (isValid) {
            setDateRange(range);
        } else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    const _renderDateFilter = () => {
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={dateRange.fromDate} endDate={dateRange.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                today={dateRange.toDate} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={_onChangeDateRange}
            />
        )
    }

    const _renderBaseCurrencySelectList = () => {
        const baseCurrencyList = AppData.baseCurrencyList;
        return baseCurrencyList && baseCurrencyList.length && (
            <Select instanceId="baseCurrency"
                value={selectedBaseCurrency}
                options={baseCurrencyList}
                onChange={(item) => setSelectedBaseCurrency(item.value)} />
        );
    }

    const _renderBrandSelectList = () => {
        return (
            <Select instanceId="brandList"
                value={selectedBrand}
                options={AppData.brandOptions}
                onChange={(item) => setSelectedBrand(item.value)} />
        );
    }
    
    const _renderBonusStatusSelectList = () => {
        const bonusStatusOptions = dropdownOptionsData.bonusStatusList;
        return bonusStatusOptions && (
            <MultipleSelect id="bonusStatus"
                language={LangHelper.currentLanguage}
                dataSource={bonusStatusOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => setSelectedBonusStatus(selectedItemsKey)}
            />
        );
    }

    const _renderBonusTypeSelectList = () => {
        const bonusTypeOptions = dropdownOptionsData.bonusTypeList;
        return bonusTypeOptions && (
            <MultipleSelect id="bonusType"
                language={LangHelper.currentLanguage}
                dataSource={bonusTypeOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => setSelectedBonusType(selectedItemsKey)}
            />
        );
    }
    
    const _renderClaimStatusSelectList = () => {
        const claimStatusOptions = dropdownOptionsData.claimStatusList;
        return claimStatusOptions && (
            <MultipleSelect id="claimStatus"
                language={LangHelper.currentLanguage}
                dataSource={claimStatusOptions}
                keyField={"key"}
                valueField={"value"}
                statusField={"status"}
                onChange={(currentItem, selectedItemsKey) => setSelectedClaimStatus(selectedItemsKey)}
            />
        );
    }

    const _onSubmit = () => {
        const { fromDate, toDate } = dateRange;

        const globalFilter = { 
            fromDate: Site.convertDateToString(fromDate),
            toDate: Site.convertDateToString(toDate),
            bonusName: selectedBonusName,
            baseCurrency: selectedBaseCurrency, 
            brandId: selectedBrand, 
            claimStatus: selectedClaimStatus, 
            bonusStatus: selectedBonusStatus, 
            bonusType: selectedBonusType ,
            groupBy: selectedGroupByOption
        };

        selectedGroupByOption === GroupByOptionIds.bonusCodeAndDate && setSummarySortInfo(DefaultSummarySortInfoGroupByDate) || setSummarySortInfo(DefaultSummarySortInfo)
        setGlobalFilter(globalFilter);        
    }

    return (<>
        <CollapsiblePanel className="page-filter">
            <div className="row">
                {AppData.brandOptions && AppData.brandOptions.length > 1 && <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
                        {_renderBrandSelectList()}
                    </div>
                </div>}
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{`${LangHelper.getSingleResource("BonusName")}/ ${LangHelper.getSingleResource("Code")}`}</label>
                            <input className="input-text" id="BonusName" name="BonusName" type="text" value={selectedBonusName}
                                onChange={(item) => setSelectedBonusName(item.target.value)} />
                        </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("BonusType")}</label>
                        {_renderBonusTypeSelectList()}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("BonusStatus")}</label>
                        {_renderBonusStatusSelectList()}
                    </div>
                </div>     
            </div>
            <div className="row">
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("Date")}</label>
                        {_renderDateFilter()}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("ClaimStatus")}</label>
                        {_renderClaimStatusSelectList()}
                    </div>
                </div>
                <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                    <div className="form-group">
                        <label className="label-text">{LangHelper.getSingleResource("BaseCurrency")}</label>
                        {_renderBaseCurrencySelectList()}
                    </div>
                </div>
            </div>
        </CollapsiblePanel>
        <GroupFilter isDisabledSubmit={!selectedClaimStatus || !selectedBonusStatus || !selectedBonusType} onSubmit={_onSubmit} />
    </>
    );
}

function mapStateToProps(state) {
    const { dateRange, selectedBrand, selectedBonusName, selectedBaseCurrency, selectedClaimStatus, selectedBonusStatus, selectedBonusType, dropdownOptionsData, selectedGroupByOption } = state;
    return Object.assign({}, { 
        dateRange,
        selectedBonusName,
        selectedBrand,
        selectedBaseCurrency,
        selectedClaimStatus, 
        selectedBonusStatus, 
        selectedBonusType,
        selectedGroupByOption,
        dropdownOptionsData
    });
}

function mapDispatchToProps(dispatch) {
    const { setDateRange, setSelectedBonusName, setSelectedBrand, setSelectedBaseCurrency, setSelectedClaimStatus, setSelectedBonusStatus, 
        setSelectedBonusType, setGlobalFilter, setCollapseFormFilter, setDropdownOptionsData, setSummarySortInfo} = ActionCreators;
    return bindActionCreators(Object.assign({}, {
        setDateRange, 
        setSelectedBonusName,
        setSelectedBrand,
        setSelectedBaseCurrency,
        setSelectedClaimStatus, 
        setSelectedBonusStatus, 
        setSelectedBonusType,
        setGlobalFilter,
        setCollapseFormFilter,
        setDropdownOptionsData, 
        setSummarySortInfo
    }), dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);