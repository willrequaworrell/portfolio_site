import AboutSection from "./components/AboutSection"
import ContactSection from "./components/ContactSection"
import GradientContainer from "./components/GradientContainer"
import LandingSection from "./components/LandingSection"
import ProjectsSection from "./components/ProjectsSection"

function App() {

	return (
		<>
			<LandingSection/>
			<GradientContainer>
				<AboutSection/>
				<ProjectsSection/>
				<ContactSection/>
			</GradientContainer>
		</>
	)
}

export default App
