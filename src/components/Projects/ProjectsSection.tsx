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

const ProjectsSection = () => {

    const [currentProject, setCurrentProject] = useState<number>(0)

    return (
        <section className="font-ibm bg-gradient-to-b from-[#093941] to-[#052b32] overflow-x-clip">
            <div className="flex min-h-screen max-h-screen p-8">
                <div className="flex flex-grow flex-col gap-x-8 md:flex-row-reverse">
                    <p className="text-start text-[16vw] text-[#F4FFF0] font-climate md:hidden">Projects</p>
                    <div className="flex h-full w-full items-center md:h-auto md:w-1/2">
                        <motion.div  
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            viewport={{ once: true }}
                            className="h-full w-full p-8 rounded-xl bg-[#F4FFF0] md:h-2/3"
                        >
                            <Carousel 
                                currentSlide={currentProject}
                                setCurrentSlide={setCurrentProject}
                                slides={projectsData} />
                        </motion.div>
                    </div>
                    <motion.div 
                        variants={projectsVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="flex md:w-1/2"
                    >
                        <div className="flex w-full flex-col items-start text-[#F4FFF0]">
                            <div className="flex items-end h-2/5">
                                <p className="hidden text-[7vw] md:block font-climate">Projects</p>
                            </div>
                            <div>
                                <p className="text-[1.5vw] font-bold">{projectsData[currentProject].title}</p>
                                <p>{projectsData[currentProject].description}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
