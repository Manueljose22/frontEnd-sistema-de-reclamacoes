import { ChangeEvent } from "react"
import { IFormAreas } from "../types"
import { Input } from "../../../../components/ui/input/Input";
import { Button } from "../../../../components/ui/button/Button";





function FormAreas({onSubmit, setInputArea}: IFormAreas) {

    const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputArea(e.target.value);
    } 
    
  return (
    <div className="container">

        <form onSubmit={onSubmit}>
            <Input 
                label={'area'}
                name={'area'}
                required={true}
                type={'text'}
                OnChange={handleOnchange}
            />

            <Button textBtn="Criar"/>
        </form>
    </div>
  )
}

export default FormAreas