import React from 'react';

export interface IOption {
    label: string;
    value: string | number;
}

export interface ISelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options: IOption[];
    style?: React.CSSProperties;
}
