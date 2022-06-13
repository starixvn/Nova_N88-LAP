import LangHelper from '@jsroot/lib/langHelper';

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

export const SupportClosingFromDate = '03/05/2021';