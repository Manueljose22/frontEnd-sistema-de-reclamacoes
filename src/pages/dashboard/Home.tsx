import { FaFileAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";



function Home() {
  return (
    <div className="container-fluid">
        <h4 className="mb-5">Bem-vindo <span className="text-dark">{'Manuel'}</span></h4>

        <section className="container">
            <div className="row mb-4">
                <div className="col-lg-3 me-5 col-md-4 card p-4 d-flex  card-1">
                    <FaPeopleGroup className="fs-2" /> <h5>Usuários</h5>
                    {'2'}
                </div>
                <div className="col-lg-3 me-5 col-md-4 card p-4 d-flex text-white card-2">
                    <FaFileAlt className="fs-6 text-info" />
                    <h5>Total Reclamações</h5>
                    {'50'}
                </div>
                <div className="col-lg-3 col-md-4 card p-4 d-flex card-3">
                    <h5>Pendentes</h5>
                    {'10'}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-3 me-5 col-md-4 card p-4 d-flex card-4">
                    <FaPeopleGroup className="fs-2" /> 
                    <h5>Em Andamento</h5> 
                    {'20'}
                </div>
                <div className="col-lg-3 me-5 col-md-4 card p-4 d-flex card-5">
                    <h5>Concluídas</h5>
                    {'2'}
                </div>
                {/* <div className="col-lg-3 col-md-4 card p-4 d-flex">
                    fff
                </div> */}
            </div>
        </section>
    </div>
  )
}

export {Home};