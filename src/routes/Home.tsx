import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import CardBanner from "../components/CardBanner";

function Home() {
  return (
    <>
      <NavigationBar />
      <HeroBanner />

      <div className="bg-zinc-800 flex justify-center">
        <CardBanner />
      </div>
    </>
  );
}

export default Home;
