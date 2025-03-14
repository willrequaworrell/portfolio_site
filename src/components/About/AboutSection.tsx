import { motion } from "framer-motion"
import ResumeCompanySection from "./ResumeCompanySection";
import { companySections } from "../../util/ResumeData.js";
import { FaFileDownload } from "react-icons/fa";




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

    return (
        <section id="about" className="font-ibm bg-gradient-to-b from-[#052B30] to-[#093941]">
            <div className="flex h-[100dvh] max-h-screen p-8">
                <div className="flex flex-col h-full justify-center gap-x-8 md:flex-row">
                    <p className="text-end text-[10vw] font-climate text-[#F4FFF0] md:hidden">About</p>
                    <div className="w-full h-full flex flex-col justify-center sm:items-center md:max-h-none md:w-1/2 min-h-0">
                        <motion.div 
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            data-lenis-prevent
                            className="flex flex-col w-full h-full md:h-2/3 bg-[#F4FFF0] rounded-xl p-4 md:p-8"
                        >   
                            <div className="flex items-center justify-between w-full gap-x-2 pb-2 border-slate-600/50 ">
                                <h2 className="text-[2.5vw] text-[#093941] font-climate">Experience</h2>
                                <a 
                                    href="/resume.pdf"
                                    download={"Will Worrell Resume.pdf"}
                                    className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-[#093941] text-[max(1vw,12px)] text-[#F4FFF0] italic cursor-pointer hover:text-[#F4FFF0] hover:bg-slate-600 hover:scale-105 transition-all ease-in-out"
                                >
                                    <p>Download Resumé</p>
                                    <FaFileDownload />
                                </a>
                            </div>
                            <div className="flex flex-col py-8 h-full flex-grow overflow-y-scroll text-[#F4FFF0] gap-y-4">
                                {companySections.map(section => (
                                    <>
                                        <ResumeCompanySection
                                            key={section.company}
                                            companySection={section}
                                        />
                                        
                                    </>
                                ))}
                            </div>

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
                            <p className="text-[max(2.5vw,12px)] md:text-[1vw]">I’m a creative, resourceful developer inspired by turning complex ideas into intuitive, engaging applications. My eye for composition and aesthetics helps me deliver software that not only functions seamlessly but also looks great and is a joy to use.  After graduating from Colgate University with a degree in Computer Science, I explored roles as a Business Analyst and Project Manager, but discovered my true passion lies in application development. Through self-teaching, internships, and freelance work over the past two years, I've honed my skills in modern web development and cloud technologies. Combined with my experience in cross functional collaboration and project management, I bring holistic value to the software development lifecycle.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
