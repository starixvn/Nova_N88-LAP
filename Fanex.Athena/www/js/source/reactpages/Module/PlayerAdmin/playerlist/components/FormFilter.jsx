import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions/index.js';
import { bindActionCreators } from 'redux';
import CheckBox from '@jsroot/components/CheckBox';
import AdvancedSearch from './filter/AdvancedSearch';
import CollapsiblePanel from '@jsroot/components/collapsible-panel';
import UserGuide from '@jsroot/components/UserGuide';
import LangHelper from '@jsroot/lib/langHelper';
import { searchOptions, baStatusList, specialLevelListWithColor, oddsGroupListWithStyle } from '../lib/constants';
import QueryString from '@jsroot/lib/QueryString';
import { encode } from '@jsroot/lib/htmlHelper';

export class FormFilter extends PureComponent {
    constructor(props) {
        super(props);

        this.allOddsGroupString = Object.keys(oddsGroupListWithStyle).join(',');
        this.allCurrencyString = props.currencyList.map(c => c.Id).join(',');
        this.allSpecialLevel = Object.keys(specialLevelListWithColor).map(item => item).join(',');

        this.userGuide = this._renderUserGuide();
        this.userNameRef = React.createRef();

        this.state = {
            isValidUserName: false,
            isValidsystemId: false,
            userName: '',
            systemId: '',
            currencyIdList: this.allCurrencyString,
            oddsGroup: this.allOddsGroupString,
            specialLevel: this.allSpecialLevel,
            baFilter: baStatusList.All,
            searchOption: searchOptions.matchPrefix
        }
    }

    componentDidMount() {
        const ibcCustId = Number(QueryString.getParam(window.location.href, 'custId'));
        const licenseeCustId = QueryString.getParam(window.location.href, 'licenseeCustId');
        if (ibcCustId || licenseeCustId) {
            const param = { ibcCustId, licenseeCustId };
            this.props.getSinglePlayer(param);

            const userName = QueryString.getParam(window.location.href, 'userName');
            this.userNameRef.current.value = userName;
            this.setState({ isValidUserName: !!userName });
        }

        const { hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission, isSubsidiary } = this.props;
        this.props.getSiteSetting(hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission, isSubsidiary);
    }

    componentDidUpdate(prevProps, prevState) {
        const { isAdvancedSearch } = this.props;
        if (prevProps.isAdvancedSearch !== isAdvancedSearch && !isAdvancedSearch) {
            this.setState({
                currencyIdList: this.allCurrencyString,
                oddsGroup: this.allOddsGroupString,
                specialLevel: this.allSpecialLevel,
                baFilter: baStatusList.All
            });
        }
    }

    searchPlayer() {
        const userName = this.state.userName;
        const systemId = this.state.systemId;

        const { pagingOption, searchPlayer, currencyList, isAdvancedSearch } = this.props;
        const { specialLevel, currencyIdList, oddsGroup, isValidUserName, ...restParam } = this.state;
        const actualSpecialLevel = specialLevel.trim();
        const isSelectAllCurrency = currencyIdList.trim().split(',').length === currencyList.length;

        const param = {
            ...restParam,
            userName: encode(userName),
            systemId: encode(systemId),
            searchOption: isAdvancedSearch + 1,
            currencyIdList: isSelectAllCurrency ? '' : currencyIdList,
            oddsGroup: oddsGroup,
            specialLevel: actualSpecialLevel === '' ? this.allSpecialLevel : actualSpecialLevel,
            pageSize: pagingOption.PageSize,
            pageIndex: 1
        };

        console.log(param)

        searchPlayer(param);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.searchPlayer();
    }

    handlePressEnter = (event) => {
        if (event.charCode === 13) {
            this.searchPlayer();
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    handleSpecificInputChange = (name, value) => {
        this.setState({ [name]: value });
    }

    handleUserNameChange = (event) => {
        const { name, value } = event.target;
        this.setState({ 
            userName: value,
            isValidUserName: !!value });
    }

    hangedelSystemIdChange= (event) => {
        const { name, value } = event.target;
        this.setState({ 
            systemId: value,
            isValidsystemId: !!value });
    }

    _renderUserGuide() {
        const userGuideContent = 'Player Admin User Guide';

        return (<UserGuide
            title={LangHelper.getSingleResource("UserGuide")}
            contentTitle={LangHelper.getSingleResource("PlayerAdmin")}
            onClick={this.showUserGuide}
            content={userGuideContent} />)
    }

    render() {
        const { bankAccountNumber, email, searchOption, isValidUserName, isValidsystemId, ...advancedSearchParam } = this.state;
        const { type, isAdvancedSearch, isFilterCollapsing, currencyList, hasBaPermission } = this.props;
        const { currencyIdList, oddsGroup, specialLevel } = advancedSearchParam;

        console.log(isAdvancedSearch)
        const isValidParam = (isValidUserName || isValidsystemId || isAdvancedSearch);
        const iconToggle = {
            tag: 'div',
            className: isFilterCollapsing ? 'chevron down' : 'chevron up',
            style: {}
        }

        return (
            <CollapsiblePanel className="page-filter" iconToggle={iconToggle} stickyFooter={this.userGuide}
                onCollapse={() => this.props.setCollapseFilter(true)} onExpand={() => this.props.setCollapseFilter(false)}>
                <div className="row">
                    <div className="col-12 col-md-4 col-sm-4 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">
                               Username
                            </label>
                            <input className="input-text" id="username" name="username" type="text" 
                            onKeyPress={this.handlePressEnter} onChange={(value) => this.handleUserNameChange(value)}/>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 col-sm-4 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <label className="label-text">
                               SystemID
                            </label>
                            <input className="input-text" id="systemID" name="systemID" type="text" 
                            onKeyPress={this.handlePressEnter} onChange={(value) => this.hangedelSystemIdChange(value)}/>
                        </div>
                    </div>

                    {isAdvancedSearch && <AdvancedSearch
                        currencyList={currencyList}
                        param={advancedSearchParam}
                        isAllowedBA={hasBaPermission}
                        onChange={this.handleSpecificInputChange} />
                    }

                    <div className="col-12 col-md-2 col-sm-2 col-lg-2 col-xl-1">
                        <div className="form-group">
                            <div className="button-group">
                                <button type="button" className="btn btn-submit" disabled={!isValidParam}
                                    onClick={this.handleSubmit}>{LangHelper.getSingleResource("Submit")}</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 col-sm-3 col-lg-3 col-xl-2">
                        <div className="form-group">
                            <CheckBox id="isAdvancedSearch"
                                checked={isAdvancedSearch}
                                onChange={checked => this.props.setAdvancedSearch(checked)}
                                label={LangHelper.getSingleResource("AdvancedSearch")} />
                        </div>
                    </div>
                </div>
            </CollapsiblePanel>
        );
    }
}
function mapDispatchToProps(dispatch) {
    const { searchPlayer, setAdvancedSearch, setCollapseFilter, getSuggestionList, getSinglePlayer, getSiteSetting } = ActionCreators;
    return bindActionCreators({ searchPlayer, setAdvancedSearch, setCollapseFilter, getSuggestionList, getSinglePlayer, getSiteSetting }, dispatch);
}
function mapStateToProps(state) {
    const { type, isAdvancedSearch, isFilterCollapsing, pagingOption, currencyList, isSubsidiary, hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission } = state;
    return Object.assign({}, { type, isAdvancedSearch, isFilterCollapsing, pagingOption, currencyList, isSubsidiary, hasBaPermission, hasOddsGroupPermission, hasSpecialLevelPermission });
};

export default connect(mapStateToProps, mapDispatchToProps)(FormFilter);