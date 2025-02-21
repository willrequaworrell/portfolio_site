import { useState } from "react";
import {  FaCircleLeft, FaCircleRight } from "react-icons/fa6";

interface CarouselPropsType {
    currentSlide: number
    setCurrentSlide: React.Dispatch<React.SetStateAction<number>>
    slides: {src: string, alt: string}[]
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
                        <div className="absolute flex justify-center items-center w-1/2 h-full left-0 bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-l-xl cursor-pointer">
                            <a className="hover:underline oaacity-100 ">Live Site</a>
                        </div>
                        <div className="absolute flex justify-center items-center w-1/2 h-full right-0 bg-slate-600/40 hover:bg-slate-600/50 text-[#F4FFF0] rounded-r-xl cursor-pointer">
                            <a className="hover:underline opacity-100">Github Repo</a>
                        </div>
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
