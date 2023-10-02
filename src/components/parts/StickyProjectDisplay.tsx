import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  key: string;
  description: string;
  img1: string;
  img2: string;
}

const StickyProjectDisplay = ({
  title,
  key,
  description,
  img1,
  img2,
}: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  let y20 = useTransform(scrollYProgress, [0, 1], ["0vh", "-10vw"]);
  let y40 = useTransform(scrollYProgress, [0, 1], ["0vh", "-20vw"]);
  let y60 = useTransform(scrollYProgress, [0, 1], ["0vh", "30vw"]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  return (
    <div ref={scrollRef}>
      <div className="w-screen h-screen max-w-full flex flex-col justify-center items-center px-12 pb-12 pt-32 overflow-x-hidden">
        <div className="flex flex-col items-center mb-10">
          <h1 className="text-6xl lg:text-8xl font-bold">{title}</h1>
          <p className=" max-w-sm text-center">{description}</p>
          <Link
            to={`/${key}`}
            className=" p-2 font-bold hover:text-green-400 transition" // Hover effect change background aswell!
          >
            <p>--{">"} Learn more</p>
          </Link>
        </div>

        <div className="grid grid-cols-2 max-w-2xl lg:max-w-4xl w-full gap-16 lg:gap-48 h-full max-h-96">
          <img
            className="bg-zinc-100 rounded-md w-full h-full object-cover"
            src={img1}
          ></img>
          <img
            className="bg-zinc-100 rounded-md w-full h-full object-cover"
            src={img2}
          ></img>
        </div>

        <div className="grid grid-cols-6 grid-rows-3 w-full h-full absolute gap-8 items-center justify-center -z-10 select-none overflow-hidden">
          <motion.div
            className="row-start-1 row-span-1 col-start-4 col-span-3 font-bold whitespace-nowrap opacity-10 text-zinc-600"
            style={{ fontSize: "30vh", translateX: y20 }}
          >
            {title}
          </motion.div>
          <motion.div
            className=" row-start-2 row-span-1 col-start-1 col-span-3 font-bold whitespace-nowrap opacity-30 text-zinc-600"
            style={{ fontSize: "10vh", translateX: y60 }}
          >
            {title}
          </motion.div>
          <motion.div
            className=" row-start-3 row-span-1 col-start-3 col-span-3 font-bold whitespace-nowrap opacity-20 text-zinc-600"
            style={{ fontSize: "20vh", translateX: y40 }}
          >
            {title}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StickyProjectDisplay;
