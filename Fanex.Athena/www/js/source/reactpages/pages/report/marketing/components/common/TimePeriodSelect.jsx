import React from 'react'
import Select from 'react-select'
import DateTimeHelper from '../../libs/helpers/dateTimeHelper';

export const TimePeriodSelect = props => {
    const { selectedRange, selectedDependRange, selectOptions, selectOptionGenerateRange, onChange } = props;
    const { fromDate, toDate } = selectedRange;

    const _onChange = currentSelectOption => {
        const range = selectOptionGenerateRange[currentSelectOption.value](selectedDependRange);
        onChange && onChange(range);
    }

    const _getCurrentSelectOption = () => {
        const currentSelection = selectOptions.find(_ => {
            const range = selectOptionGenerateRange[_.value](selectedDependRange);
            return DateTimeHelper.isEqualDate(fromDate, range.fromDate) && DateTimeHelper.isEqualDate(toDate, range.toDate)
        });
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

    return (
        <div className="time-period-select">
            <div className="time-period-select-time" >
                {_renderSelectOptions()}
            </div>
            <div className="time-period-display-time" >
                {DateTimeHelper.formatDateRangeToString(fromDate, toDate)}
            </div>
        </div>
    )
}

export default React.memo(TimePeriodSelect); 