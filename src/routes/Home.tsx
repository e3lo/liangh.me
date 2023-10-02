import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import ProjectShowcase from "../components/ProjectShowcase";

function Home() {
  return (
    <>
      <NavigationBar />
      <HeroBanner />
      <ProjectShowcase />
      <HeroBanner />
    </>
  );
}

export default Home;
