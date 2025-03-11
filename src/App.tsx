import { useEffect, useRef, useState } from "react";
import AboutSection from "./components/About/AboutSection";
import ContactSection from "./components/Contact/ContactSection";
import LandingSection from "./components/Home/LandingSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import Navbar from "./components/Navbar";
import { sectionType } from "./types/section";

import { useInView } from "react-intersection-observer";
import Lenis from "lenis";

function App() {
	const [activeSection, setActiveSection] = useState<sectionType>("landing");

	const landingElementRef = useRef<HTMLDivElement | null>(null);
	const aboutElementRef = useRef<HTMLDivElement | null>(null);
	const projectsElementRef = useRef<HTMLDivElement | null>(null);
	const contactElementRef = useRef<HTMLDivElement | null>(null);
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const lenisRef = useRef<Lenis | null>(null);

	const sectionOptions = {
		threshold: 0.5,
		rootMargin: "0px 0px -50% 0px",
	};

	const { ref: landingInViewRef, inView: landingInView } = useInView(sectionOptions);
	const { ref: aboutInViewRef, inView: aboutInView } = useInView(sectionOptions);
	const { ref: projectsInViewRef, inView: projectsInView } = useInView(sectionOptions);
	const { ref: contactInViewRef, inView: contactInView } = useInView(sectionOptions);

	const landingRef = (node: HTMLDivElement | null) => {
		landingElementRef.current = node;
		landingInViewRef(node);
	};

	const aboutRef = (node: HTMLDivElement | null) => {
		aboutElementRef.current = node;
		aboutInViewRef(node);
	};

	const projectsRef = (node: HTMLDivElement | null) => {
		projectsElementRef.current = node;
		projectsInViewRef(node);
	};

	const contactRef = (node: HTMLDivElement | null) => {
		contactElementRef.current = node;
		contactInViewRef(node);
	};

	const scrollTo = (section: sectionType) => {
		const refs: { [key: string]: HTMLDivElement | null } = {
			landing: landingElementRef.current,
			about: aboutElementRef.current,
			projects: projectsElementRef.current,
			contact: contactElementRef.current,
		};

		const target = refs[section];

		if (target && lenisRef.current) {
			lenisRef.current.scrollTo(target, { offset: 0, duration: 1.0, easing: (t) => 1 - Math.pow(1 - t, 3) });
		}
	};

	useEffect(() => {
		if (landingElementRef.current && lenisRef.current) {
			lenisRef.current.scrollTo(landingElementRef.current, { immediate: true });
		}
	}, []);

	useEffect(() => {
		if (contactInView) setActiveSection("contact");
		else if (projectsInView) setActiveSection("projects");
		else if (aboutInView) setActiveSection("about");
		else if (landingInView) setActiveSection("landing");
	}, [landingInView, aboutInView, projectsInView, contactInView]);

	useEffect(() => {
	  const lenis = new Lenis({
	    lerp: 0.1,
	    // duration: 1.0,
	    smoothWheel: true,
	    anchors: true,
	    // easing: (t) => 1 - Math.pow(1 - t, 6),
		easing: (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
		// easing: (t) => (--t) * t * t + 1
	  });

	  function raf(time: number) {
	    lenis.raf(time);
	    requestAnimationFrame(raf);
	  }
	  requestAnimationFrame(raf);

	  lenisRef.current = lenis;

	  return () => {
	    lenis.destroy();
	  };
	}, []);

	return (
	  <main>
	    <Navbar scrollTo={scrollTo} activeSection={activeSection} />
	    <div ref={scrollContainerRef}>
	      <div ref={landingRef}>
	        <LandingSection />
	      </div>
	      <div ref={aboutRef}>
	        <AboutSection />
	      </div>
	      <div ref={projectsRef}>
	        <ProjectsSection />
	      </div>
	      <div ref={contactRef}>
	        <ContactSection />
	      </div>
	    </div>
	  </main>
	);
}

export default App;
