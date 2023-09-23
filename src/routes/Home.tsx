import NavigationBar from "../components/NavigationBar";
import HeroBanner from "../components/HeroBanner";
function Home() {
  return (
    <>
      <NavigationBar />
      <div className="h-screen w-screen">
        <div className="md:h-screen bg-zinc-800 flex justify-center">
          <HeroBanner />
        </div>
      </div>
    </>
  );
}

export default Home;
