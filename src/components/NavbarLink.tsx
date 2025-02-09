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
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
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
            className={`px-2  ${isActive ? "border-b-4 border-[#F4FFF0]" :  activeSection === "landing" ? "hover:text-[#F4FFF0]" : "hover:text-slate-600" } transition-colors duration-400`}>
                {text}
        </motion.li>
    )
}

export default NavbarLink
