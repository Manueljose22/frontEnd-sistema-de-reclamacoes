import { useNavigate } from "react-router-dom";
import { FormComplaint } from "../../components/form/FormComplaints";
import { IComplaint } from "../../components/form/types";
import { ComplaintsService } from "../../services/complaints/ComplaintsService";
import { useContext } from "react";
import { ComplaintContext } from "../../contexts/ComplaintContext";






function AddComplaints() {

    const navigate = useNavigate();
    const {setData} = useContext(ComplaintContext)


    const registerComplaint = async (complaint: IComplaint) =>{ 
        const result = await ComplaintsService.create(complaint);
        setData(result);
        navigate('/complaint_success');
    }
    
    return (
        <div className="container-fluid text-white bg-dark d-flex flex-column align-items-center h-100 py-3">
            <h1 className="mb-3">Envie sua reclamação</h1>
            <FormComplaint handleSubmit={registerComplaint} textBtn={'Enviar'} />
        </div>
    )
}

export { AddComplaints };