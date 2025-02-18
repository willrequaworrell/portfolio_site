import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa"

const ContactSection = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const contactVariants = {
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

    const contentVariants = {
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


    return (
        <section className="bg-gradient-to-b from-[#052b32] to-[#011f24]" >
            <div className="flex min-h-screen max-h-screen p-8 text-[#F4FFF0]">
                <motion.div 
                    variants={containerVariants}
                    initial={"hidden"}
                    whileInView={"visible"}
                    className="flex flex-grow flex-col items-center justify-center"
                >
                    <motion.p 
                        variants={contactVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className="text-[12vw]"
                    >
                        Contact
                    </motion.p>
                    <motion.div 
                        variants={contentVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        className="flex w-full flex-grow flex-col p-2 md:flex-row md:p-8"
                    >
                        <div className="hidden items-center justify-around border-[#F4FFF0] md:flex md:w-1/2 md:flex-col md:border-r-4">
                        <div className="flex flex-grow flex-col items-start justify-around">

                            <p><FaLinkedin className="inline" /> Will Worrell</p>
                            <p>GitHub - willrequaworrell</p>
                            <p>Email - willrequaworrell@gmail.com</p>
                            <p>Phone - (401)-578-9393</p>
                        </div>
                        </div>
                        <form className="flex flex-col items-center justify-center gap-y-8 border-[#F4FFF0] pb-8 md:w-1/2 md:border-l-4 md:p-8 md:pt-8">
                                <p className="text-[2vw]">Ask me anything!</p>
                                <div className="flex w-full items-center justify-between">
                                    <input className="w-2/5 bg-[#F4FFF0] p-2 text-slate-600" type="text" placeholder="Name" />
                                    <input className="w-2/5 bg-[#F4FFF0] p-2 text-slate-600" type="email" placeholder="Email" />
                                </div>
                                <textarea placeholder="Message..." className="w-full bg-[#F4FFF0] p-2 text-slate-600" cols={30} rows={10}/>
                                <button>Send</button>
                        </form>
                        {/* Mobile contact form */}
                        <div className="flex flex-col items-center justify-around border-[#F4FFF0] md:hidden md:border-r-4">
                            <div className="flex flex-wrap gap-x-4">
                                <p>LinkedIn - Will Worrell</p>
                                <p>GitHub - willrequaworrell</p>
                                <p>Email - willrequaworrell@gmail.com</p>
                                <p>Phone - (401)-578-9393</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default ContactSection
