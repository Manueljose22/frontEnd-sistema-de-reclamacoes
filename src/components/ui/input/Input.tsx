import { IInputProps } from "./types";


function Input({ type, OnChange, label, name, required, placeholder, value }: IInputProps) {
    return (
        
            <div className='mb-4'>

                <label className="form-label " htmlFor={name}>{label}</label>
                <input className="form-control"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    required={required}
                    onChange={OnChange}
                    id={name}
                />
            </div>
    )
}

export { Input }