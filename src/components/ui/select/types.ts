import { ChangeEvent } from "react";




export interface ISelectProps {
    name: string;
    label: string;
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    required: boolean,
    value?: string;
   options: string[];
}