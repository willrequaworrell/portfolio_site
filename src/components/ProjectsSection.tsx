import { Carousel } from "@material-tailwind/react"
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
        <section className="">
            <div className="flex min-h-screen max-h-screen p-8">
                <div className="flex flex-grow flex-col gap-x-8 md:flex-row-reverse">
                    <p className="text-start text-[16vw] text-[#F4FFF0] md:hidden">Projects</p>
                    <div className="flex h-full w-full items-center md:h-auto md:w-1/2">
                        <motion.div  
                            variants={contentVariants}
                            initial={"hidden"}
                            whileInView={"visible"}
                            className="h-full w-full p-8 bg-[#F4FFF0] md:h-2/3"
                        >
                            <Carousel>
                                <img
                                    src="/klarr.png"
                                    alt="image 1"
                                    className="h-full w-full object-contain"
                                />
                                <img
                                    src="/britespot.png"
                                    alt="image 2"
                                    className="h-full w-full object-contain"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                                    alt="image 3"
                                    className="h-full w-full object-cover"
                                />
                            </Carousel>
                        </motion.div>
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
