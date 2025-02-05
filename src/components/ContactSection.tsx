
const ContactSection = () => {
    return (
        <div className="flex min-h-screen p-8 text-[#F4FFF0]">
            <div className="flex flex-grow flex-col items-center justify-center">
            <p className="text-[12vw]">Contact</p>
            <div className="flex w-full flex-grow flex-col p-2 md:flex-row md:p-8">
                <div className="hidden items-center justify-around border-[#F4FFF0] md:flex md:w-1/2 md:flex-col md:border-r-4">
                <div className="flex flex-grow flex-col items-start justify-around">
                    <p>LinkedIn - Will Worrell</p>
                    <p>GitHub - willrequaworrell</p>
                    <p>Email - willrequaworrell@gmail.com</p>
                    <p>Phone - (401)-578-9393</p>
                </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-y-8 border-[#F4FFF0] pb-8 md:w-1/2 md:border-l-4 md:p-8 md:pt-8">
                <div className="flex w-full items-center justify-between">
                    <input className="w-2/5 bg-[#F4FFF0] p-2 text-[#052B30]" type="text" placeholder="Name" />
                    <input className="w-2/5 bg-[#F4FFF0] p-2 text-[#052B30]" type="email" placeholder="Email" />
                </div>
                <textarea placeholder="Ask me anything..." className="w-full bg-[#F4FFF0] p-2 text-[#052B30]" cols={30} rows={10}> </textarea>
                </div>
                <div className="flex flex-col items-center justify-around border-[#F4FFF0] md:hidden md:border-r-4">
                <div className="flex flex-wrap gap-x-4">
                    <p>LinkedIn - Will Worrell</p>
                    <p>GitHub - willrequaworrell</p>
                    <p>Email - willrequaworrell@gmail.com</p>
                    <p>Phone - (401)-578-9393</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ContactSection
