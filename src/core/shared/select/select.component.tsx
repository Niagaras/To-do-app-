import React from 'react';
import { ISelectProps } from './select.d';
import { useStyles } from './select.styles';

const Select: React.FC<ISelectProps> = ({ label, options, style, ...props }) => {
    const classes = useStyles();
    return (
        <div className={classes.inputContainer} style={style}>
            {label && <label>{label}</label>}
            <select
                className={classes.select}
                {...props}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
