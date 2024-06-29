import { ChangeEvent } from "react";



export interface ITexteareaProps{
    name: string;
    label: string;
    required: boolean;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}