import LangHelper from '@jsroot/lib/langHelper';

export const GroupByOptions = [
    { label: LangHelper.getSingleResource("Date"), value: 1 },
    { label: LangHelper.getSingleResource("Month"), value: 2 },
    { label: LangHelper.getSingleResource("Product"), value: 3 },
    { label: LangHelper.getSingleResource("Currency"), value: 4 },
    { label: LangHelper.getSingleResource("Player"), value: 5 }
];

export const DateFilterTypes = [
    { value: 1, label: LangHelper.getSingleResource('SettledDate')},
    { value: 2, label: LangHelper.getSingleResource('CreatedDate') }
];