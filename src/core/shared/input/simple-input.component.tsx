import React from 'react';
import { ISimpleInputProps } from './simple-input.d';
import { useStyles } from './simple-input.styles';

const SimpleInput: React.FC<ISimpleInputProps> = ({ label, style, ...props }) => {
    const classes = useStyles();
    return (
        <div className={classes.inputContainer} style={style}>
            {label && <label>{label}</label>}
            <input
                className={classes.input}
                {...props}
            />
        </div>
    );
};

export default SimpleInput;
