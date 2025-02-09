


const LandingSection = () => {
    return (
        <section id="landing" className="snap-start">
            <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/cGxhbS4/thierry-meier-PKEPAe-MBOIU-unsplash.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052B30] opacity-100"></div>

                <div className="relative z-10 flex min-h-screen overflow-clip flex-col leading-none">

                    <div className="absolute bottom-0 left-0 mb-0  text-[#F4FFF0]">
                        <div className="flex items-baseline md:-my-[4vh] lg:-my-[8vh]">
                            <p className="text-[max(22vw,100px)] ">Will</p>
                            <p className="text-[max(4.5vw,20px)]">/Software Engineer</p>
                        </div>
                        <p className="text-[max(25vw,120px)] -my-[2vh] md:-my-[4vh] lg:-my-[5vh]">Worrell</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
