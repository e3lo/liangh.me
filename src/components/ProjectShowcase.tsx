import StickyProjectDisplay from "./parts/StickyProjectDisplay";

import casIndexImg1 from "../assets/cardBg.png";

const CardBanner = () => {
  return (
    <>
      <div className=" flex flex-col m-auto items-center max-w-sm text-center gap-2 mt-16 my-8">
        <h1 className=" text-4xl font-bold">UI/UX</h1>
        <p>
          Creating stunning interfaces that captures your attention is a good
          thing (hopefully)
        </p>
      </div>
      <StickyProjectDisplay
        title="CasIndex"
        description="A sleek responsive e-commerce website designed to promote and sell VCE assitant tools"
        img1={casIndexImg1}
        img2={casIndexImg1}
      />
      <StickyProjectDisplay
        title="A blue whale"
        description="A sleek responsive e-commerce website designed to promote and sell VCE assitant tools"
        img1={casIndexImg1}
        img2={casIndexImg1}
      />
    </>
  );
};

export default CardBanner;
