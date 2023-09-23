import NavigationBar from "../components/NavigationBar";
import HeroBanner from "../components/HeroBanner";
function Home() {
  return (
    <>
      <NavigationBar />
      <div className="max-w-6xl mx-32">
        <HeroBanner />
      </div>
    </>
  );
}

export default Home;
