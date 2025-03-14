import { motion } from "framer-motion"
import { FaFileDownload } from "react-icons/fa"
import { companySections } from "../../util/ResumeData"
import ResumeCompanySection from "./ResumeCompanySection"

const resumeVariants = {
    hidden: { opacity: 0, x: -250 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            damping: 10,
            stiffness: 500
        }
    }
}

const companySectionsContainerVariants = {
	hidden: {},
	visible: {
	  transition: {
		staggerChildren: 0.2 // Adjust the delay between children (in seconds)
	  }
	}
  };

const Resume = () => {
	return (
		<motion.div 
			variants={resumeVariants}
			initial={"hidden"}
			whileInView={"visible"}
			data-lenis-prevent
			className="flex flex-col w-full h-full md:h-2/3 bg-[#F4FFF0] rounded-xl p-4 md:p-8"
		>   
			<div className="flex items-center justify-between w-full gap-x-2 pb-2 border-slate-600/50 ">
				<h2 className="text-[2.5vw] text-[#093941] font-climate">Experience</h2>
				<a 
					href="/resume.pdf"
					download={"Will Worrell Resume.pdf"}
					className="flex items-center gap-x-2 px-4 py-2 rounded-xl bg-[#093941] text-[max(1vw,12px)] text-[#F4FFF0] italic cursor-pointer hover:text-[#F4FFF0] hover:bg-slate-600 hover:scale-105 transition-all ease-in-out"
				>
					<p>Download Resumé</p>
					<FaFileDownload />
				</a>
			</div>
			<motion.div 
				variants={companySectionsContainerVariants}
				initial="hidden"
				whileInView="visible"
				className="flex flex-col py-8 h-full flex-grow overflow-y-scroll text-[#F4FFF0] gap-y-4"
			>
				{companySections.map(section => (
					<>
						<ResumeCompanySection
							key={section.company}
							companySection={section}
						/>
						
					</>
				))}
			</motion.div>

		</motion.div>
	)
}

export default Resume
