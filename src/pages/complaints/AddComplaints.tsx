import { useNavigate } from "react-router-dom";
import { FormComplaint } from "../../components/form/FormComplaints";
import { IComplaint } from "../../components/form/types";
import { ComplaintsService } from "../../services/complaints/ComplaintsService";
import { useCallback, useContext, useEffect, useState } from "react";
import { ComplaintContext } from "../../contexts/ComplaintContext";
import { AreasService } from "../../services/areas/AreasService";
import { IAreasService } from "../../services/areas/types";






function AddComplaints() {

    const navigate = useNavigate();
    const {setData} = useContext(ComplaintContext);
    const [options, setOptions] = useState<IAreasService[]>([]);
    

    const getAreas = useCallback( async()=> {
        const result = await AreasService.getAll();
        setOptions(result);
    }, [])

    useEffect(()=>{
        getAreas();
    }, [])

    const registerComplaint = async (complaint: IComplaint) =>{ 
        const result = await ComplaintsService.create(complaint);
        setData(result);
        navigate('/complaint_success');
    }
    
    return (
        <div className="container-fluid text-white bg-dark d-flex flex-column align-items-center vh-auto py-5">

            <div className="row align-items-center p-3">
                <div className="col-lg-6 col-md-7 mb-4">
                <h1>Sistema de reclamações</h1>
                <h2 className=" fs-2">Envie sua reclamação</h2>
                </div>
                <div className="col-lg-6 col-md-5 p-2 bg-dark-ligth card text-white align-self-end">
                <FormComplaint  
                    optionsAreas={options} 
                    handleSubmit={registerComplaint} 
                    textBtn={'Enviar'}
                 />
                </div>
            </div>

            
        
            
        </div>
    )
}

export { AddComplaints };