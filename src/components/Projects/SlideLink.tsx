import { FaGithub,  } from "react-icons/fa";
import { SlGlobe } from "react-icons/sl";


interface SlideLinkPropsType {
    type: "live" | "github"
    href: string

}


const SlideLink = ({type, href}: SlideLinkPropsType) => {
    
    if (type === "live") {
        return (
            <a 
                href={href}
                target="_blank"    
                className="absolute flex justify-center items-center gap-x-2 w-1/2 h-full left-0 text-[max(12px,1.25vw)] bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-l-xl cursor-pointer transition-all ease-in-out"
            >
                <SlGlobe/> 
                <p className=" font-ibm text-[max(12px,1.25vw)] font-bold hover:underline">Live Site </p>
            </a>
        )

    } else if (type === "github") {
        return (
            <a 
                href={href}
                target="_blank"    
                className="absolute flex justify-center items-center gap-x-2 w-1/2 h-full right-0 text-[max(12px,1.25vw)] bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-r-xl cursor-pointer border-l transition-all ease-in-out"
            >
                <FaGithub />
                <p className=" font-ibm text-[max(12px,1.25vw)] font-bold hover:underline"> Github Repo </p>
            </a>
        )
    }
}

export default SlideLink
