import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IGetcomplaints} from "../../services/complaints/types";
import { ComplaintsService } from "../../services/complaints/ComplaintsService";

const Api_baseURL = import.meta.env.VITE_API_BASE_URL;


function ShowComplaint() {

    const search = useParams();
    const id = search.id?.toString();
    const [complaints, setComplaint] = useState<IGetcomplaints>({} as IGetcomplaints);
   


    const getComplaint = useCallback(async ()=>{
       
        const result = await ComplaintsService.getById(id ||'');
        setComplaint(result);
        console.log(result)
    },[id])
    
    useEffect(()=>{
        getComplaint()
    }, [])

    


    return (
        <div className='container-fluid bg-dark text-white vh-100'>
        <div className="row justify-content-center ">
            <div className="col-8">
                <h1 className="pt-4 text-center">Sistema de reclamações</h1>
                <hr />
                <div className="d-flex justify-content-between align-items-center">
                    {/* <p className="mb-0" ><span className="text-info">Cliente:</span> {complaint.Client.name}</p> */}
                    {/* <p className="mb-0" ><span className="text-info">Email:</span> {complaint.Client.email}</p> */}
                    <p className="mb-0 p-0" ><span className="text-info">Área:</span> {}</p>
                </div>
                <hr />
                {   

                        <div  className="card p-3 my-1  bg-secondary text-white">
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <h6 className="text-secondary">Assunto:</h6>
                                </div>
                                <div className="col-lg-4 col-md-4 text-end">
                                    <h6 className="text-secondary">Status: <span className="text-info">{complaint.status}</span></h6>
                                </div>
                            </div>
                            
                            <div>
                                {
                                    // complaint. ? (<a href={`${Api_baseURL}/attachments/${complaint.attachments.newName}`} target="_blank" rel="noopener noreferrer" >{complaint.attachments.name}</a>) : 
                                    // (<p>Não há anexos</p>)
                                }
                            </div>
                        </div>
                    
                }
            </div>
        </div>
    </div>
    )
}

export { ShowComplaint };