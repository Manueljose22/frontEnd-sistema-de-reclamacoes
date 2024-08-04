import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Button } from "../../../components/ui/button/Button"
import { Input } from "../../../components/ui/input/Input";
import { useNavigate, useParams } from "react-router-dom";
import { AreasService } from "../../../services/areas/AreasService";
import { IAreasService } from "../../../services/areas/types";






function EditAreas() {
    const [area, setArea] = useState<IAreasService>();
    const [areaInput, setAreaInput] = useState<string>('');

    const navigate = useNavigate();



    const {id} = useParams<{id:string}>();

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setAreaInput(e.target.value);
    } 

    const getAreaById = async () =>{
        try {
            const area = await AreasService.getById(id)
            setArea(area);
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAreaById();
    }, [id])

    const handleEdit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const data = {
            area: areaInput
        }

        try {
            const area = await AreasService.update(data, id)
            setArea(area);
        } catch (error: any) {
            console.log('Erro ao editar área: ',error);
        } finally{

        }

        navigate('/admin/areas');

    }



    return (
        // {loading ?
        //     (
        //         <div className="container text-center justify-content-center">
        //             <Spinner 
        //                 thickness='4px'
        //                 speed='0.65s'
        //                 emptyColor='gray.200'
        //                 color='green.400'
        //                 size='xl'
        //             />
        //         </div>
        //     ) : 
        //     (
        //  }
        <div className="container">
            
        <h4 className="my-3">Editar área</h4>
        <form onSubmit={handleEdit} className="d-flex align-items-center w-100">
            <Input 
                label={'Área'}
                name={'area'}
                required={true}
                type={'text'}
                OnChange={handleOnchange}
                value={areaInput || area?.area}
            />

            <div className="btns ms-2">
            <Button textBtn={'Editar'}/>
            </div>
        </form>
    </div>
    )
}

export { EditAreas }