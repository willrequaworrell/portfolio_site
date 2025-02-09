


const LandingSection = () => {
    return (
        <section id="landing" className="snap-start">
            <div className="relative min-h-screen bg-cover bg-center" style={{backgroundImage: "url('https://i.ibb.co/cGxhbS4/thierry-meier-PKEPAe-MBOIU-unsplash.jpg')"}}>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#052B30] opacity-100"></div>

                <div className="relative z-10 flex min-h-screen flex-col">

                    <div className="absolute bottom-0 left-0 text-[#F4FFF0]">
                        <div className="flex items-baseline">
                            <p className="text-[22vw] leading-none">Will</p>
                            <p className="text-[4.5vw] leading-none">/Software Engineer</p>
                        </div>
                        <p className="text-[25vw] leading-[12rem]">Worrell</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingSection
