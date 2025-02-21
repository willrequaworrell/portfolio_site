
interface SocialLinkPropsType {
    text: string
    icon: JSX.Element
    href: string
    openInNewTab?: boolean
}

const SocialLink = ({text, icon, href, openInNewTab=false}: SocialLinkPropsType) => {
    const additionalProps = openInNewTab ? 
    {
        target: "_blank",
        rel: "noopener noreferrer"
    } : 
    {}
    return (
        <a href={href} {...additionalProps}>
            <div className="flex justify-center items-center gap-x-2">
                <p className="text-[2vw]">{icon}</p>
                <p className="hover:underline">{text}</p>
            </div>
        </a>
    )
}

export default SocialLink
