import NavigationBar from "../components/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import CardBanner from "../components/CardBanner";

function Home() {
  return (
    <>
      <NavigationBar />
      <div className="md:h-screen bg-zinc-800 flex justify-center">
        <HeroBanner />
      </div>
      <div className="bg-zinc-800 flex justify-center">
        <CardBanner />
      </div>
    </>
  );
}

export default Home;
