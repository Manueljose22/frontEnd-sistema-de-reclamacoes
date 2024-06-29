import { useContext, useState } from "react"
import { ButtonLink } from "../../components/ui/button/ButtonLink"
import { IData } from "../../services/complaints/types"
import { ComplaintContext } from "../../contexts/ComplaintContext";




function ComplaintSuccess() {
    
    const {data} = useContext(ComplaintContext);
    const [user] = useState<IData>(data || null);
      
    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <div className="row justify-content-center ">
                <div className="col-8">
                    <h1 className="p-4 text-center">Sistema de reclamações</h1>
                    <hr />
                    <p>Muito obrigado pela sua reclamação. </p> 

                    <p><strong>{user.name}</strong>, foi enviado para o email <span className="text-info">{user.email}</span> contendo os passos necessários para acompanhar a evolução da sua reclamação.   </p>

                    <p>Iremos responder o mais breve possível.</p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <ButtonLink url={'/'} textBtn={'Voltar'} />
                </div>
            </div>
        </div>
    )
}

export { ComplaintSuccess }