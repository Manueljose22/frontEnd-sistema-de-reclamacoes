import { ButtonLink } from "../../components/ui/button/ButtonLink"



function Welcome() {
    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <div className="row justify-content-center ">
                <div className="col-lg-8 col-md-9 p-4">
                    <h1 className="p-4 text-center">Sistema de reclamações</h1>
                    <hr />
                    <p>Bem-vindo ao sistema de reclamações! Aqui poderá expor ou enviar-nos a sua reclamação sobre algum incoveniente.</p>
                    <p>Clique no botão abaixo e será redirecionado a um formulário que depois de preenche-ló poderá enviar-nos a sua reclamação. </p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <ButtonLink url={'/complaint'} textBtn={'Apresentar'} />
                </div>
            </div>
        </div>
    )
}

export { Welcome }