import React, { useEffect } from 'react';
import Select from 'react-select';
import DateTimeHelper from '../../libs/helpers/dateTimeHelper';

export const TimePeriodSelect = props => {
    const { selectedRange, selectedDependRange, selectOptions, selectOptionGenerateRange, disabled, onChange, defaultOption } = props;
    const { fromDate, toDate } = selectedRange;

    useEffect(() => {
        onChange(selectOptionGenerateRange[defaultOption](selectedDependRange));
    }, [selectedDependRange])

    const _onChange = currentSelectOption => {
        const { value } = currentSelectOption;
        const range = selectOptionGenerateRange[value](selectedDependRange);
        onChange && onChange(range);
    }

    const _getCurrentSelectOption = () => {
        let currentSelection = selectOptions.find(_ => {
                const range = selectOptionGenerateRange[_.value](selectedDependRange);
                return DateTimeHelper.isEqualDate(fromDate, range.fromDate) && DateTimeHelper.isEqualDate(toDate, range.toDate);
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
        <div className={`time-period-select ${disabled ? 'disabled' : ''}`}>
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