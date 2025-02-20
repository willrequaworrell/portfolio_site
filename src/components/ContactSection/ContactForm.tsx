import { useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import Input from "./Input"
import TextArea from "./TextArea"
import Button from "./Button"


const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null)

    const [isSending, setIsSending] = useState<boolean>(false)
    const [sendError, setSendError] = useState<boolean>(false)
    const [sendSuccess, setSendSuccess] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!form.current) return
        setSendError(false)
        setIsSending(true)
        try  {
            await emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY})
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
        <form 
            ref={form} 
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center gap-y-8 border-[#F4FFF0] pb-8 md:w-1/2 md:border-l-4 md:p-8 md:pt-8"
        >
                <p className="text-[2vw]">Ask me anything!</p>
                <div className="flex w-full items-center justify-between">
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
    )
}

export default ContactForm
