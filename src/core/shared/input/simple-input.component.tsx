import React from 'react';
import { ISimpleInputProps } from './simple-input.d';

const SimpleInput: React.FC<ISimpleInputProps> = ({ label, style, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
            {label && <label>{label}</label>}
            <input
                {...props}
                style={{
                    padding: '8px 10px',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px',
                    fontSize: 14,
                }}
            />
        </div>
    );
};

export default SimpleInput;
