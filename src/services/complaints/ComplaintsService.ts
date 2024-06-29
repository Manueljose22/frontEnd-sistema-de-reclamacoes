import { IComplaint } from "../../components/form/types";
import { Api } from "../../utils/Api";
import { SetAlertMessage } from "../../utils/messageAlert/SetAlertMessage";
import { IData, IGetCompalint, IGetcomplaints } from "./types";


const create = async (complaint: IComplaint): Promise<IData | void> => {

    try {
        const { data } = await Api.post('/complaint/create', complaint, {
            headers: { 'Content-Type': 'multipart/form-data', }
        });

        return data;
    } catch (error: any) {
        SetAlertMessage({ msg: error.response.data.message, type: 'error' });
    }

}

const getById = async (id: string): Promise<IGetcomplaints> => {
    
    // try {
        const { data } = await Api.get<IGetcomplaints>(`/complaint/check/${id}`);
        return data;
    // } catch (error: any) {
    //     SetAlertMessage({ msg: error.response.data.message, type: 'error' });
    // }
    
}



export const ComplaintsService = {
    create,
    getById
}