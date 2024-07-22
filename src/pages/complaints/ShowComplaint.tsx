import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { IGetcomplaints } from "../../services/complaints/types";
import { ComplaintsService } from "../../services/complaints/ComplaintsService";
import { FaCalendarCheck, FaPaperclip, FaUser } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";

const Api_baseURL = import.meta.env.VITE_API_BASE_URL;


function ShowComplaint() {

    const search = useParams();
    const id = search.id?.toString();
    const [complaints, setComplaints] = useState<IGetcomplaints>();
    const [loading, setLoading] = useState<boolean>(true);

    const getComplaint = useCallback(async () => {
        try {
            const result = await ComplaintsService.getComplaint(id || '');
            setComplaints(result);
        } finally {
            setLoading(false)
        }
    }, [id])

    useEffect(() => {
        getComplaint()
    }, [])

    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <div className="row justify-content-center ">
                <div className="col-lg-10 col-md-10 p-3">
                    <h1 className="py-4 text-center">Minha reclamação</h1>
                    {loading ?
                        (
                            <div className="container text-center justify-content-center">
                                <Spinner 
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='green.400'
                                    size='xl'
                                />
                            </div>
                        ) : 
                        (
                            <div className=" d-flex justify-content-between align-items-center row">
                                <hr />
                                <div className="col-lg-4 col-md-4  mb-1">
                                    <p className="mb-0" ><span className="text-info">Cliente:</span> {complaints?.Client.name}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 mb-1">
                                    <p className="mb-0" ><span className="text-info">Email:</span> {complaints?.Client.email}</p>
                                </div>
                                <div className="col-lg-4 col-md-4 mb-1 text-end">
                                    <p className="mb-0" ><span className="text-info">Área:</span> {complaints?.Complaint_Message[0].area}</p>
                                </div>
                                <div className="text-end  mt-2">
                                    <p className="text-secondary-2 fsize-1">Apresentada em: {complaints?.createdAt.toLocaleString().slice(0, 19)}</p>
                                </div>
                                <hr />
                                {complaints?.Complaint_Message.map((complaint, indx) => (
                                    <div key={indx} className={`card p-3 my-1 mb-3  bg-secondary text-white ${complaint.user_id === null ? 'client' : 'user'}`}>
                                        <div className="d-flex align-items-center justify-content-between mb-2">
                                            <div className="message">
                                                <h6 className="text-secondary-2">Mensagem:</h6>
                                            </div>
                                            <div className="status text-end">
                                                {complaints?.Complaint_status.map((complaint, index) => (
                                                    <h6 key={index} className="text-secondary-2">Status: <span className="text-info">{complaint.status}</span></h6>
                                                ))}
                                            </div>
                                        </div>
                                        <p> {complaint.message} </p>
                                        <div className=" d-flex align-items-center justify-content-between">
                                            <div className="useres">
                                                {complaint.user_id !== null ?

                                                    (<p className="text-secondary d-flex align-items-center gap-1 fsize-1 m-0 p-0">
                                                        <FaUser className="icon-color" /> {complaint.User.username} <FaCalendarCheck className="icon-color ms-2" /> {new Date(complaint.createdAt).toLocaleDateString()}
                                                    </p>
                                                    ) :

                                                    (<p className="text-secondary d-flex align-items-center gap-1 fsize-1 m-0 p-0">
                                                        <FaUser className="icon-color" /> {complaints.Client.name} <FaCalendarCheck className="icon-color ms-2" /> {new Date(complaint.createdAt).toLocaleDateString()}
                                                    </p>
                                                    )
                                                }
                                            </div>
                                            <div className="text-end">

                                                {complaint.attachments ? (
                                                    <a className="text-secondary d-flex align-items-center justify-content-end gap-2 fsize-1 text-end"
                                                        href={`${Api_baseURL}/attachments/${JSON.parse(complaint.attachments)[1]}`} target="_blank" >
                                                        <FaPaperclip className="fsize-1 icon-color ms-5" />{JSON.parse(complaint.attachments)[0]}
                                                    </a>
                                                ) : (
                                                    <small className="text-secondary">Não existem anexos</small>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export { ShowComplaint };