import { useState } from "react";
import {  FaCircleLeft, FaCircleRight } from "react-icons/fa6";

interface CarouselPropsType {
    currentSlide: number
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
    slides: {
        title:string, 
        description: string, 
        src: string, 
        alt: string, 
        live: string, 
        github: string 
    }[]
}

const Carousel = ({slides, currentSlide, setCurrentSlide}: CarouselPropsType) => {
    
    const [showSlideLinks, setShowSlideLinks] = useState<boolean>(false)

    const handlePrev = () => {
        if (currentSlide <= 0) return
        setCurrentSlide(prev => prev - 1)
    }

    const handleNext = () => {
        if (currentSlide >= slides.length-1) return
        setCurrentSlide(prev => prev + 1)
    }



    return (
        <div className="relative flex h-full flex-col justify-center items-center gap-y-8">
            <div 
                onMouseEnter={() => setShowSlideLinks(true)}
                onMouseLeave={() => setShowSlideLinks(false)}
                className="relative flex flex-grow justify-center items-center  rounded-xl"
            >
                <img 
                    src={slides[currentSlide].src} 
                    alt={slides[currentSlide].alt} 
                    className={`${showSlideLinks && "blur-xs"}`}
                />
                {showSlideLinks &&
                    <>
                        <a 
                            href={slides[currentSlide].live}
                            target="_blank"    
                            className="absolute flex justify-center items-center w-1/2 h-full left-0 bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-l-xl cursor-pointer"
                        >
                            <p 
                                className="hover:underline"
                            >
                                Live Site
                            </p>
                        </a>
                        <a 
                            href={slides[currentSlide].github}
                            target="_blank"
                            className="absolute flex justify-center items-center w-1/2 h-full right-0 bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-r-xl cursor-pointer"
                        >
                            <p 
                                className="hover:underline opacity-100"
                            >
                                Github Repo
                            </p>
                        </a>
                    </>
                }
            </div>
            <div className="flex gap-x-8 text-[4vh] text-[#093941]">
                <button className="hover:text-slate-600" onClick={handlePrev}><FaCircleLeft /></button>
                <button className="hover:text-slate-600" onClick={handleNext}><FaCircleRight /></button>
            </div>
           
        </div>
    )
}

export default Carousel
