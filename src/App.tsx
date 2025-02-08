
import { useRef } from "react"
import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import GradientContainer from "./components/GradientContainer"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"

function App() {

	const landingRef = useRef<HTMLDivElement>(null);
	const aboutRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const contactRef = useRef<HTMLDivElement>(null);


	const scrollTo = (section: string) => {
		const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
			landing: landingRef,
			about: aboutRef,
			projects: projectsRef,
			contact: contactRef
		};
		refs[section].current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div className="snap-y snap-mandatory overflow-y-scroll h-screen">
				<div ref={landingRef}>
					<LandingSection scrollTo={scrollTo} />
				</div>
				<GradientContainer>
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
