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

    const _displayRange = () => {
        const displayFromDate = DateTimeHelper.formatDateStructureToString(fromDate);
        if (DateTimeHelper.isEqualDate(fromDate, toDate)) {
            return displayFromDate;
        }
        const displayToDate = DateTimeHelper.formatDateStructureToString(toDate);
        return `${displayFromDate} - ${displayToDate}`;
    }

    const _getCurrentSelectOption = () => {
        const currentSelection = selectOptions.find(_ => {
            const range = selectOptionGenerateRange[_.value](selectedDependRange);
            return DateTimeHelper.isEqualDate(fromDate, range.fromDate) && DateTimeHelper.isEqualDate(toDate, range.toDate)
        });
        return currentSelection;
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
        <div className="row">
            <div className="col-12 col-md-5 col-sm-5 col-lg-5 col-xl-5">
                <div className="form-group">
                    {_renderSelectOptions()}
                </div>
            </div>
            <div className="col-12 col-md-7 col-sm-7 col-lg-7 col-xl-7">
                <div className="form-group">
                    <input type="text" className="input-text disabled" value={_displayRange()} disabled={true} />
                </div>
            </div>
        </div>
    )
}

export default React.memo(TimePeriodSelect); 