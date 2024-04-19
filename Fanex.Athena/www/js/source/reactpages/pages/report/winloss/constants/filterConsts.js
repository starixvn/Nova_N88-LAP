import LangHelper from '@jsroot/lib/langHelper';
import AppData from '@jsroot/lib/AppData'

export const GroupByOptionIds = {
    date: 1,
    month: 2,
    product: 3,
    currency: 4,
    player: 5,
    brand: 6
}

export const GroupByOptionAllowQuickDownload = [GroupByOptionIds.date, GroupByOptionIds.month];

export const GroupByOptions = [
    { label: LangHelper.getSingleResource("Date"), value: GroupByOptionIds.date },
    { label: LangHelper.getSingleResource("Month"), value: GroupByOptionIds.month },
    { label: LangHelper.getSingleResource("Product"), value: GroupByOptionIds.product },
    { label: LangHelper.getSingleResource("Currency"), value: GroupByOptionIds.currency },
    { label: LangHelper.getSingleResource("Player"), value: GroupByOptionIds.player },
    { label: LangHelper.getSingleResource("Brand"), value: GroupByOptionIds.brand }
];

const groupByFilter = option => {
    const value = option.value;

    if (value === GroupByOptionIds.brand) {
        return AppData.isAllowedGroupByBrand && AppData.brandOptions && AppData.brandOptions.length > 1;
    }
    else if (value === GroupByOptionIds.date) {
        return AppData.isAllowedGroupByDate
    }
    else if (value === GroupByOptionIds.month) {
        return AppData.isAllowedGroupByMonth
    }
    else if (value === GroupByOptionIds.product) {
        return AppData.isAllowedGroupByProduct
    }
    else if (value === GroupByOptionIds.player) {
        return AppData.isAllowedGroupByPlayer
    }
    else if (value === GroupByOptionIds.currency) {
        return AppData.isAllowedGroupByCurrency
    }
    else {
        return true;
    }
}

export const GroupByOptionAllowByPermission = GroupByOptions.filter(groupByFilter);

export const DateFilterTypeOptions = [
    { value: 1, label: LangHelper.getSingleResource('SettledDate') },
    { value: 2, label: LangHelper.getSingleResource('CreatedDate') }
];

export const UserNameFilterOptions = [
    { value: 1, label: LangHelper.getSingleResource('Username') },
    { value: 2, label: LangHelper.getSingleResource('SabaId') },
    { value: 3, label: LangHelper.getSingleResource('SabaSystemId') },
];

export const DefaultTimezone = 8;

export const OWSportsProductId = 1;

export const DefaultDataViewFull = 1;

export const SBSWProductId = 69;

export const SportsOWBetListIds = [OWSportsProductId, SBSWProductId];

export const SupportClosingFromDate = '03/05/2021';