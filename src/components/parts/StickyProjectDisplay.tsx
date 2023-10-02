import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  img1: string;
  img2: string;
}

const StickyProjectDisplay = ({ title, description, img1, img2 }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  return (
    <div ref={scrollRef}>
      <div className="w-screen h-screen max-w-full sticky top-0 flex flex-col justify-center items-center px-12 pb-12 pt-32">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-6xl lg:text-8xl font-bold">{title}</h1>
          <p className=" max-w-sm text-center">{description}</p>
        </div>

        <div className="grid grid-cols-2 max-w-2xl lg:max-w-4xl w-full gap-16 lg:gap-48 h-full max-h-96">
          <img className="bg-zinc-100 rounded-md w-full" src={img1}></img>
          <img className="bg-zinc-100 rounded-md w-full" src={img2}></img>
        </div>
      </div>

      {/* This is just for space to scroll on */}
      <div className="w-screen h-screen max-w-full"></div>
    </div>
  );
};

export default StickyProjectDisplay;
