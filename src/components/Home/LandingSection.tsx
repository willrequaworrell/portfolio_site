import { motion } from "framer-motion"
import SocialLinkBubble from "./SocialLinkBubble";
import { FaGithub, FaLinkedin, FaPhoneSquare } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import SocialLinkBubbleContainer from "./SocialLinkBubbleContainer";
import TypingAnimationText from "../TypingAnimationText";


const LandingSection = () => {

    const titleContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
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
                duration: 0.3,
                ease: "easeOut",
                damping: 10,
                stiffness: 500,
            }
        }
    };


    return (
        <section id="landing" >
            <div className="relative h-[100dvh] max-h-screen bg-cover bg-center overflow-clip" style={{backgroundImage: "url('/wave.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052B30] opacity-100"></div>
                <SocialLinkBubbleContainer>
                    <SocialLinkBubble icon={<FaLinkedin />} href="https://linkedin.com/in/wrw" openInNewTab/>
                    <SocialLinkBubble icon={<FaGithub />} href="https://github.com/willrequaworrell" openInNewTab/>
                    <SocialLinkBubble icon={<MdOutlineMailOutline />} href="mailto:willrequaworrell@gmail.com"/>
                    <SocialLinkBubble icon={<FaPhoneSquare />} href="sms:+14015789393"/>
                    
                </SocialLinkBubbleContainer>
                <div className="relative flex h-full flex-col leading-none">

                    <motion.div 
                        variants={titleContainerVariants}
                        initial={"hidden"}
                        animate={"visible"}
                        className="absolute bottom-0 left-0 mb-0 text-[#F4FFF0]"
                    >
                        <motion.div 
                            className="flex items-baseline md:-my-[2vh] lg:-my-[4vh]"
                            variants={nameVariants}
                        >
                            <motion.p className="text-[max(14vw,40px)] font-climate">WILL</motion.p>
                            {/* <motion.p variants={sweVariants} className="text-[max(3.75vw,16px)] font-ibm italic"> Software Engineer</motion.p> */}
                            <TypingAnimationText text="Software Engineer" styles=" text-[max(3.75vw,16px)] font-ibm italic"/>
                        </motion.div>
                        <motion.p 
                            variants={nameVariants}
                            className="font-climate text-[max(14vw,40px)] -my-[1vh] md:-my-[2vh] lg:-my-[2vh]"
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
