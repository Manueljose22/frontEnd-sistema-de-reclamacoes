import { ButtonLink } from "../../components/ui/button/ButtonLink"



function Home() {
    return (
        <div className='container-fluid bg-dark text-white vh-100'>
            <div className="row justify-content-center ">
                <div className="col-8">
                    <h1 className="p-4 text-center">Sistema de reclamações</h1>
                    <hr />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum alias ab, sint minus debitis inventore iure rem modi suscipit quam laudantium? Culpa dicta, necessitatibus architecto optio accusamus ipsam vitae impedit.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col text-center mt-5">
                    <ButtonLink url={'/complaint'} textBtn={'Apresentar reclamação'} />
                </div>
            </div>
        </div>
    )
}

export { Home }