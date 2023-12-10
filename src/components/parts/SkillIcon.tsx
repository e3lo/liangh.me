import { useRef } from "react";
import { useAnimationFrame } from "framer-motion";

interface Props {
  title: string;
  body: string;
  iconPath: string;
}

const SkillIcon = ({}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  let x = 11;
  let y = -139;

  useAnimationFrame((time, delta) => {
    if (ref.current != null) {
      if (x == 11) {
        y--;
      } else if (x == 1000) {
        y++;
      }

      if (y == -139) {
        x--;
      } else if (y == -489) {
        x++;
      }

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
