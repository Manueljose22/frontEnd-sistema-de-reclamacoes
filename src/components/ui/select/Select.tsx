import { ISelectProps } from "./types"





function Select({ handleSelect, label, required, name, value, options }: ISelectProps) {
    return (
        <div className="mb-4">
            <label className="form-label" htmlFor={name}>{label}</label>
            <select className="form-control mb-3" name={name} required={required} onChange={handleSelect}>
                <option>Selecione a área</option>
                {options.map((option) => (
                    <option value={value || option.area} key={option.id}>{option.area}</option>
                ))}
            </select>
        </div>
    )
}

export { Select }