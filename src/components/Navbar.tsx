import NavbarLink from "./NavbarLink"

interface NavbarPropsType {
    scrollTo: (section: string) => void
}

const Navbar = ({scrollTo}: NavbarPropsType) => {
    return (
        <nav className="sticky">
            <div className="flex w-full items-center justify-center">
                <div className="flex gap-x-16 p-4 text-slate-600">
                    <NavbarLink text="Home" section="landing" isActive scrollTo={scrollTo}/>
                    <NavbarLink text="About" section="about" scrollTo={scrollTo}/>
                    <NavbarLink text="Projects" section="projects" scrollTo={scrollTo}/>
                    <NavbarLink text="Contact" section="contact" scrollTo={scrollTo}/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
