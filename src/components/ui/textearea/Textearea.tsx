import { ITexteareaProps } from "./types";





function Textearea({name, label, onChange, required, value}: ITexteareaProps) {
  return (
    <div className="mb-4">
        <label className="form-label" htmlFor={name}>{label}</label>
        <textarea className="form-control mb-3" rows='6'
            name={name}
            onChange={onChange}
            required={required}
            value={value}
            ></textarea>
    </div>
  )
}

export { Textearea };