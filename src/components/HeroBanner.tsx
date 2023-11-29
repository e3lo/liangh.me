import profilePic from "../assets/profilePic.jpg";
import SocialBar from "./parts/SocialBar";
import "./HeroBanner.css";

import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroBanner = () => {
  const rowSize = 3;
  const colSize = 6;
  const totalGridSpace = rowSize * colSize;

  // Rendering the grid
  const renderGrid = (i: number) => {
    const styling = ["border-t", "border-r", "border-b", "border-l"];

    if (i < colSize) {
      // If i is in start row
      delete styling[0];
    }
    if (i >= totalGridSpace - colSize) {
      // If i is in end row
      delete styling[2];
    }
    if (i % colSize == 0) {
      // If i is in start col
      delete styling[3];
    }
    if ((i + 1) % colSize == 0) {
      // If i is in end col
      delete styling[1];
    }

    return (
      <div className={styling.join(" ") + " border-zinc-700"} key={i}></div>
    );
  };

  // Creating hover animation for grid
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const maskRef = useRef<HTMLDivElement>(null);

  const gridHover = (event: any) => {
    if (maskRef.current != null) {
      x.set(event.pageX - maskRef.current.getBoundingClientRect().left);
      y.set(event.pageY - maskRef.current.getBoundingClientRect().top);

      maskRef.current.style.setProperty("--x", `${x.get()}px`);
      maskRef.current.style.setProperty("--y", `${y.get()}px`);
    }
  };

  //Scroll Hijacking
  let ref = useRef<HTMLDivElement>(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });

  let scroll1Y = useTransform(scrollYProgress, [0, 0.8], ["150%", "0%"]);
  let scoll1Opacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  let scroll2Y = useTransform(scrollYProgress, [0, 0.8], ["0%", "-150%"]);
  let scoll2Opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div ref={ref}>
      {" "}
      <div className="w-screen max-w-full h-screen flex items-center justify-center sticky top-0">
        {/* Background grid */}
        <div
          ref={maskRef}
          className="grid grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 md:h-1/2 lg:h-3/4 absolute mask"
        >
          {Array.from({ length: totalGridSpace }).map((_, i) => renderGrid(i))}
        </div>
        {/* Foreground grid */}
        <div
          onMouseMove={gridHover}
          className="grid items-center grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 md:h-1/2 lg:h-3/4 absolute"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-start-2 md:col-start-1 row-start1 md:row-start-2 col-span-4 md:col-span-1 row-span-1 w-full h-full p-2"
          >
            <img
              src={profilePic}
              className=" rounded-md shadow-md w-full h-full object-cover"
            ></img>
          </motion.div>
          {/* Emoji Thing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="hidden md:block col-start-2 row-start-2 col-span-1 justify-self-center row-span-1 text-6xl"
          >
            📌
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="col-start-2 row-start-2 col-span-4 md:col-start-3 text-center font-bold w-full h-full flex flex-col justify-center items-center"
          >
            <motion.div
              style={{ y: scroll1Y, opacity: scoll1Opacity }}
              className="text-4xl md:text-[6vw] md:leading-none absolute"
            >
              UI/UX Developer
            </motion.div>
            <motion.div
              style={{ y: scroll2Y, opacity: scoll2Opacity }}
              className="text-6xl md:text-[9vw] md:leading-none"
            >
              Liang Heng
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className=" col-start-2 md:col-start-3 col-span-4 md:col-span-3 row-start-3 self-start max-w-md"
          >
            Hey! I'm a uni student focusing on front end web development and
            UI/UX design.
            <SocialBar xAlign={true}></SocialBar>
          </motion.div>
        </div>
        {/* Extra space */}
      </div>
      <div className="w-screen h-[50vh] md:h-screen"></div>
    </div>
  );
};

export default HeroBanner;
