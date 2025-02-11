import { motion } from "framer-motion"

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

const aboutVariants = {
    hidden: { opacity: 0, y: 250 },
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

const ProjectsSection = () => {
    return (
        <section className="snap-start snap-always">
            <div className="flex min-h-screen max-h-screen p-8">
                <div className="flex flex-grow flex-col gap-x-8 md:flex-row-reverse">
                    <p className="text-start text-[16vw] text-[#F4FFF0] md:hidden">Projects</p>
                    <div className="flex h-full w-full items-center md:h-auto md:w-1/2">
                        <motion.div  
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            className="h-full w-full bg-[#F4FFF0] md:h-2/3"
                        />
                    </div>
                    <motion.div 
                        variants={aboutVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className="flex md:w-1/2"
                    >
                        <div className="flex w-full flex-col items-start justify-center text-[#F4FFF0]">
                            <p className="hidden text-[12vw] md:block">Projects</p>
                            <p>This is a description of the currently selected project. It keeps going becuase this is about how long it might be if I actually had a description that was legitimate, and not just a random string of thoughts and words put together to look like a paragraph.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
