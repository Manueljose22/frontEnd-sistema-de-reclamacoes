import { ChangeEvent } from "react";



export interface IInputProps {
    type: string;
    name: string;
    label: string;
    OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
    required: boolean,
    placeholder?: string;
    value?: string;
    multiple?: boolean;
}