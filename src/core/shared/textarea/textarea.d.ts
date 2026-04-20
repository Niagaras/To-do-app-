import React from 'react';

export interface ITextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    style?: React.CSSProperties;
}
