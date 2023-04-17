import LangHelper from '@jsroot/lib/langHelper';

export const GroupByOptionIds = {
    bonusCode: 1,
    bonusCodeAndDate: 2,
    bonusCodeAndMonth: 3
}

export const GroupByOptions = [
    { label: LangHelper.getSingleResource("BonusCode"), value: GroupByOptionIds.bonusCode },
    { label: LangHelper.getSingleResource("Date"), value: GroupByOptionIds.bonusCodeAndDate },
    { label: LangHelper.getSingleResource("Month"), value: GroupByOptionIds.bonusCodeAndMonth }
];