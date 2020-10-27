import LangHelper from '@jsroot/lib/langHelper';

export const NumberDaysOfWeek = 7; 

export const ReportDateOptionValues = {
    today: 1,
    yesterday: 2,
    last7Days: 3,
    last30Days: 4,
    specificRange: 5 
}

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

export const ReportDateSelectionOptions = [
    {
        value: ReportDateOptionValues.today,
        label: LangHelper.getSingleResource('Today')
    },
    {
        value: ReportDateOptionValues.yesterday,
        label: LangHelper.getSingleResource('Yesterday')
    },
    {
        value: ReportDateOptionValues.last7Days,
        label: LangHelper.getSingleResource('Last7Days')
    },
    {
        value: ReportDateOptionValues.last30Days,
        label: LangHelper.getSingleResource('Last30Days')
    },
    {
        value: ReportDateOptionValues.specificRange,
        label: LangHelper.getSingleResource('SpecificDateRange'),
        isSpecificRange: true
    }
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