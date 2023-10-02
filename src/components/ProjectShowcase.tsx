import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const CardBanner = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [sticky, setSticky] = useState(false);

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
      <div ref={scrollRef}>
        <div className="w-screen h-screen max-w-full sticky top-0 flex flex-col justify-center items-center px-12 pb-12 pt-32">
          <div className="flex flex-col items-center mb-10">
            <h1 className="text-6xl lg:text-8xl font-bold">CasIndex</h1>
            <p className=" max-w-sm text-center">
              responsive website made with EditorX targeted towards highschool
              students to provide calculator solutions
            </p>
          </div>

          <div className="grid grid-cols-2 max-w-2xl lg:max-w-4xl w-full gap-16 lg:gap-48 h-full max-h-96">
            <div className="bg-zinc-100 rounded-md w-full">Card</div>
            <div className="bg-zinc-100 rounded-md w-full">Card2</div>
          </div>
        </div>

        {/* This is just for space to scroll on */}
        <div className="w-screen h-screen max-w-full"></div>
        <div className="w-screen h-screen max-w-full"></div>
      </div>
    </>
  );
};

export default CardBanner;
