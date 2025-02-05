
const ProjectsSection = () => {
    return (
        <div className="flex min-h-screen p-8">
            <div className="flex flex-grow flex-col gap-x-8 md:flex-row-reverse">
            <p className="text-start text-[16vw] text-[#F4FFF0] md:hidden">Projects</p>
            <div className="flex h-full w-full items-center md:h-auto md:w-1/2">
                <div className="h-full w-full bg-[#F4FFF0] md:h-2/3"></div>
            </div>
            <div className="flex md:w-1/2">
                <div className="flex w-full flex-col items-start justify-center text-[#F4FFF0]">
                <p className="hidden text-[12vw] md:block">Projects</p>
                <p>This is a description of the currently selected project. It keeps going becuase this is about how long it might be if I actually had a description that was legitimate, and not just a random string of thoughts and words put together to look like a paragraph.</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ProjectsSection
