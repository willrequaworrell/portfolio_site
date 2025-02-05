import NavbarLink from "./NavbarLink"

const Navbar = () => {
    return (
        <nav className="sticky">
            <div className="flex w-full items-center justify-center">
                <div className="flex gap-x-16 p-4 text-slate-600">
                    <NavbarLink text="Home" isActive/>
                    <NavbarLink text="About"/>
                    <NavbarLink text="Projects"/>
                    <NavbarLink text="Contact"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
