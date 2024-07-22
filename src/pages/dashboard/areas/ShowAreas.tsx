import styles from './Areas.module.css';
import { useEffect, useState } from "react";
import { IAreasService } from "../../../services/areas/types"
import { AreasService } from "../../../services/areas/AreasService";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';




function ShowAreas() {
    const navigate = useNavigate();
    const [areas, setAreas] = useState<IAreasService[]>([]);
    const { id } = useParams<{id: string}>();


    const handleClickDelete = () =>{
       
       

        console.log(id);
        
        // navigate('/admin/areas/')
        
    } 

    const getAllAreas = async () =>{

        try {
            const result = await AreasService.getAll();
            setAreas(result);
        } catch (error: any) {
            console.log('Erro ao carregar áreas: ', error );
        }
    }

    useEffect(()=>{
        getAllAreas();
    },[])

  return (
    <div className={`${styles.containerShow} container mt-5`}>
        <table className="table table-hover">
            <thead className="table-dark">
                <tr>
                    <th>Áreas</th>
                    <th colSpan={2}>Acções</th>
                    </tr>
            </thead>
            <tbody>
                { areas.length > 0 &&(
                    areas.map((area)=>(
                    <tr key={area.id} className="">
                        <td>{area.area}</td>
                        <td className="">
                            <FaEdit />
                        </td>
                        <td>
                        <Link onClick={handleClickDelete} to={`/admin/areas/${area.id}`}><FaTrash className="text-danger" /></Link>
                        </td>
                    </tr>
                    ))
                )
                   
                }
                {
                    areas.length < 0 && <div> Não há áreas</div>
                }
            </tbody>
        </table>
    </div>
  )
}

export {ShowAreas}