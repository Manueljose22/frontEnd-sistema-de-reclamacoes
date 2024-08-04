import { ChangeEvent } from "react"
import { IFormAreas } from "../types"
import { Input } from "../../../../components/ui/input/Input";
import { Button } from "../../../../components/ui/button/Button";





function FormAreas({onSubmit, setInputArea,title,textButton}: IFormAreas) {

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputArea(e.target.value);
    } 
    
  return (
    <div className="container">
        <h4 className="my-3">{title}</h4>
        <form onSubmit={onSubmit} className="d-flex align-items-center w-100">
            <Input 
                label={'Área'}
                name={'area'}
                required={true}
                type={'text'}
                OnChange={handleOnchange}
            />

            <div className="btns ms-2">
            <Button textBtn={textButton}/>
            </div>
        </form>
    </div>
  )
}

export default FormAreas