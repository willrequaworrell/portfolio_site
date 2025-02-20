
interface SocialLinkPropsType {
    text: string
    icon: JSX.Element
    href: string
}

const SocialLink = ({text, icon, href}: SocialLinkPropsType) => {
    return (
        <a href={href} target="_blank">
            <div className="flex justify-center items-center gap-x-2">
                <p className="text-[2vw]">{icon}</p>
                <p className="hover:underline">{text}</p>
            </div>
        </a>
    )
}

export default SocialLink
