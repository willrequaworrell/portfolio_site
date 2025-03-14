interface TextAreaPropsType {
    label: string
    id: string
    name: string
    placeholder?: string
    required?: boolean
}


const TextArea = ({label, id, name, placeholder, required=true}: TextAreaPropsType) => {
    return (
        <div className="flex flex-col w-full h-full gap-y-2">
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name} 
                placeholder={placeholder} 
                required={required}
                data-lenis-prevent
                className="w-full min-h-32 bg-[#F4FFF0] p-2 text-slate-600 resize-none overflow-y-auto rounded-lg" 
            />
        </div>
    )
}

export default TextArea
