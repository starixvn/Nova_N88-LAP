import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../actions';
import Select from 'react-select';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import LangHelper from '@jsroot/lib/langHelper';
import AppData from '@jsroot/lib/AppData';
import Site from '@jsroot/lib/site';
import { DateRange } from '@jsroot/components/date-range';
import MultipleSelect from '@9softstudio/react-multiselect';
import CollectionHelper from '@jsroot/lib/collectionHelper';
import CurrencyHelper from '@jsroot/lib/currencyHelper';
import { ApiUrl } from '../lib/constants';
import { ToastContainer, toast, Flip } from 'react-toastify';
import UserGuide from '@jsroot/components/UserGuide';
import DataService from '@jsroot/lib/DataService.js';
import AutoComplete from '@jsroot/components/auto-complete';
import Service from '../lib/service';
import CheckBox from '@jsroot/components/CheckBox';

export const FormFilter = props => {
    const { reportFilter, setReportFilter, dateRange, selectedBrand, setSelectedBrand } = props;

    const currencyList = React.useMemo(() =>
        CurrencyHelper.getTpCurrencyList(selectedBrand, AppData.brands),
        [selectedBrand]
    );

    const {
        currencyIdList = currencyList.map(_ => _.key).join(','),
        username = '',
        excludeTest = true
    } = reportFilter || {};

    useEffect(() => {
        if(currencyList?.length) {
            const selectedIds = currencyIdList.split(',');
            const filteredCurrencies = currencyList.filter(currency =>
                selectedIds.some(id => String(id) === String(currency.key))
            );

            if (filteredCurrencies.length > 0) {
                updateFilter({ currencyIdList: filteredCurrencies.map(_ => _.key).join(',') });
            } else {
                updateFilter({ currencyIdList: [currencyList[0].key].join(',') });
            }
        }
    }, [currencyList]);

    const updateFilter = (updates) => {
        setReportFilter({
            ...reportFilter,
            ...updates
        });
    };

    const _onChangeDateRange = (range, isValid = true) => {
        if (isValid) {
            props.setDateRange(range);
        } else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    const _renderDateFilter = () => {
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={dateRange.fromDate}
                endDate={dateRange.toDate}
                minDate={dateConstraint.minDate}
                maxDate={dateConstraint.maxDate}
                today={dateRange.toDate}
                limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={_onChangeDateRange}
            />
        )
    }

    const _renderCurrencySelectList = () => {
        const dataSource = CollectionHelper.createDataSourceFrom(currencyList, currencyIdList);
        return currencyList && (
            <MultipleSelect
                id="ddlCurrency"
                language={LangHelper.currentLanguage}
                dataSource={dataSource}
                keyField="key"
                valueField="value"
                statusField="status"
                onChange={(_, selectedItemsKey) => updateFilter({ currencyIdList: selectedItemsKey })}
            />
        );
    }

    const _renderBrandSelectList = () => {
        return (
            <Select
                instanceId="brandList"
                value={selectedBrand}
                options={AppData.brandOptions}
                onChange={(item) => setSelectedBrand(item.value)}
            />
        );
    }

    const getParams = () => {
        if (!isValidModel()) {
            return null;
        }

        const { fromDate, toDate } = dateRange;
        const { PageSize, SortBy, SortOrder } = props.requestParam;

        return {
            PageSize: PageSize,
            PageIndex: 1,
            FromDate: Site.convertDateToString(fromDate),
            ToDate: Site.convertDateToString(toDate),
            Username: username,
            BrandId: selectedBrand,
            CurrencyIdList: currencyIdList,
            IsExcludedTestData: excludeTest,
            SortBy: SortBy,
            SortOrder: SortOrder
        }
    }

    const isValidModel = () => {
        return !!currencyIdList;
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const params = getParams();
        if (!params) {
            return;
        }

        toast.dismiss();
        const title = Service.getTitle(params.FromDate, params.ToDate);
        props.setReportTitle(title);
        props.setRequestParam(params);
        props.toggleLoader(true);
        props.getReportData(ApiUrl.REPORT_DATA_URL, params);
    }

    const showUserGuide = () => {
        const userGuideContent = props.userGuideContent;

        if (!userGuideContent || userGuideContent.length === 0) {
            props.getUserGuideContent('PlayerSabaCoins');
        }
    }

    const _renderUserGuide = () => {
        const userGuideContent = props.userGuideContent;

        return (<UserGuide
                title={LangHelper.getSingleResource("UserGuide")}
                contentTitle={LangHelper.getSingleResource("PlayerSabaCoins")}
                onClick={showUserGuide}
                content={userGuideContent} />)
    }

    const exportExcel = (event) => {
        event.preventDefault();
        let exportParam = props.requestParam;

        if (!exportParam || Site.isEmptyObject(exportParam)) {
            exportParam = getParams();
        }

        const exportRequestParam = {
            ...exportParam,
            PageSize: 0,
            PageIndex: 0
        };

        props.toggleLoader(true);
        DataService.getReportFile(ApiUrl.EXPORT_REPORT_DATA_URL, exportRequestParam).then((response) => {
            toast.dismiss();
            const NoContentStatusCode = 204;
            if (response.status === NoContentStatusCode) {
                alert(LangHelper.getSingleResource("NoInfo"));
            }
            else {
                const fileName = "PlayerSabaCoins.xls";
                Site.downloadFile(response.data, fileName);
            }
            props.toggleLoader(false);
        }).catch(error => {
            alert(LangHelper.getSingleResource("ErrorProcessingMsg"));
            props.toggleLoader(false);
        });
    }

    const excelButton = <div>
        <i className="icon-excel right" onClick={exportExcel} title={LangHelper.getSingleResource("ExportToExcel")}></i>
        {_renderUserGuide()}
    </div>;

    return (
        <>
            <CollapsiblePanel className="page-filter" stickyFooter={excelButton}>
                <div className="row">
                    <ToastContainer
                        autoClose={10000}
                        pauseOnFocusLoss={false}
                        style={{ width: "500px" }}
                        transition={Flip} />

                    {AppData.brandOptions && AppData.brandOptions.length > 1 && (
                        <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                            <div className="form-group">
                                <label className="label-text">{LangHelper.getSingleResource("Brand")}</label>
                                {_renderBrandSelectList()}
                            </div>
                        </div>
                    )}
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Date")}</label>
                            {_renderDateFilter()}
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Username")}</label>
                            <AutoComplete url={ApiUrl.CUSTOMER_SEARCH_URL}
                                onSelect={(value) => updateFilter({ username: value })}
                                onInput={(value) => updateFilter({ username: value })}
                                htmlAttributes={{ placeholder: LangHelper.getSingleResource("ExternalIdOrSystemId") }} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">{LangHelper.getSingleResource("Currency")}</label>
                            {_renderCurrencySelectList()}
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-sm-3 col-lg-2 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="ExcludeTest"
                                checked={excludeTest}
                                onChange={(checked) => updateFilter({ excludeTest: checked })}
                                label={LangHelper.getSingleResource("ExcludeTestData")} />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-sm-6 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">&nbsp;</label>
                            <div>
                                <button
                                    className="btn btn-submit"
                                    onClick={onSubmit}
                                    disabled={!currencyIdList}>
                                    {LangHelper.getSingleResource("Submit")}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </CollapsiblePanel>
        </>
    );
}

function mapStateToProps(state) {
    const {
        requestParam,
        dateRange,
        reportFilter,
        userGuideContent,
        selectedBrand
    } = state;

    return Object.assign({}, {
        requestParam,
        dateRange,
        reportFilter,
        userGuideContent,
        selectedBrand
    });
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);