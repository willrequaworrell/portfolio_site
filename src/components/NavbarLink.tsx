interface NavbarLinkPropsType {
    text: string
    isActive?: boolean
}


const NavbarLink = ({text, isActive}: NavbarLinkPropsType) => {
    return (
        <p className={`px-2  ${isActive ? "border-b-4 border-[#F4FFF0]" : "hover:text-[#F4FFF0]"}`}>{text}</p>
    )
}

export default NavbarLink
