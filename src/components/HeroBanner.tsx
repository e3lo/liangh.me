import profilePic from "../assets/profilePic.jpg";
import project1Img from "../assets/PortfolioProject/Wireframe.png";
import project1Gif from "../assets/project1.gif";

import { motion } from "framer-motion";
import { useRef } from "react";
import { render } from "react-dom";

const HeroBanner = () => {
  const rowSize = 3;
  const colSize = 6;
  const totalGridSpace = rowSize * colSize;

  const renderGrid = (i: number) => {
    const styling = ["border-t-2", "border-r-2", "border-b-2", "border-l-2"];

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
    <div className="w-screen h-screen flex items-center justify-center bg-zinc-800 relative">
      <div className="grid grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 absolute">
        {Array.from({ length: totalGridSpace }).map((_, i) => renderGrid(i))}
      </div>
      <div className="grid grid-cols-6 grid-rows-3 gap-1 w-4/5 h-3/4 absolute">
        <div className=" text-4xl">Liang Heng</div>
      </div>
    </div>
  );
};

export default HeroBanner;
