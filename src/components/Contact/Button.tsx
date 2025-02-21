import { AiOutlineLoading } from "react-icons/ai"
import { FaCheck } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"

interface ButtonPropsType {
    isLoading: boolean
    isSuccess: boolean
}

const Button = ({isLoading, isSuccess}:ButtonPropsType) => {

    let icon = <IoIosSend className="text-xl"/>

    if (isLoading) {
        icon = <AiOutlineLoading className="animate-spin"/>
    } else if (isSuccess) {
        icon = <FaCheck />
    }


    return (
        <button 
            type="submit" 
            value="Send"
            disabled={isSuccess}
            className="text-[#F4FFF0] border-[#F4FFF0] border-2 px-8 py-2 rounded-xl cursor-pointer hover:text-slate-600 hover:bg-[#F4FFF0] disabled:border-slate-600 disabled:text-slate-600 disabled:cursor-not-allowed transition-all ease-in-out" 
        >
            <div className="flex items-center justify-center gap-x-1">
                <p>Send</p>
                {icon}
            </div>
        </button>
    )
}

export default Button
