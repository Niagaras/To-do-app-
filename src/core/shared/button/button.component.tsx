import React from 'react';
import { IButtonProps } from './button.d';
import { useStyles } from './button.styles';

const Button: React.FC<IButtonProps> = ({ variant = 'primary', style, children, ...rest }) => {
    const classes = useStyles();
    
    // We map variant 'primary' | 'secondary' | 'danger' | 'success' to the styles class
    // Safely fallback to primary if not found
    const variantClass = classes[variant] || classes.primary;

    return (
        <button
            className={`${classes.button} ${variantClass}`}
            style={style}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
