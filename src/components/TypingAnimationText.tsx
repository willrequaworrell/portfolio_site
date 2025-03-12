import { motion } from "framer-motion"

interface TypingAnimationText {
    text: string
    styles?: string
}

const TypingAnimationText = ({text, styles=""}: TypingAnimationText) => {
    const stringArray = text.split("")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0, y: 0, },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.075,
            }
        }
    };
    
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex w-full flex-wrap ${styles}`}
        >
          
            {stringArray.map((ch, i) => (
                <motion.p
                    key={i}
                    variants={childVariants}
                    className="w-[1ch] inline-block"
                >
                    {ch}
                </motion.p>
            ))}
            {/* <span className="animate-pulse">|</span> */}
        </motion.div>
    )
}

export default TypingAnimationText
