interface TextAreaPropsType {
    label: string
    id: string
    name: string
    placeholder?: string
    rows?: number
    cols?: number
    required?: boolean
}


const TextArea = ({label, id, name, placeholder, rows=10, cols=3, required=true}: TextAreaPropsType) => {
    return (
        <div className="flex flex-col w-full gap-y-2">
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name} 
                placeholder={placeholder} 
                rows={rows} 
                cols={cols} 
                required={required}
                className="w-full bg-[#F4FFF0] p-2 text-slate-600 resize-none overflow-y-auto rounded-lg" 
            />
        </div>
    )
}

export default TextArea
