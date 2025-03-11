import { motion } from "framer-motion"
import { sectionType } from "../types/section"

interface NavbarLinkPropsType {
    text: string
    section: sectionType
    isActive?: boolean
    activeSection: sectionType
    scrollTo: (section: sectionType) => void
}


const NavbarLink = ({text, isActive, section, scrollTo, activeSection}: NavbarLinkPropsType) => {
    
    const childVariants = {
        hidden: { opacity: 0, y: -20, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                // delay: 0.5,
                duration: 0.4,
                ease: "easeOut",
                damping: 10,
                stiffness: 500
            }
        }
    };

    return (
        <motion.li 
            variants={childVariants}
            onClick={() => scrollTo(section)} 
            className={`cursor-pointer text-[3vw] md:text-[1vw] font-ibm px-2  ${isActive ? "border-b-4 border-[#F4FFF0]" :  activeSection === "landing" ? "hover:text-[#F4FFF0]" : "hover:text-slate-600" } transition-colors duration-100`}>
                {text}
        </motion.li>
    )
}

export default NavbarLink
