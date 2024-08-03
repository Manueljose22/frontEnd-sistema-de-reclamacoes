import { Outlet } from "react-router-dom";
import { Header } from "../../components/layout/Header";
import { SideBar } from "../../components/layout/SideBar";
import { useState } from "react";
import styles from './Dashboard.module.css';






function Dashboard() {
    const [isOpen, setOpen] = useState<boolean>(false);
    
    const hideSidebar = () =>{
        setOpen(!isOpen); 
    }

    return (
        <main className=" d-flex">
            <SideBar isOpen={isOpen} />

            <div className={`${styles.main}`} >
                <Header hideSidebar={hideSidebar} />

                <section className="text-info p-4">
                    <Outlet />
                </section>
            </div>

        </main>
    )
}

export { Dashboard }