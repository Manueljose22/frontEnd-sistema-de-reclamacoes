import { useState } from 'react';
import styles from './Areas.module.css';
import { FaEye, FaPlus } from "react-icons/fa";
import { ShowAreas } from './ShowAreas';





function Areas() {

  const [isOpen, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  }

  return (
    <div className={`${styles.container} container`}>
      <div className="row">
        <div className="col-12 d-flex justify-content-between">
          <h5>Áreas de reclamações</h5>
          <div className="btns d-flex gap-2 ">
            <button onClick={handleClick} className="d-flex align-items-center gap-1"><FaEye /> Ver Areas</button>
            <button onClick={handleClick} className="d-flex align-items-center gap-1"><FaPlus /> Novo</button>
          </div>
        </div>
      </div>

      <div className="row">
        {isOpen ? (
            <p>Novo</p>
        ) : (
            <ShowAreas />
        )
        }
      </div>

    </div>
  )
}

export { Areas }