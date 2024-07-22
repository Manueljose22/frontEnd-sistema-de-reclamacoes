import styles from './Layout.module.css';
import { useState } from "react";
import { FaFileAlt, FaFileArchive, FaHome, FaUserAlt } from "react-icons/fa"
import { ISideBarProps } from "./interfaces";
import { Link } from "react-router-dom";





function SideBar({ isOpen }: ISideBarProps) {
    const [isActive, setActive] = useState<number | null>(null);

    const handleClikLink = (i: number) => {
        setActive(i);
    }
    
    return (
        <aside className={`${styles.aside} ${isOpen ? styles.w_0 : styles.w_100 } d-flex flex-column py-4  align-self-start  bg-dark  vh-100 text-white`}>
            <div className="hearder text-center">
                <h1 className="fs-4 ">System of Complaints</h1>
                <hr />
            </div>
            <nav className="text-start">
                <ul className="pe-5">
                    <li className={`${isActive === 0 ? 'bg-link' : ''} mb-2 fs-6 d-flex gap-2 align-items-center mb-4  p-2`} >
                        <FaHome /> <Link className="w-100" onClick={() => handleClikLink(0)} to={'/admin/home'}>Dashboard</Link>
                    </li>
                    <li className={`${isActive === 1 ? 'bg-link' : ''} mb-1 fs-6 d-flex gap-2 align-items-center p-2`} >
                        <FaFileAlt /> <Link className="w-100" onClick={() => handleClikLink(1)} to={'/admin/'}>Reclamações</Link>
                    </li>
                    <li className={`${isActive === 2 ? 'bg-link' : ''} mb-1 fs-6 d-flex gap-2 align-items-center p-2`} >
                        <FaFileArchive /> <Link className="w-100" onClick={() => handleClikLink(2)} to={'/admin/areas'}>Áreas de reclamação</Link>
                    </li>
                    <li className={`${isActive === 3 ? 'bg-link' : ''} mb-1 fs-6 d-flex gap-2 align-items-center p-2`} >
                        <FaUserAlt /> <Link className="w-100" onClick={() => handleClikLink(3)} to={'/admin/'}>Usuários</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export { SideBar }