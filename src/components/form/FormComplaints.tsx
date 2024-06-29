import { ChangeEvent, FormEvent, useState } from "react";
import { Input } from "../ui/input/Input";
import { Select } from "../ui/select/Select";
import { IComplaint, IFormComplaintsProps } from "./types";
import { Button } from "../ui/button/Button";
import { Textearea } from "../ui/textearea/Textearea";
import { SetAlertMessage } from "../../utils/messageAlert/SetAlertMessage";



function FormComplaint({handleSubmit, textBtn}: IFormComplaintsProps) {

    const [complaint, setComplaint] = useState<IComplaint>({} as IComplaint);
    const areaOptios: string[] = ['Ministerio da saúde', 'Transporte', 'Finanças'];
    const MAX_FILE_SIZE = 1 * 1024 * 1024;
   

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setComplaint({...complaint, [e.target.name]: e.target.value})
    }

    const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            if (file.size > MAX_FILE_SIZE) {
               SetAlertMessage({msg: `O ficheiro deve ter no máximo ${MAX_FILE_SIZE / 1024 / 1024} MB.`, type: 'error' })
                return;
            } else if(file.name.split('.')[1] !== 'pdf'  && file.name.split('.')[1] !== 'jpg' ){
                SetAlertMessage({msg: 'É permitido apenas ficheiro no formato PDF e JPG', type: 'error'})
                return;
            }

        }
        
        setComplaint({...complaint, [e.target.name]: e.target.files?.item(0)})
    }
  
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) =>{
        setComplaint({...complaint, [e.target.name]: e.target.options[e.target.selectedIndex].text})
    }

    const submit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        const formData = new FormData();
        
        Object.keys(complaint).forEach((key) => {
            const value = complaint[key as keyof IComplaint];
            if (value instanceof File) {
                formData.append(key, value);
            } else {
                formData.append(key, value.toString());
            }
        });

        handleSubmit(formData);
    }

    return (
        <div className='container w-auto my-3' >
            <form onSubmit={submit} >
                <div className="row">
                    <div className="col-md-6">
                        <Input
                            label={'Email *'}
                            name={'email'}
                            placeholder={'exemplo@gmail.com'}
                            type={'email'}
                            required={true}
                            OnChange={handleOnChange}
                            value={complaint.email || ''}
                        />
                      </div>
                    <div className="col-md-6">
                        <Input
                            label={'Nome'}
                            name={'name'}
                            placeholder={'João Mateus.'}
                            type={'text'}
                            required={false}
                            OnChange={handleOnChange}
                            value={complaint.name || ''}
                    />
                    </div>
                </div>
              
                <Select
                    label={'Área de reclamação *'}
                    required={true}
                    handleSelect={handleSelect}
                    name={'area'}
                    options={areaOptios}
                />
                <Textearea 
                    label={'Área de texto da reclamação *'}
                    required={true}
                    onChange={handleOnChange}
                    name={'message'}
                    value={complaint.message || ''}
                />
                    <Input
                    label={'Upload de ficheiros de reclamação'}
                    name={'attachments'}
                    type={'file'}
                    required={false}
                    OnChange={onFileChange}
                    
                  />
              
                <Button textBtn={textBtn} />
            </form>
        </div>
        
    )
}

export { FormComplaint }