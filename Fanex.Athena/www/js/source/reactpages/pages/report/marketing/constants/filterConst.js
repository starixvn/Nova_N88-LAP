import LangHelper from '@jsroot/lib/langHelper';

export const NumberDaysOfWeek = 7; 

export const CompareDateOptionValues = {
    previousPeriod: 1,
    samePeriodLastYear: 2
}

export const ViewModeOptionValues = {
    Daily: 1,
    Weekly: 2
}

export const ViewModeOptions = [
    { value: ViewModeOptionValues.Daily, label: LangHelper.getSingleResource('Daily') },
    { value: ViewModeOptionValues.Weekly, label: LangHelper.getSingleResource('Weekly') }
]

export const CompareDateSelectionOptions = [
    {
        value: CompareDateOptionValues.previousPeriod,
        label: LangHelper.getSingleResource('PreviousPeriod')
    },
    {
        value: CompareDateOptionValues.samePeriodLastYear,
        label: LangHelper.getSingleResource('SamePeriodLastYear'),
    }
]