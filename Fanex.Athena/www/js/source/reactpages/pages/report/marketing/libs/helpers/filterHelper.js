import DateTimeHelper from './dateTimeHelper';
import { CompareDateOptionValues } from '../../constants/filterConst';

export default class FilterHelper {
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

    static GetDefaultCompareDate = defaultReportDate => {
        let { fromDate, toDate } = defaultReportDate;
        fromDate = new Date(fromDate);
        toDate = new Date(toDate);

        return this.CompareDateGenerateRangeSelections[CompareDateOptionValues.previousPeriod]({
            fromDate: DateTimeHelper.convertToDateStructure(fromDate),
            toDate: DateTimeHelper.convertToDateStructure(toDate),
        });
    }
}