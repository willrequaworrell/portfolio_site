import NavbarLink from "./NavbarLink"
import { sectionType } from "../types/section"
import { motion } from "framer-motion"

interface NavbarPropsType {
    scrollTo: (section: sectionType) => void
    activeSection: sectionType
}


const Navbar = ({scrollTo, activeSection}: NavbarPropsType) => {
    const textColor = activeSection === "landing" ? "text-slate-600" : "text-[#F4FFF0]"

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: 1.8,
                staggerChildren: 0.1,
                delayChildren: 2.2
            }
        }
    };

    return (
        <motion.nav  
            className="fixed top-0 left-1/2 -translate-x-1/2 z-50 rounded-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex relative w-full items-center justify-center">
                <ul className={`flex gap-x-4 sm:gap-x-16 pt-4 pb-2 ${textColor}`}>
                    <NavbarLink  text="Home" section="landing" activeSection={activeSection} isActive={activeSection === "landing"} scrollTo={scrollTo}/>
                    <NavbarLink  text="About" section="about" activeSection={activeSection} isActive={activeSection === "about"} scrollTo={scrollTo}/>
                    <NavbarLink  text="Projects" section="projects" activeSection={activeSection} isActive={activeSection === "projects"} scrollTo={scrollTo}/>
                    <NavbarLink  text="Contact" section="contact" activeSection={activeSection} isActive={activeSection === "contact"} scrollTo={scrollTo}/>
                </ul>
            </div>
        </motion.nav>
    )
}

export default Navbar
