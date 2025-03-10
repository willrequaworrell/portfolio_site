import { motion } from "framer-motion"
import { ReactNode } from "react"

interface SocialLinkBubbleContainerPropsType {
    children: ReactNode,
}



const SocialLinkBubbleContainer = ({children}: SocialLinkBubbleContainerPropsType) => {

    const containerVariants = {
        hidden: { opacity: 0, },
        visible: {
            opacity: 1,
            transition: {
                delay: 2.5,
                staggerChildren: 0.15,
                delayChildren: 3.0
                
            }
        }
    };

    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden absolute z-10 right-0 top-1/2  sm:-translate-y-3/4 sm:flex flex-col justify-center items-center gap-y-6 m-8  "
        >
            {children}
        </motion.div>
    )
}

export default SocialLinkBubbleContainer
