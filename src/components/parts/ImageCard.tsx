import { motion, useAnimate } from "framer-motion";
import { useState } from "react";

import backCover from "../assets/cardBg.png"; // 5:6 aspect ratio

interface Props {
  src: string;
  delayTime: number;
}

const ImageCard = ({ src, delayTime }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [scope, animate] = useAnimate();

  const flipCard = () => {
    if (!isFlipped) {
      animate(
        scope.current,
        { rotateY: isFlipped ? 0 : 180 },
        { duration: 0.5 }
      );
      setTimeout(() => {
        setIsFlipped(!isFlipped);
      }, 250);
      console.log("flip");
    } else {
      console.log("modal info");
    }
  };

  return (
    <div ref={scope} onClick={flipCard}>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: delayTime }}
        viewport={{ once: true }}
        src={isFlipped ? src : backCover}
        className="w-full max-w-sm rounded-md hover:scale-105 duration-200"
      ></motion.img>
    </div>
  );
};

export default ImageCard;
