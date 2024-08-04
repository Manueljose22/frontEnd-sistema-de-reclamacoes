import { Api } from "../../utils/api/ApiConfig";
import { IAreaPost, IAreasService } from './types';



const getAll = async (): Promise<IAreasService[]> => {
    try {
        const { data } = await Api.get<IAreasService[]>('/areas/');
        return data;

    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const getById = async (id?: string): Promise<IAreasService> =>{
    try {
        const {data} = await Api.get<IAreasService>(`/areas/${id}`);
        return data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const create = async (dataSave: IAreaPost): Promise<IAreasService> => {
   
    try {
        const { data } = await Api.post<IAreasService>('/areas/create', dataSave )
        return data;
    } catch (error: any) {
        throw new Error(error.response.data.message);
    }
}

const update = async (dataSave:IAreaPost, id?: string ): Promise<IAreasService> => {
   
    try {
        const { data } = await Api.put<IAreasService>(`/areas/${id}`, dataSave)
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
    getById,
    create,
    update,
    Delete
}