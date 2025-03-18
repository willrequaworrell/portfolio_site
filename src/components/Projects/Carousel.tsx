import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {  FaSquareCaretLeft, FaSquareCaretRight } from "react-icons/fa6";
import SlideLink from "./SlideLink";

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
    
    const [direction, setDirection] = useState<"left" | "right">("right")
    const [showSlideLinks, setShowSlideLinks] = useState<boolean>(false)
    const numSlides = slides.length
    
    const variants = {
        initial: (direction: string) => ({
          x: direction === "right" ? 300 : -300,
          opacity: 0,
        }),
        animate: {
          x: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        },
        exit: (direction: string) => ({
          x: direction === "right" ? -300 : 300,
          opacity: 0,
          transition: { duration: 0.5 },
        }),
      };
      


    const handlePrev = () => {
        setDirection("left")
        setCurrentSlide(prev => ((prev - 1) + numSlides) % numSlides)
    }

    const handleNext = () => {
        setDirection("right")
        setCurrentSlide(prev => (prev + 1) % numSlides)
    }



    return (
        <div className="relative flex h-full flex-col justify-center items-center gap-y-2 sm:gap-y-8">
            <div 
                onMouseEnter={() => setShowSlideLinks(true)}
                onMouseLeave={() => setShowSlideLinks(false)}
                className="relative w-full flex flex-grow justify-center items-center rounded-xl overflow-clip "
            >
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.img 
                        src={slides[currentSlide].src} 
                        alt={slides[currentSlide].alt} 
                        custom={direction}
                        key={currentSlide}
                        variants={variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`${showSlideLinks && "blur-xs"}`}
                    />
                </AnimatePresence>
                {showSlideLinks &&
                    <>
                        <SlideLink type="live" href={slides[currentSlide].live}/>
                        <SlideLink type="github" href={slides[currentSlide].github}/>
                    </>
                }
            </div>
            <div className="flex  gap-x-8 items-center text-[4.5vh]  text-[#093941]">
                <button className="hover:text-slate-600 hover:scale-120 transition-all" onClick={handlePrev}><FaSquareCaretLeft /></button>
                <p className="text-[max(12px,2.5vw)] md:text-[1vw]">{currentSlide + 1} / {slides.length}</p>
                <button className="hover:text-slate-600 hover:scale-120 transition-all" onClick={handleNext}><FaSquareCaretRight /></button>
            </div>
           
        </div>
    )
}

export default Carousel
