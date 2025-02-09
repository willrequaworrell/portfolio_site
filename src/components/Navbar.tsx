import NavbarLink from "./NavbarLink"
import { sectionType } from "../types/section"

interface NavbarPropsType {
    scrollTo: (section: sectionType) => void
    activeSection: sectionType
}

const Navbar = ({scrollTo, activeSection}: NavbarPropsType) => {
    const textColor = activeSection === "landing" ? "text-slate-600" : "text-[#F4FFF0]"

    return (
        <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 rounded-full">
            <div className="flex w-full items-center justify-center">
                <div  className={`flex gap-x-4 sm:gap-x-16 p-4 ${textColor}`}>
                    <NavbarLink text="Home" section="landing" activeSection={activeSection} isActive={activeSection === "landing"} scrollTo={scrollTo}/>
                    <NavbarLink text="About" section="about" activeSection={activeSection} isActive={activeSection === "about"} scrollTo={scrollTo}/>
                    <NavbarLink text="Projects" section="projects" activeSection={activeSection} isActive={activeSection === "projects"} scrollTo={scrollTo}/>
                    <NavbarLink text="Contact" section="contact" activeSection={activeSection} isActive={activeSection === "contact"} scrollTo={scrollTo}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
