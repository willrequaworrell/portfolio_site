import { motion } from "framer-motion"

interface SocialLinkBubblePropsType {
    icon: JSX.Element
    href: string
    openInNewTab?: boolean
}


const SocialLinkBubble = ({icon, href, openInNewTab=false}: SocialLinkBubblePropsType) => {

    const childVariants = {
        hidden: { opacity: 0, filter: "blur(5px)" },
        visible: {
            opacity: 1,
            // x: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                damping: 10,
                stiffness: 500
            }
        }
    };

    const additionalProps = openInNewTab ? 
    {
        target: "_blank",
        rel: "noopener noreferrer"
    } : 
    {}
    return (
        <motion.a 
            variants={childVariants}
            href={href} {...additionalProps} 
            className="rounded-full p-4 bg-slate-500/65 text-[max(2vw,16px)] text-[#F4FFF0]  shadow-xl hover:scale-120 hover:border-[#F4FFF0] transition-all"
        >
            {icon}
        </motion.a>
    )
}

export default SocialLinkBubble
