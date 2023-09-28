import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import CardBanner from "../components/CardBanner";

function Home() {
  return (
    <div className="bg-zinc-800">
      <NavigationBar />
      <HeroBanner />

      <div className="flex justify-center">
        <CardBanner />
      </div>
    </div>
  );
}

export default Home;
