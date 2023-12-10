import { useRef, useEffect } from "react";
import { useMotionValue, motion, useAnimationFrame } from "framer-motion";

interface Props {
  title: string;
  body: string;
  iconPath: string;
}

const SkillIcon = ({}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  let x = 0;
  let y = 0;

  // useAnimationFrame((time, delta) => {
  //   if (ref.current != null) {
  //     if (x > -936 && x < 64) {
  //       x--;
  //     } else if (x == -936) {
  //       y--;
  //     } else if (x == 64) {
  //       y;
  //     }

  //     ref.current.style.transform = `translate(${x}px, ${y}px)`;
  //   }
  // });

  return (
    <div
      className=" bg-zinc-200 w-32 h-32 rounded-full flex items-center justify-center absolute"
      ref={ref}
    >
      🚩
    </div>
  );
};

export default SkillIcon;
