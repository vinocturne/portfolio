import IntroSection from "./components/IntroSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import TechStackSection from "./components/TechStackSection.tsx";
import ProjectSection from "./components/ProjectSection.tsx";
import CareerSection from "./components/CareerSection.tsx";

export default function MainPage() {
    return <section className={'max-w-[1140px] px-[12px] py-[10px] mx-auto'}>
        <IntroSection />
        <AboutSection />
        <TechStackSection />
        <ProjectSection />
        <CareerSection />
    </section>
}