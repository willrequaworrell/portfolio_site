// import { Carousel } from "@material-tailwind/react"
import { motion } from "framer-motion"
import Carousel from "./Carousel"
import { useState } from "react"
import { projectsData } from "../../util/ProjectsData"

const contentVariants = {
    hidden: { opacity: 0, x: 250 },
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

const projectsVariants = {
    hidden: { opacity: 0, y: 250 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            damping: 10,
            stiffness: 500,
        }
    }
}

const descriptionVariants = {
    hidden: { opacity: 0, y: 100, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 1.0,
            ease: "easeOut",
            damping: 10,
            stiffness: 500,
        }
    }
}


const ProjectsSection = () => {

    const [currentProject, setCurrentProject] = useState<number>(0)

    return (
        <section className="font-ibm bg-gradient-to-b from-[#093941] to-[#052b32] overflow-x-clip">
            <div className="flex h-[100dvh] max-h-screen p-6 sm:p-8">
                <div className="flex flex-grow flex-col justify-center gap-x-8 gap-y-4 md:flex-row-reverse">
                    <p className="text-start text-[10vw] md:text-[16vw] text-[#F4FFF0] font-climate md:hidden">Projects</p>
                    <div className="flex h-1/3  md:max-h-none w-full items-center md:h-auto md:w-1/2">
                        <motion.div  
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            // viewport={{ once: true }}
                            className="h-full w-full p-4 sm:p-8 rounded-xl bg-[#F4FFF0] md:h-2/3"
                        >
                            <Carousel 
                                currentSlide={currentProject}
                                setCurrentSlide={setCurrentProject}
                                slides={projectsData} 
                            />
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={projectsVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        // viewport={{ once: true }}
                        className="flex sm:h-full md:w-1/2 py-4  md:py-0" 
                    >
                        <div className="flex w-full flex-col items-start  text-[#F4FFF0]">
                            <div className="flex items-end h-2/5 ">
                                <p className="hidden text-[7vw] md:block font-climate">Projects</p>
                            </div>
                            <motion.div
                                key={projectsData[currentProject].title}
                                variants={descriptionVariants}
                                initial={"hidden"}
                                // whileInView={"visible"}
                                animate={"visible"}
                            >
                                <motion.p className="text-[3.5vw] md:text-[1.5vw] font-bold">{projectsData[currentProject].title}</motion.p>
                                <motion.p className="text-[max(10px,2.5vw)] md:text-[1vw]">{projectsData[currentProject].description}</motion.p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
