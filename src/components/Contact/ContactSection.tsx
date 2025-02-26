import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaPhoneSquare } from "react-icons/fa"
import ContactForm from "./ContactForm";
import SocialLink from "./SocialLink";
import { MdOutlineMailOutline } from "react-icons/md";


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
        <section className="font-ibm bg-gradient-to-b from-[#052b32] to-[#011f24]" >
            <div className="flex items-center min-h-screen max-h-screen p-8 text-[#F4FFF0]">
                
                <motion.div 
                    variants={containerVariants}
                    initial={"hidden"}
                    whileInView={"visible"}
                    viewport={{ once: true }}
                    className="flex flex-grow flex-col items-center justify-center gap-y-4"
                >
                    <motion.p 
                        variants={contactVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="text-[10vw] md:text-[7vw] font-climate  "
                    >
                        Contact
                    </motion.p>
                    <motion.div 
                        variants={contentVariants}
                        initial={"hidden"}
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="flex w-full flex-grow flex-col p-2 text-[2.5vw] md:text-[1vw] md:flex-row md:p-8"
                    >
                        <div className="hidden items-center justify-around border-[#F4FFF0] md:flex md:w-1/2 md:flex-col md:border-r-4">
                            <div className="flex flex-grow flex-col items-start justify-around">

                                <SocialLink
                                    text="Linkedin - Will Worrell"
                                    icon={<FaLinkedin />}
                                    href="https://linkedin.com/in/wrw"
                                    openInNewTab
                                />
                                <SocialLink
                                    text="Github - willrequaworrell"
                                    icon={<FaGithub />}
                                    href="https://github.com/willrequaworrell"
                                    openInNewTab
                                />
                                <SocialLink
                                    text="Email - willrequaworrell@gmail.com"
                                    icon={<MdOutlineMailOutline />}
                                    href="mailto:willrequaworrell@gmail.com"
                                />
                                <SocialLink
                                    text="Mobile - (401)-578-9393"
                                    icon={<FaPhoneSquare />}
                                    href="sms:+14015789393"
                                />
                                
                            </div>
                        </div>
                        <ContactForm/>
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
