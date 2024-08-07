import { Dispatch, FormEvent } from "react";
import { IAreasService } from "../../../services/areas/types";



export interface ShowAreasProps {
    areas: IAreasService[],
    handleDelete: (id: string) => void,
}

export interface IFormAreas {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void,
    setInputArea: Dispatch<React.SetStateAction<string>>
    areaInput?: string;
    textButton: string;
    title: string;
}

export interface IEditAreas {
    handleEdit: () => void,
}