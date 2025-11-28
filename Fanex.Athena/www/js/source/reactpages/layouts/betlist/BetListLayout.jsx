import React, { Component } from 'react';
import DataService from '@jsroot/lib/DataService';
import BetList from './lib/BetList';
import Popup from '@jsroot/components/popup';
import PropTypes from 'prop-types';
import { SportType } from './lib/constants';

class BetListLayout extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowPopup: false,
            popupUrl: null,
            popupTitle: null
        };
    }

    componentDidMount() {
        window.onload = () => {
            window.logOpenBetlistEvent && window.logOpenBetlistEvent(this.props.pageName);
        };

        window.ViewResult = (matchid, raceNo, bettype, sporttype, refno,
            currency, winlostdate, refnoMixParlay, league, isOutright, extension1, extension2, custid, transdecs, siteId) => {
            const title = this._getResource('Result');
            const rootUrl = this.props.rootUrl;

            if (sporttype === SportType.RNG_GAME || sporttype === SportType.RNG_MINIGAME || sporttype === SportType.RNG_MOBILE) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'RNGCasino');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.PP) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'PP');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.CARDCLUB) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'CardClub');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.VRG) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'VirtualGames');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.Happy5LinkedGames) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, refno, extension2, extension1, siteId, bettype, 'Happy5LinkedGames');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.SLT) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'SportsLottery');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.VGA || sporttype === SportType.VGA_FreeBets) {
                const url = BetList.getThirdPartyProductResultUrl(rootUrl, custid, transdecs, extension2, extension1, siteId, bettype, 'VGaming');
                this._showThirdPartyResult(url, title);
            }
            else if (sporttype === SportType.VS3) {
                const url = BetList.getVS3ResultUrl(rootUrl, transdecs, sporttype);
                this._openPopup(url, title);
            }
            else {
                const url = BetList.getResultUrl(rootUrl, matchid, raceNo, bettype,
                    sporttype, winlostdate, refnoMixParlay, league, isOutright, extension1, extension2, custid);
                this._openPopup(url, title);
            }
        };

        window.showMP = (transId) => {
            let divEvent = document.querySelector('#divEvent_' + transId);
            divEvent.classList.add('mx-parlay'); //to make line-through for void-parlay-ticket
            this._showMixParlayDetail(transId, divEvent);
        };

        window.showCombMP = (transId, index) => {
            let divEvent = document.querySelector('#divEvent_' + transId + '' + index);
            divEvent.classList.add('mx-parlay'); //to make line-through for void-parlay-ticket
            this._showMixParlayDetail(transId, divEvent);
        };

        // expand choice content
        window.showNewCombMP = (...args) => {
            this._showNewParlayDetail.apply(this, [this.props.rootUrl, ...args]);
        };

        // expand choice content
        window.showBetBuilderPlus = (...args) => {
            this._showBetBuilderPlusDetail.apply(this, [this.props.rootUrl, ...args]);
        };

        // expand choice content
        window.showSingleMatchParlayDetail = (...args) => {
            this._showSingleMatchParlayDetail.apply(this, [this.props.rootUrl, ...args]);
        };

        // show detail popup (in choice column)
        window.showCombMPDetail = (transId, refNo, betId, custId, betTeam) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getParlayDetailUrl(rootUrl, transId, refNo, betId, custId, betTeam, baseCurrency);
            this._openPopup(url, betTeam);
        };

        window.ViewCashOutHistory = (transId, refNo, betType, betdaqId) => {
            const { rootUrl, baseCurrency } = this.props;

            const { url, isCashOut } = BetList.getCashOutHistoryPopupSetting(rootUrl, baseCurrency, transId, refNo, betType, betdaqId);
            const title = this._getResource(isCashOut ? 'CashOutDetails' : 'BoughtDetails');
            this._openPopup(url, title);
        }

        window.ShowBonusDetails = (refCode, transId) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getBonusDetailUrl(rootUrl, refCode, transId, baseCurrency);

            const title = this._getResource('TransactionDetail');
            this._openPopup(url, title);
        }

        window.showRnGCasinoDetails = (transId, winlostDate, custId, transType) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getRnGCasinoDetailUrl(rootUrl, baseCurrency, transId, winlostDate, custId, transType);
            const title = this._getResource('ProductCS') + ' - ' +
                this._getResource('DetailedBetlist') + ' - ' + this._formatDateString(winlostDate);

            this._openPopup(url, title);
        }

        window.showPPDetails = (transId, winlostDate, custId, transType) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getPPDetailUrl(rootUrl, baseCurrency, transId, winlostDate, custId, transType);
            const title = this._getResource('ProductPP') + ' - ' +
                this._getResource('DetailedBetlist') + ' - ' + this._formatDateString(winlostDate);

            this._openPopup(url, title);
        }

        window.showVideoPokerGameDetails = (transId, winlostDate, custId, transType) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getVideoPokerGameDetailUrl(rootUrl, baseCurrency, transId, winlostDate, custId, transType);
            const title = this._getResource('ProductCC') + ' - ' +
                this._getResource('DetailedBetlist') + ' - ' + this._formatDateString(winlostDate);

            this._openPopup(url, title);
        }

        window.showVGamingDetails = (transId, winlostDate, custId, transType) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getVGamingDetailUrl(rootUrl, baseCurrency, transId, winlostDate, custId, transType);
            const title = this._getResource('ProductVGA') + ' - ' +
                this._getResource('DetailedBetlist') + ' - ' + this._formatDateString(winlostDate);

            this._openPopup(url, title);
        }

        window.showVGamingJackpotWonDetails = (transId, custId, betTypeId) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getVGamingJackpotWonDetailUrl(rootUrl, baseCurrency, transId, custId, betTypeId);
            const title = this._getResource('ProductVGA') + ' - ' +
                this._getResource('JackpotWonDetails');

            this._openPopup(url, title);
        }

        window.ViewNewCashOutHistory = (transId, custId, winlostDate, currency) => {
            const { rootUrl, baseCurrency } = this.props;

            const url = BetList.getNewCashOutHistoryPopupSetting(rootUrl, transId, custId, winlostDate, currency, baseCurrency);
            const title = this._getResource('CashOutHistory');
            this._openPopup(url, title);
        }

        window.showDetail = (id) => {
            var e = document.getElementById(id);
            if (e.style.display == 'block') {
                e.style.display = 'none';
            }
            else {
                e.style.display = 'block';
            }
        }
    }

    componentWillUnmount() {
        window.showMP = undefined;
        window.showCombMP = undefined;
        window.ViewResult = undefined;
        window.showNewCombMP = undefined;
        window.showCombMPDetail = undefined;
        window.ViewCashOutHistory = undefined;
        window.ShowBonusDetails = undefined;
        window.showRnGCasinoDetails = undefined;
        window.showPPDetails = undefined;
        window.showSingleMatchParlayDetail = undefined;
        window.showVGamingDetails = undefined;
        window.showVGamingJackpotWonDetails = undefined;
        window.showDetail = undefined;
    }

    _getResource(key) {
        return this.props.getResourceFunc ? this.props.getResourceFunc(key) : key;
    }

    _formatDateString(dateString) {
        return this.props.formatDateStringFunc ? this.props.formatDateStringFunc(dateString) : dateString;
    }

    _beforeShow() {
        this.props.beforeShowFunc && this.props.beforeShowFunc();
    }

    _afterShow() {
        this.props.afterShowFunc && this.props.afterShowFunc();
    }

    _resolveClientUrl(relativeUrl) {
        return this.props.rootUrl + relativeUrl;
    }

    _showMixParlayDetail(transId, divEvent) {
        if (divEvent.style.display === 'none') {
            const url = this._resolveClientUrl('api/MixParlayBetList/Detail?transId=' + transId);
            this._beforeShow();// this.props.toggleLoader(true);

            DataService.getData(url)
                .then((result) => {
                    let choice = '';
                    const length = result.data.length;
                    for (let i = 0; i < length; i++) {
                        choice += result.data[i];
                        if (i < length - 1) {
                            choice += '<div class="line"></div>';
                        }
                    }

                    divEvent.innerHTML = choice;
                    divEvent.style.display = 'block';

                    this._afterShow();
                }).catch((error) => {
                    this._afterShow();
                    console.log(error);
                });
        }
        else {
            divEvent.style.display = 'none';
            divEvent.innerHTML = '';
        }
    }

    _showNewParlayDetail(rootUrl, transId, transIndex, refNo, handicap1, handicap2, betcheck, betteam, custId) {
        let divEvent = document.querySelector('#divEvent_' + transId + '' + transIndex);
        let nameDiv = document.querySelector('#combinationOfferName_' + transId + transIndex);

        divEvent.classList.add('mx-parlay'); //to make line-through for void-parlay-ticket

        if (divEvent.style.display == 'none') {
            let url = BetList.getChoiceParlayDetailUrl(rootUrl, transId, refNo, handicap1, handicap2, betcheck, betteam, custId);
            this._beforeShow();//this.props.toggleLoader(true);
            DataService.getData(url)
                .then((result) => {
                    let choice = BetList.buildChoiceParlayDetail(result.data);

                    divEvent.innerHTML = choice;
                    divEvent.style.display = 'block';
                    nameDiv.style.display = 'none';

                    this._afterShow();
                }).catch((error) => {
                    this._afterShow();
                    console.log(error);
                });
        }
        else {
            divEvent.style.display = 'none';
            divEvent.innerHTML = '';
            nameDiv.style.display = 'block';
        }
    }

    _showBetBuilderPlusDetail(rootUrl, transId, transIndex, refNo, custId, transDesc, handicap1, handicap2, betcheck, betteam, currency, stake) {
        let divEvent = document.querySelector('#divEvent_' + transId + '' + transIndex);
        let nameDiv = document.querySelector('#combinationOfferName_' + transId + transIndex);

        divEvent.classList.add('mx-parlay'); //to make line-through for void-parlay-ticket

        if (divEvent.style.display == 'none') {
            const url = BetList.getChoiceBuilderPlusDetailUrl(rootUrl, transId, refNo, custId, transDesc, handicap1, handicap2, betcheck, betteam, currency, stake);
            this._beforeShow();
            DataService.getData(url)
                .then((result) => {
                    const choice = BetList.buildChoiceBetBuilderPlusDetail(result.data);

                    divEvent.innerHTML = choice;
                    divEvent.style.display = 'block';
                    nameDiv.style.display = 'none';

                    this._afterShow();
                }).catch((error) => {
                    this._afterShow();
                    console.log(error);
                });
        }
        else {
            divEvent.style.display = 'none';
            divEvent.innerHTML = '';
            nameDiv.style.display = 'block';
        }
    }

    _showThirdPartyResult(url, title) {
        this._beforeShow();//this.props.toggleLoader(true);
        DataService.getData(url)
            .then((result) => {
                if (result.data !== '') {
                    this._openPopup(result.data, title);
                }

                this._afterShow();
            }).catch((error) => {
                this._afterShow();
                console.log(error);
            });
    }

    _showRngCasinoResult(refno, url, title) {
        this._beforeShow();
        DataService.postData(url, { refno })
            .then((result) => {
                if (result.data.Success) {
                    if (result.data.Result === '') {
                        return;
                    }

                    this._openPopup(result.data.Result, title);
                }
                else {
                    alert(this._getResource("ErrorProcessingMsg"));
                }

                this._afterShow();
            }).catch((error) => {
                this._afterShow();
                console.log(error);
            });
    }

    _showSingleMatchParlayDetail(rootUrl, transId, custId, status, transIndex) {
        const divEvent = document.querySelector('#divEvent_' + transId + '' + transIndex);

        if (divEvent.style.display == 'none') {
            const url = BetList.getSingleMatchParlayDetailUrl(rootUrl, transId, custId, status);
            this._beforeShow();
            DataService.getData(url)
                .then((result) => {
                    const selection = BetList.buildSingleMatchParlayDetail(result.data);

                    divEvent.innerHTML = selection;
                    divEvent.style.display = 'block';

                    this._afterShow();
                }).catch(function (error) {
                    console.log(error);
                });
        }
        else {
            divEvent.style.display = 'none';
            divEvent.innerHTML = '';
        }
    }

    _openPopup(url, title) {
        this.setState({ isShowPopup: true, popupUrl: url, popupTitle: title });
    }

    _closePopup() {
        this.setState({ isShowPopup: false });
    }

    render() {
        return (
            <div className="betlist-layout">
                {this.props.children}
                {this.state.isShowPopup &&
                    <Popup isShow={true}
                        iframeUrl={this.state.popupUrl}
                        title={this.state.popupTitle}
                        width={900} height={600}
                        onClose={() => this._closePopup()}
                    >
                    </Popup>}
            </div>
        );
    }
}

BetListLayout.propTypes = {
    pageName: PropTypes.string.isRequired,
    rootUrl: PropTypes.string.isRequired,
    getResourceFunc: PropTypes.func,
    baseCurrency: PropTypes.string,
    beforeShowFunc: PropTypes.func,
    afterShowFunc: PropTypes.func,
    beforeShowFunc: PropTypes.func,
    afterShowFunc: PropTypes.func,
    formatDateStringFunc: PropTypes.func
}

BetListLayout.defaultProps = {
    rootUrl: '/',
    baseCurrency: ''
}

export default BetListLayout