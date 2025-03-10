import { motion } from "framer-motion"

interface TypingAnimationText {
    text: string
    styles?: string
}

const TypingAnimationText = ({text, styles=""}: TypingAnimationText) => {
    const stringArray = text.split("")
    console.log(stringArray)

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.075,
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
                duration: 0.1,
            }
        }
    };
    
    return (
        <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex ${styles}`}
        >
          
            {stringArray.map(ch => (
                <motion.p
                    variants={childVariants}
                    className="w-[1ch]"
                >{ch}</motion.p>
            ))}
            {/* <span className="animate-pulse">|</span> */}
        </motion.div>
    )
}

export default TypingAnimationText
