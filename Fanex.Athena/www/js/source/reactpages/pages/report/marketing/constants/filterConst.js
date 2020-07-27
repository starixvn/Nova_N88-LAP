import LangHelper from '@jsroot/lib/langHelper';

export const ReportDateOptionValues = {
    yesterday: 1,
    last7Days: 2,
    last30Days: 3
}

export const CompareDateOptionValues = {
    previousPeriod: 1,
    samePeriodLastYear: 2
}

export const ViewByOptionKeys = {
    Daily: 1,
    Weekly: 2
}

export const ViewByOptions = [
    { value: ViewByOptionKeys.Daily, label: LangHelper.getSingleResource('Daily') },
    { value: ViewByOptionKeys.Weekly, label: LangHelper.getSingleResource('Weekly') }
]

export const ReportDateSelectionOptions = [
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