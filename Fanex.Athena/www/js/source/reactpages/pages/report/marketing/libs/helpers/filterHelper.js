import DateTimeHelper from './dateTimeHelper';
import { ReportDateOptionValues, CompareDateOptionValues } from '../../constants/filterConst';

export default class FilterHelper {
    static getCommonAPIParams = ({ reportDate }) => {
        const params = {
            fromDate: DateTimeHelper.formatDateStructureToString(reportDate.fromDate),
            toDate: DateTimeHelper.formatDateStructureToString(reportDate.toDate),
        }
        return params;
    }

    static getPerformanceHighlightAPIParams = filterData => {
        const { reportDate, compareDate } = filterData;
        const commonParams = this.getCommonAPIParams({ reportDate });
        const params = {
            ...commonParams,
            ...{
                compareFromDate: DateTimeHelper.formatDateStructureToString(compareDate.fromDate),
                compareToDate: DateTimeHelper.formatDateStructureToString(compareDate.toDate)
            }
        }

        return params;
    }

    static getUserActivitiesAPIParams = filterData => {
        const { reportDate, viewMode } = filterData;
        const commonParams = this.getCommonAPIParams({ reportDate });
        const params = {
            ...commonParams,
            ...{ 
                viewMode 
            }
        }

        return params;
    }

    static getAvgRevenueAPIParams = filterData => {
        const { reportDate, selectedBaseCurrency, products } = filterData;
        const commonParams = this.getCommonAPIParams({ reportDate });
        const params = {
            ...commonParams,
            ...{ 
                 productIds: products,
                 baseCurrency: selectedBaseCurrency
            }
        }

        return params;
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

    static DefaultReportDate = this.ReportDateGenerateRangeSelections[ReportDateOptionValues.yesterday]();
    static DefaultReportDateLast7Days = this.ReportDateGenerateRangeSelections[ReportDateOptionValues.last7Days]();
    static DefaultCompareDate = this.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod](this.DefaultReportDate);
}