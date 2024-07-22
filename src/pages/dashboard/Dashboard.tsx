import { Outlet } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { SideBar } from "../../components/layout/SideBar";
import { useState } from "react";






function Dashboard() {
    const [isOpen, setOpen] = useState<boolean>(false);
    
    const hideSidebar = () =>{
        setOpen(!isOpen); 
    }

    return (
        <main className=" d-flex bg-light">
            <SideBar isOpen={isOpen} />
            <div className="d-flex flex-column" >
                <Header hideSidebar={hideSidebar} />

                <section className="text-info p-4">
                    <Outlet />
                </section>
            </div>

        </main>
    )
}

export { Dashboard }