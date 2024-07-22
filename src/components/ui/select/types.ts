import { ChangeEvent } from "react";
import { IAreasService } from "../../../services/areas/types";




export interface ISelectProps {
    name: string;
    label: string;
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    required: boolean,
    value?: string;
    options: IAreasService[];
}