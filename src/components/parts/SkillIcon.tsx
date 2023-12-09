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

  useAnimationFrame((time, delta) => {
    if (ref.current != null) {
      x--;
      y--;
      ref.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

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
