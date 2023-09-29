import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="bg-zinc-900">
        <HeroBanner />
      </div>
    </>
  );
}

export default Home;
