import React from 'react';
import Select from 'react-select';
import { DateRange } from '@jsroot/components/date-range';
import LangHelper from '@jsroot/lib/langHelper';
import AppData from '@jsroot/lib/AppData';
import DateTimeHelper from '../../libs/helpers/dateTimeHelper';

export const TimePeriodSelect = props => {
    const { selectedRange, selectedDependRange, selectOptions, selectOptionGenerateRange, onChange } = props;
    const { fromDate, toDate, isSpecificRange } = selectedRange;

    const _onChange = currentSelectOption => {
        const { value } = currentSelectOption;
        const range = selectOptionGenerateRange[value](selectedDependRange);
        onChange && onChange(range);
    }

    const _getCurrentSelectOption = () => {
        let currentSelection = null;
        if (isSpecificRange) {
            currentSelection = selectOptions.find(_ => _.isSpecificRange);
        } else {
            currentSelection = selectOptions.find(_ => {
                const range = selectOptionGenerateRange[_.value](selectedDependRange);
                return DateTimeHelper.isEqualDate(fromDate, range.fromDate) && DateTimeHelper.isEqualDate(toDate, range.toDate);
            });
        }
        return currentSelection || selectOptions[0];
    }

    const _renderSelectOptions = () => {
        const selectedSelectOption = _getCurrentSelectOption();
        return selectOptions && selectOptions.length && (
            <Select instanceId="ddlSelectOptions"
                value={selectedSelectOption.value}
                options={selectOptions}
                onChange={_onChange} />
        );
    }

    const _onChangeDateRange = (range, isValid = true) => {
        if (isValid) {
            const { startDate, endDate } = range;
            const convertedRange = {
                fromDate: DateTimeHelper.convertToDateStructure(startDate._d),
                toDate: DateTimeHelper.convertToDateStructure(endDate._d),
                isSpecificRange: true
            }
            onChange && onChange(convertedRange);
        } else {
            const message = LangHelper.getSingleResource("DateRangeExceedMsg").replace("{0}", AppData.dateConstraint.limitedMonthRange);
            alert(message);
        }
    }

    const _renderDateRangeSelect = () => {
        const dateRange = {
            fromDate: DateTimeHelper.formatDateStructureToString(fromDate),
            toDate: DateTimeHelper.formatDateStructureToString(toDate)
        };
        const dateConstraint = AppData.dateConstraint;
        return (
            <DateRange
                startDate={dateRange.fromDate} endDate={dateRange.toDate}
                minDate={dateConstraint.minDate} maxDate={dateConstraint.maxDate}
                toDate={dateRange.toDate} limitedMonthRange={dateConstraint.limitedMonthRange}
                onChange={_onChangeDateRange}
            />
        )
    }

    return (
        <div className="time-period-select">
            <div className="time-period-select-time" >
                {_renderSelectOptions()}
            </div>
            <div className="time-period-display-time" >
                {isSpecificRange ? _renderDateRangeSelect() : DateTimeHelper.formatDateRangeToString(fromDate, toDate)}
            </div>
        </div>
    )
}

export default React.memo(TimePeriodSelect); 