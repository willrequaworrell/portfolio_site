import { motion } from "framer-motion"


const LandingSection = () => {

    const titleContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const nameVariants = {
        hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                damping: 10,
                stiffness: 500,
                staggerChildren: 0.3,
                delayChildren: 0.4
            }
        }
    };

    const sweVariants = {
        hidden: { opacity: 0, y: 25, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.4,
                ease: "easeOut",
                damping: 10,
                stiffness: 500
            }
        }
    }

    return (
        <section id="landing" className="">
            <div className="relative min-h-screen max-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/cGxhbS4/thierry-meier-PKEPAe-MBOIU-unsplash.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052B30] opacity-100"></div>

                <div className="relative z-10 flex min-h-screen overflow-clip flex-col leading-none">

                    <motion.div 
                        variants={titleContainerVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        className="absolute bottom-0 left-0 mb-0 text-[#F4FFF0]"
                    >
                        <motion.div 
                            className="flex items-baseline md:-my-[4vh] lg:-my-[4vh]"
                            variants={nameVariants}
                        >
                            <motion.p className="text-[max(14vw,100px)] font-climate">WILL</motion.p>
                            <motion.p variants={sweVariants} className="text-[max(3.75vw,20px)] font-ibm italic"> //Software Engineer</motion.p>
                        </motion.div>
                        <motion.p 
                            variants={nameVariants}
                            className="font-climate text-[max(14vw,120px)] -my-[2vh] md:-my-[4vh] lg:-my-[2vh]"
                        >
                            WORRELL
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
