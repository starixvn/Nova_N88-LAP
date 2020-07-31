import DateTimeHelper from './dateTimeHelper';
import { ReportDateOptionValues, CompareDateOptionValues } from '../../constants/filterConst';

export default class FilterHelper {
    static getCommonAPIParams = globalFilterData => {
        const { selectedBaseCurrency, reportDate, compareDate } = globalFilterData;
        const apiParams = {
            baseCurrency: selectedBaseCurrency,
            fromDate: DateTimeHelper.formatDateStructureToString(reportDate.fromDate),
            toDate: DateTimeHelper.formatDateStructureToString(reportDate.toDate),
            compareFromDate: DateTimeHelper.formatDateStructureToString(compareDate.fromDate),
            compareToDate: DateTimeHelper.formatDateStructureToString(compareDate.toDate)
        }
        return apiParams;
    }

    static getPerformanceHighlightWidgetAPIParams = filterData => {
        const commonParams = this.getCommonAPIParams(filterData);
        return commonParams;
    }

    static ReportDateGenerateRangeSelections = {
        [ReportDateOptionValues.yesterday]: () => {
            const yesterday = DateTimeHelper.getYesterday();
            return {
                fromDate: yesterday,
                toDate: yesterday
            }
        },
        [ReportDateOptionValues.last7Days]: () => {
            const toDate = DateTimeHelper.addDays(DateTimeHelper.getToday(), -1);
            const fromDate = DateTimeHelper.addDays(toDate, -6);
            return {
                fromDate: DateTimeHelper.convertToDateStructure(fromDate),
                toDate: DateTimeHelper.convertToDateStructure(toDate)
            }
        },
        [ReportDateOptionValues.last30Days]: () => {
            const toDate = DateTimeHelper.addDays(DateTimeHelper.getToday(), -1);
            const fromDate = DateTimeHelper.addDays(toDate, -29);
            return {
                fromDate: DateTimeHelper.convertToDateStructure(fromDate),
                toDate: DateTimeHelper.convertToDateStructure(toDate)
            }
        }
    }

    static CompareDateGenerateRangeSelections = {
        [CompareDateOptionValues.previousPeriod]: selectedDependRange => {
            const currentPeriodFromDate = DateTimeHelper.convertToDateObject(selectedDependRange.fromDate);
            const currentPeriodToDate = DateTimeHelper.convertToDateObject(selectedDependRange.toDate);
            const diffDays = DateTimeHelper.getDiffDays(currentPeriodFromDate, currentPeriodToDate);

            const toDate = DateTimeHelper.addDays(currentPeriodFromDate, -1);
            const fromDate = DateTimeHelper.addDays(toDate, -diffDays);

            return {
                fromDate: DateTimeHelper.convertToDateStructure(fromDate),
                toDate: DateTimeHelper.convertToDateStructure(toDate)
            }
        },
        [CompareDateOptionValues.samePeriodLastYear]: selectedDependRange => {
            const currentPeriodFromDate = DateTimeHelper.convertToDateObject(selectedDependRange.fromDate);
            const currentPeriodToDate = DateTimeHelper.convertToDateObject(selectedDependRange.toDate);
            const diffDays = DateTimeHelper.getDiffDays(currentPeriodFromDate, currentPeriodToDate);

            const toDate = DateTimeHelper.addYears(currentPeriodToDate, -1);
            const fromDate = DateTimeHelper.addDays(toDate, -diffDays);

            return {
                fromDate: DateTimeHelper.convertToDateStructure(fromDate),
                toDate: DateTimeHelper.convertToDateStructure(toDate)
            }
        }
    }

    static DefaultReportDate = { fromDate: DateTimeHelper.getYesterday(), toDate: DateTimeHelper.getYesterday() }
    static DefaultCompareDate = this.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod](this.DefaultReportDate);
}