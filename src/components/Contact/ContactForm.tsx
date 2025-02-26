import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Input from "./Input"
import TextArea from "./TextArea"
import Button from "./Button"
import { FaCheck } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";


const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null)

    const [isSending, setIsSending] = useState<boolean>(false)
    const [sendError, setSendError] = useState<boolean>(false)
    const [sendSuccess, setSendSuccess] = useState<boolean>(false)

    const formVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
    }

    // setInterval(() => setSendSuccess(prev =>  !prev), 5000)

    const resetFormFields = () => {
        if (!form.current) return
        form.current.reset()
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return
        setSendError(false)
        setIsSending(true)
        try  {
            await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY})
            resetFormFields()
            setSendSuccess(true)
            console.log("Message sent successfully!")
        } catch (e) {
            setSendError(true)
            console.log("Error occured while sending message")
        } finally {
            setIsSending(false)
        }
    }
    return (
        <AnimatePresence mode="wait">
            {sendSuccess ? (
                <motion.div 
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={formVariants}
                    className="flex flex-col flex-grow justify-center items-center gap-y-2"
                >
                    <div className="flex justify-center items-center gap-x-2">
                        <p className="text-[2vw]">Message sent successfully</p>
                        <FaCheck className="text-[2vw]"/>
                    </div>
                    <p className="text-[1vw]">Talk to you soon!</p>
                </motion.div>
            ) : (
                <div className="flex h-full w-full md:w-1/2 items-center justify-center border-[#F4FFF0]  md:border-l-4 pb-8 md:p-8 md:pt-8 ">

                    <form 
                        ref={form} 
                        onSubmit={handleSubmit}
                        className="flex flex-col items-center w-full h-full gap-y-4 md:gap-y-8 "
                    >
                            <p className="text-[3vw] md:text-[2vw] font-bold">Ask me anything!</p>
                            <div className="flex w-full items-center justify-between gap-x-4">
                                <Input
                                    label="Name:"
                                    type="text"
                                    id="name"
                                    name="name"
                                />
                                <Input
                                    label="Email:"
                                    type="email"
                                    id="email"
                                    name="email"
                                />
                            </div>
                            <TextArea
                                label="Message:"
                                id="message"
                                name="message"
                            />
                            <Button isLoading={isSending} isSuccess={sendSuccess}/>
                            {sendError && <p>Error: message send unsuccessful</p>}
                    </form>
                </div>
            )
            }
        </AnimatePresence>
    )
}

export default ContactForm
