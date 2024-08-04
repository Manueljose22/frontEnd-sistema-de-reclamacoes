import styles from './Areas.module.css';
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link} from 'react-router-dom';
import { ShowAreasProps } from './types';




function ShowAreas({ areas, handleDelete}: ShowAreasProps) {


    return (
        <div className={`${styles.containerShow} container mt-5`}>
            <table className="table table-hover table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Áreas</th>
                        <th className='text-center' colSpan={2} >Acções</th>
                    </tr>
                </thead>
                <tbody>
                    {areas.length > 0 && (
                        areas.map((area) => (
                            <tr key={area.id}>
                                <td>{area.area}</td>
                                <td className='d-flex m-0 align-items-center'>
                                    <Link to={`/admin/areas/edit/${area.id}`}><FaEdit /></Link>
                                    <button onClick={() => handleDelete(area.id)}><FaTrash className="text-danger" /></button>
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

export { ShowAreas }