import { Api } from "../../utils/api/ApiConfig";
import { IArea, IAreasService } from './types';



const getAll = async (): Promise<IAreasService[]> => {
    try {
        const { data } = await Api.get<IAreasService[]>('/areas/');
        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const create = async ({ area }: IArea): Promise<IArea> => {
    try {
        const { data } = await Api.post<IArea>('/areas/create', area)
        return data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const Delete = async (id: string): Promise<void> =>{
    try {
        const {data} = await Api.delete(`/areas/${id}`) 
        return data
    } catch (error: any) {
        throw new Error(error.response.data.message)
    }
}




export const AreasService = {
    getAll,
    create,
    Delete
}