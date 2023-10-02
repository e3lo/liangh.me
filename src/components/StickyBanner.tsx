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
    <div ref={scrollRef}>
      <div className="w-screen h-screen max-w-full bg-white sticky top-0"></div>

      {/* This is just for space to scroll on */}
      <div className="w-screen h-screen max-w-full"></div>
      <div className="w-screen h-screen max-w-full"></div>
    </div>
  );
};

export default CardBanner;
