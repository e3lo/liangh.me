import StickyProjectDisplay from "./parts/StickyProjectDisplay";

import casIndexImg1 from "../assets/cardBg.png";
import testImg from "../assets/project2.jpg";

const CardBanner = () => {
  return (
    <>
      <div className=" flex flex-col m-auto items-center max-w-sm text-center gap-2 mt-16 my-8">
        <h1 className=" text-4xl font-bold">Featured Projects</h1>
        <p>Some of my best and most recent works. </p>
      </div>
      <StickyProjectDisplay
        title="CasIndex"
        urlPath="CasIndex"
        description="A sleek responsive e-commerce website designed to promote and sell VCE assitant tools"
        img1={casIndexImg1}
        img2={testImg}
      />
      <StickyProjectDisplay
        title="Albion Profit Calculator"
        urlPath="AlbionProfitCalc"
        description="A modern calculation tool designed to maximis profits in game using public API data"
        img1={casIndexImg1}
        img2={casIndexImg1}
      />
      <StickyProjectDisplay
        title="CulinaryCode"
        urlPath="CulinaryCode"
        description="A minimalistic website for easy no-nonsense recipes"
        img1={casIndexImg1}
        img2={casIndexImg1}
      />
    </>
  );
};

export default CardBanner;
