import { FormEvent, useCallback, useEffect, useState } from 'react';
import styles from './Areas.module.css';
import { FaEye, FaPlus } from "react-icons/fa";
import { ShowAreas } from './ShowAreas';
import { AreasService } from '../../../services/areas/AreasService';
import { IAreasService } from '../../../services/areas/types';
import FormAreas from './components/FormAreas';




function Areas() {
  const [areas, setAreas] = useState<IAreasService[]>([]);
  const [isShow, setShow] = useState<boolean>(false);
  const [areaInput, setInputArea] = useState<string>('');


  const handleClick = () => {
    setShow(!isShow);
  }

  const handleDelete = async (id: string) => {
    setAreas(areas.filter((areas => areas.id !== id)));
    try {
      await AreasService.Delete(id);
    } catch (error: any) {
      console.log('Erro ao eliminar uma área: ', error);
    }

  }


  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      area: areaInput
    }
    try {
      await AreasService.create(data);
    } catch (error: any) {
      console.log('Erro ao criar uma área: ', error);
    }
    setShow(!isShow);

  }

  const getAllAreas = useCallback(async () => {
    try {
      const result = await AreasService.getAll();
      setAreas(result);
    } catch (error: any) {
      console.log('Erro ao carregar áreas: ', error);
    }
  }, [areas])

  useEffect(() => {
    getAllAreas();
  }, [isShow]);

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
        {isShow ? (
          <FormAreas 
            title={'Nova área'}
            textButton={'Criar'}
            onSubmit={onSubmit}
            setInputArea={setInputArea} />
        ) : (
          <ShowAreas
            areas={areas}
            handleDelete={handleDelete}
          />
        )
        }
      </div>

    </div>
  )
}

export { Areas }