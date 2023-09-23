import NavigationBar from "../components/NavigationBar";
import HeroBanner from "../components/HeroBanner";
function Home() {
  return (
    <>
      <NavigationBar />
      <div className="max-w-6xl m-32 xl:m-auto ">
        <HeroBanner />
      </div>
    </>
  );
}

export default Home;
