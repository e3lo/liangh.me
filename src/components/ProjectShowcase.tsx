import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import StickyProjectDisplay from "./parts/StickyProjectDisplay";

const CardBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <>
      <div className=" flex flex-col m-auto items-center max-w-sm text-center gap-2 mt-16 my-8">
        <h1 className=" text-4xl font-bold">UI/UX</h1>
        <p>
          Creating stunning interfaces that captures your attention is a good
          thing (hopefully)
        </p>
      </div>
      <StickyProjectDisplay />
      <StickyProjectDisplay />
    </>
  );
};

export default CardBanner;
