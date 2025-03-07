import { motion } from "framer-motion"
import { useState } from "react"
import { TbHandClick } from "react-icons/tb";


const contentVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            damping: 10,
            stiffness: 500
        }
    }
}

const aboutVariants = {
    hidden: { opacity: 0, y: 250, },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            damping: 10,
            stiffness: 500
        }
    }
}

const AboutSection = () => {

    const [showResume, setShowResume] = useState<boolean>(false)

    return (
        <section id="about" className="font-ibm bg-gradient-to-b from-[#052B30] to-[#093941]">
            <div className="flex h-[100dvh] max-h-screen p-8">
                <div className="flex flex-grow flex-col justify-center gap-x-8 md:flex-row">
                    <p className="text-end text-[10vw] font-climate text-[#F4FFF0] md:hidden">About</p>
                    <div className="w-full h-full flex items-center max-h-1/2 min-h-1/3 md:max-h-none md:w-1/2">
                        <motion.div 
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            className=" w-full h-full flex justify-center items-center bg-[#F4FFF0] md:h-2/3 rounded-xl p-4 md:p-8"
                        >
                            {showResume ? (
                                <iframe
                                    src="/resume.pdf#navpanes=0"
                                    width="100%"
                                    height="100%"
                                    className="rounded-xl"
                                />
                            ) : (
                                <div 
                                    onClick={() => setShowResume(true)}
                                    className="flex justify-start items-center flex-grow font-climate text-[#093941] h-full p-8"
                                >
                                    {/* <div className="flex flex-col justify-center h-full text-[4vw]">
                                        <p>Click</p>
                                        <p>for</p>
                                        <p>Resumé </p>
                                    </div> */}
                                    <div className="flex flex-col h-full flex-grow justify-center items-center w-1/3 text-[32vw]">
                                        <TbHandClick/>
                                        <p className="text-[2vw] font-climate">Click for Resumé</p>
                                    </div>
                                    
                                    
                                </div>
                            )}
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={aboutVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="flex w-full md:w-1/2 py-4 md:py-0"
                    >
                        <div className="w-full flex flex-col items-end justify-center text-[#F4FFF0]">
                            <p className="hidden text-[7vw] font-climate md:block">About</p>
                            <p className="text-[2.5vw] md:text-[1vw]">I’m a creative, resourceful developer inspired by turning complex ideas into intuitive, engaging applications. My eye for composition and aesthetics helps me deliver software that not only functions seamlessly but also looks great and is a joy to use.  After graduating from Colgate University with a degree in Computer Science, I explored roles as a Business Analyst and Project Manager, but discovered my true passion lies in application development. Through self-teaching, internships, and freelance work over the past two years, I've honed my skills in modern web development and cloud technologies. Combined with my experience in cross functional collaboration and project management, I bring holistic value to the software development lifecycle.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
