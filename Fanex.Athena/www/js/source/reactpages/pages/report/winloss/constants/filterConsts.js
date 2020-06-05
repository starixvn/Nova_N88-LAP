import LangHelper from '@jsroot/lib/langHelper';

const GroupByOptionIds = {
    date: 1,
    month: 2,
    product: 3,
    currency: 4,
    player: 5
}

export const GroupByOptions = [
    { label: LangHelper.getSingleResource("Date"), value: GroupByOptionIds.date },
    { label: LangHelper.getSingleResource("Month"), value: GroupByOptionIds.month },
    { label: LangHelper.getSingleResource("Product"), value: GroupByOptionIds.product },
    { label: LangHelper.getSingleResource("Currency"), value: GroupByOptionIds.currency },
    { label: LangHelper.getSingleResource("Player"), value: GroupByOptionIds.player }
];

export const PagingGroups = [
    GroupByOptionIds.player
]

export const DateFilterTypes = [
    { value: 1, label: LangHelper.getSingleResource('SettledDate') },
    { value: 2, label: LangHelper.getSingleResource('CreatedDate') }
];

export const UserNameFilterOptions = [
    { value: 1, label: LangHelper.getSingleResource('UserName') },
    { value: 2, label: LangHelper.getSingleResource('SabaId') },
    { value: 3, label: LangHelper.getSingleResource('SabaSystemId') },
];
