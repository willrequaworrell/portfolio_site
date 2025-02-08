interface NavbarLinkPropsType {
    text: string
    section: string
    isActive?: boolean
    scrollTo: (section: string) => void
}


const NavbarLink = ({text, isActive, section, scrollTo}: NavbarLinkPropsType) => {
    return (
        <p 
            onClick={() => scrollTo(section)} 
            className={`px-2  ${isActive ? "border-b-4 border-[#F4FFF0]" : "hover:text-[#F4FFF0]"}`}>{text}
        </p>
    )
}

export default NavbarLink
