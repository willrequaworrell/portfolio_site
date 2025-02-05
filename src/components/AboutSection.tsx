
const AboutSection = () => {
    return (
        <div className="flex min-h-screen p-8">
            <div className="flex flex-grow flex-col gap-x-8 md:flex-row">
            <p className="text-end text-[16vw] text-[#F4FFF0] md:hidden">About</p>
            <div className="flex h-full w-full items-center md:h-auto md:w-1/2">
                <div className="h-full w-full bg-[#F4FFF0] md:h-2/3"></div>
            </div>
            <div className="flex md:w-1/2">
                <div className="flex w-full flex-col items-end justify-center text-[#F4FFF0]">
                <p className="hidden text-[12vw] md:block">About</p>
                <p>I’m a creative, resourceful developer inspired by turning complex ideas into intuitive, engaging applications. My eye for composition and aesthetics helps me deliver software that not only functions seamlessly but also looks great and is a joy to use.  After graduating from Colgate University with a degree in Computer Science, I explored roles as a Business Analyst and Project Manager, but discovered my true passion lies in application development. Through self-teaching, internships, and freelance work over the past two years, I've honed my skills in modern web development and cloud technologies. Combined with my experience in cross functional collaboration and project management, I bring holistic value to the software development lifecycle.</p>
                <p>Download my resume here</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AboutSection
