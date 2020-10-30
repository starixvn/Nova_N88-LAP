import React from 'react';
import { render } from 'react-dom';
import NewlyRegisterUsersDetail from './NRU/NewlyRegisterUsersDetail';
import WithdrawalAmountDetail from './WithdrawalAmount/WithdrawalAmountDetail';
import BonusClaimedDetail from './BonusClaimed/BonusClaimedDetail';
import DateTimeHelper from '../../../../libs/helpers/dateTimeHelper';
import { PerformanceHighlightDetailBoxKeys } from '../../../../constants/chartConst';

const params = window.params;

const initState = {
    selectedBox: params.selectedBox,
    baseCurrency: params.baseCurrency,
    selectedBrand: params.selectedBrand,
    reportDate: {
        fromDate: DateTimeHelper.convertToDateStructure(new Date(Date.parse(params.fromDate))),
        toDate: DateTimeHelper.convertToDateStructure(new Date(Date.parse(params.toDate))),
    },
    compareDate: {
        fromDate: DateTimeHelper.convertToDateStructure(new Date(Date.parse(params.compareFromDate))),
        toDate: DateTimeHelper.convertToDateStructure(new Date(Date.parse(params.compareToDate))),
    },
    allowedCompare: params.allowedCompare
}

const DetailPopup =({ selectedBox, ...rest}) => {
    const _render = () => {
        if (selectedBox === PerformanceHighlightDetailBoxKeys.NewlyRegisteredUsers) {
            return <NewlyRegisterUsersDetail {...rest} />
        }
        if (selectedBox === PerformanceHighlightDetailBoxKeys.WithdrawalAmount) {
            return <WithdrawalAmountDetail {...rest} />
        }
        if (selectedBox === PerformanceHighlightDetailBoxKeys.BonusClaimed) {
            return <BonusClaimedDetail {...rest} />
        }
        return null;
    }

    return _render();
}

render(<DetailPopup {...initState} />, document.getElementById("app-container"));