import project1 from "../assets/project1.jpg"; //5:6 aspect ratio

import ImageCard from "./ImageCard";

import { motion } from "framer-motion";

const CardBanner = () => {
  return (
    <div className="w-full flex-col">
      <div className="mx-auto max-w-md my-8">
        <div className="text-4xl text-center font-bold">UI/UX</div>
        <div className="text-center">
          Here is where i give a brief overview of what i do with UI/UX
        </div>
      </div>

      <div className="max-w-4xl mx-8 md:mx-32 xl:mx-auto pt-8 grid grid-cols-2 gap-8 justify-items-center mb-8">
        <ImageCard src={project1} delayTime={0}></ImageCard>
        <ImageCard src={project1} delayTime={0}></ImageCard>
        <ImageCard src={project1} delayTime={0}></ImageCard>
        <ImageCard src={project1} delayTime={0}></ImageCard>
      </div>
    </div>
  );
};

export default CardBanner;
