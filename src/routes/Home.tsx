import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import ProjectShowcase from "../components/ProjectShowcase";
import SkillsSection from "../components/SkillsSection";

function Home() {
  return (
    <>
      <NavigationBar />
      <HeroBanner />
      <ProjectShowcase />
      <SkillsSection />
    </>
  );
}

export default Home;
