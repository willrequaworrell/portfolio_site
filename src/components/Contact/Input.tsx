
interface InputPropsType {
    label: string
    type: string
    id: string
    name: string
    placeholder?: string
    required?: boolean
}

const Input = ({label, type, id, name, placeholder = "", required=true}: InputPropsType) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <label htmlFor={id} className="">{label}</label>
            <input
                type={type} 
                id={id} 
                name={name} 
                placeholder={placeholder}
                required={required}
                className="bg-[#F4FFF0] p-2 text-slate-600 rounded-lg w-full"
            />
        </div>
    )
}

export default Input
