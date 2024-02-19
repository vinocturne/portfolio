import IntroSection from "./components/IntroSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import TechStackSection from "./components/TechStackSection.tsx";
import ProjectSection from "./components/ProjectSection.tsx";
import CareerSection from "./components/CareerSection.tsx";

export default function MainPage() {
    return <main className={'relative'}>
        <IntroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectSection />
        <CareerSection />
    </main>
}