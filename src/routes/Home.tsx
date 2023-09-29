import NavigationBar from "../components/parts/NavigationBar";
import HeroBanner from "../components/HeroBanner";
import CardBanner from "../components/CardBanner";

function Home() {
  return (
    <>
      <NavigationBar />
      <body className="bg-zinc-900">
        <HeroBanner />

        <div className="flex justify-center">
          <CardBanner />
        </div>
      </body>
    </>
  );
}

export default Home;
