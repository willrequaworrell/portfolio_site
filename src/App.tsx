
import { useEffect, useRef, useState } from "react"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import GradientContainer from "./components/GradientContainer"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"
import Navbar from "./components/Navbar"
import { sectionType } from "./types/section"

function App() {
	const [activeSection, setActiveSection] = useState<sectionType>("landing")
	
	const landingRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);


	const scrollTo = (section: sectionType) => {
		const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
			landing: landingRef,
			about: aboutRef,
			projects: projectsRef,
			contact: contactRef
		};
		refs[section].current?.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		const container = scrollContainerRef.current;
    	if (!container) return
		const handleScroll = () => {
			const scrollPosition = container.scrollTop + container.clientHeight/2
			if (scrollPosition < aboutRef.current?.offsetTop!) {
				setActiveSection("landing");
			} else if (scrollPosition < projectsRef.current?.offsetTop!) {
				setActiveSection("about");
			} else if (scrollPosition < contactRef.current?.offsetTop!) {
				setActiveSection("projects");
			} else {
				setActiveSection("contact");
			}

			
		}
		container.addEventListener("scroll", handleScroll);
		return () => container.removeEventListener("scroll", handleScroll)
	} ,[])

	return (
		<>
			<Navbar scrollTo={scrollTo} activeSection={activeSection}/>
			<div ref={scrollContainerRef} className="snap-y overflow-y-scroll overflow-x-hidden h-screen">
				<div ref={landingRef}>
					<LandingSection />
				</div>
				<GradientContainer >
					<div ref={aboutRef}>
						<AboutSection />
					</div>
					<div ref={projectsRef}>
						<ProjectsSection />
					</div>
					<div ref={contactRef}>
						<ContactSection />
					</div>
				</GradientContainer>
			</div>
		</>
	)
}

export default App
