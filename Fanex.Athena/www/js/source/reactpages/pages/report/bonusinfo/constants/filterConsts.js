import LangHelper from '@jsroot/lib/langHelper';

export const GroupByOptionIds = {
    bonusCode: 1,
    bonusCodeAndDate: 2
}

export const GroupByOptions = [
    { label: LangHelper.getSingleResource("BonusCode"), value: GroupByOptionIds.bonusCode },
    { label: LangHelper.getSingleResource("Date"), value: GroupByOptionIds.bonusCodeAndDate }
];