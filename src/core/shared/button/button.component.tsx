import React from 'react';
import { IButtonProps } from './button.d';

const variants = {
    primary: {
        backgroundColor: '#4361ee',
        color: '#fff',
    },
    secondary: {
        backgroundColor: '#6c757d',
        color: '#fff',
    },
    danger: {
        backgroundColor: '#e7515a',
        color: '#fff',
    },
    success: {
        backgroundColor: '#1abc9c',
        color: '#fff',
    },
};

const Button: React.FC<IButtonProps> = ({ variant = 'primary', style, children, ...rest }) => (
    <button
        style={{
            border: 'none',
            borderRadius: 6,
            padding: '8px 14px',
            cursor: 'pointer',
            ...variants[variant],
            ...style,
        }}
        {...rest}
    >
        {children}
    </button>
);

export default Button;
