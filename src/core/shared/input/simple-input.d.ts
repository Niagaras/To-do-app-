import { InputHTMLAttributes } from 'react';

export interface ISimpleInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
