import React from 'react';
import { ITextareaProps } from './textarea.d';
import { useStyles } from './textarea.styles';

const Textarea: React.FC<ITextareaProps> = ({ label, style, ...props }) => {
    const classes = useStyles();
    return (
        <div className={classes.inputContainer} style={style}>
            {label && <label>{label}</label>}
            <textarea
                className={classes.textarea}
                {...props}
            />
        </div>
    );
};

export default Textarea;
