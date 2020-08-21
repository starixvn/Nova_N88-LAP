import DateTimeHelper from './dateTimeHelper';
import { ReportDateOptionValues, CompareDateOptionValues } from '../../constants/filterConst';

export default class FilterHelper {
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
        },
        [ReportDateOptionValues.specificRange]: () => {
            const yesterday = DateTimeHelper.getYesterday();
            return {
                fromDate: yesterday,
                toDate: yesterday,
                isSpecificRange: true
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
    static DefaultCompareDate = this.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod](this.DefaultReportDate);
}