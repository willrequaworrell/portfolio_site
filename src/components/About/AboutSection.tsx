import { motion } from "framer-motion"
import Resume from "./Resume.tsx";


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

    return (
        <section id="about" className="font-ibm bg-gradient-to-b from-[#052B30] to-[#093941]">
            <div className="flex h-[100dvh] max-h-screen p-8">
                <div className="flex flex-col h-full justify-center gap-x-8 md:flex-row">
                    
                    <p className="text-end text-[10vw] font-climate text-[#F4FFF0] md:hidden">About</p>
                    
                    <div className="w-full h-full flex flex-col justify-center sm:items-center md:max-h-none md:w-1/2 min-h-0">
                        <Resume/>
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
                            <p className="text-[max(2.5vw,11px)] md:text-[1vw]">I’m a creative, resourceful developer inspired by turning complex ideas into intuitive, engaging applications. My eye for composition and aesthetics helps me deliver software that not only functions seamlessly but also looks great and is a joy to use.  After graduating from Colgate University with a degree in Computer Science, I explored roles as a Business Analyst and Project Manager, but discovered my true passion lies in application development. Through self-teaching, internships, and freelance work over the past two years, I've honed my skills in modern web development and cloud technologies. Combined with my experience in cross functional collaboration and project management, I bring holistic value to the software development lifecycle.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
