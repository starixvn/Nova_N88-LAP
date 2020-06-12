import React, { useState, useMemo } from 'react';
import { DropdownButton, DropdownItem } from '@jsroot/components/dropdown';
import PropTypes from 'prop-types';

const SearchOption = props => {

    const { value, onChange, options, name, valueField, labelField } = props;
    const [isOpen, setIsOpen] = useState(false);

    const selectedOption = useMemo(() => options.find(_ => _[valueField] === value), [value]);

    const handleToggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    const handleChange = event => {
        let changedValue = event.target.value;
        changedValue = parseInt(changedValue)
        onChange && onChange(changedValue)
    }

    const toggleButton = {
        className: 'toggle-outline toggle-outline-light'
    }

    const dropdownList = useMemo(() => {
        return options.map(option => {
            return <DropdownItem key={`DropdownItem-${name}-${option.value}`} tag="div">
                <label className="selection-item">
                    <input type="radio" name={`radioOption-${name}`} value={option[valueField]}
                        checked={option.value === selectedOption[valueField]} onChange={handleChange} />
                            &nbsp;&nbsp;{option[labelField]}
                </label>
            </DropdownItem>
        })
    }, [options, selectedOption]);

    return (
        <DropdownButton className="search-option" isOpen={isOpen} toggleButton={toggleButton}
            onToggle={handleToggleDropdown}
            buttonLabel={(<i className="material-icons">settings</i>)}
            onClose={handleClose}>
            {dropdownList}
        </DropdownButton>
    )
}

const propTypes = {
    valueField: PropTypes.string,
    labelField: PropTypes.string,
};

const defaultProps = {
    valueField: 'value',
    labelField: 'label'
};

SearchOption.propTypes = propTypes;
SearchOption.defaultProps = defaultProps;

export default SearchOption;
