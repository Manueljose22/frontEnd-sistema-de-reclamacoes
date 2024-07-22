import { IComplaint } from "../../components/form/types";
import { Api } from "../../utils/api/ApiConfig";
import { SetAlertMessage } from "../../utils/messageAlert/SetAlertMessage";

import { IData, IGetcomplaints } from "./types";


const create = async (complaint: IComplaint): Promise<IData> => { 
    try {
        const { data } = await Api.post('/complaint/create', complaint, {
            headers: { 'Content-Type': 'multipart/form-data', }
        })
        return data;
    } catch (error: any) {
        SetAlertMessage({msg: error.response.data.message, type: 'error'});
        throw new Error(error.response.data.message);
    }

}


const getComplaint = async (id: string): Promise<IGetcomplaints> => {
    try {
        const { data } = await Api.get<IGetcomplaints>(`/complaint/check/${id}`);
        return data;
    } catch (error: any) {
        SetAlertMessage({msg: error.response.data.message, type: 'error'});
        throw new Error(error.response.data.message);
    }
}



export const ComplaintsService = {
    create,
    getComplaint
}