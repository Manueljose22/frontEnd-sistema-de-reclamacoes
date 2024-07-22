import { IAreasService } from "../../services/areas/types";




export interface IComplaint{
    email: string;
    name: string;
    area: string;
    message: string;
    attachments: File | string;
}

export interface IFormComplaintsProps {
    optionsAreas: IAreasService[];
    textBtn: string;
    handleSubmit: (complaint: any) => void;
}