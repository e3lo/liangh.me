import profilePic from "../assets/profilePic.jpg";
import SocialBar from "./parts/SocialBar";

import { motion } from "framer-motion";
import { useRef } from "react";
import { render } from "react-dom";

const HeroBanner = () => {
  const rowSize = 3;
  const colSize = 6;
  const totalGridSpace = rowSize * colSize;

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
      <div className={styling.join(" ") + " border-zinc-600"} key={i}></div>
    );
  };

  return (
    <div className="w-screen max-w-full h-screen flex items-center justify-center relative -translate-y-20">
      {/* Background grid */}
      <div className="grid grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 md:h-1/2 lg:h-3/4 absolute">
        {Array.from({ length: totalGridSpace }).map((_, i) => renderGrid(i))}
      </div>
      {/* Foreground grid */}
      <div className="grid items-center grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 md:h-1/2 lg:h-3/4 absolute">
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
          className=" col-start-2 row-start-2 col-span-4 md:col-start-3 justify-self-center md:justify-self-start text-6xl text-center md:text-[9vw] font-bold"
        >
          Liang Heng
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className=" col-start-2 md:col-start-3 col-span-4 md:col-span-3 row-start-3 self-start max-w-md"
        >
          Hey! I'm a uni student focusing on front end web development and UI/UX
          design.
          <SocialBar xAlign={true}></SocialBar>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;
