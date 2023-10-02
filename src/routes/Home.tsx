import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import StickyBanner from "../components/StickyBanner";

function Home() {
  return (
    <>
      <NavigationBar />
      <HeroBanner />
      <StickyBanner />
      <HeroBanner />
    </>
  );
}

export default Home;
