import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  points: string[];
  image: string;
  animation: string;
  title: string;
}

const ProjectCard = ({ points, image, animation, title }: Props) => {
  const projectLink = "/Projects/" + title;

  const [animationState, setAnimationState] = useState(false);

  const startAnimation = () => {
    console.log("starting animation");
    setAnimationState(true);
  };

  return (
    <Link to={projectLink}>
      <div className="w-full bg-white border border-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
        <img
          className="rounded-t-lg w-full"
          src={animationState ? animation : image}
          alt=""
          onMouseEnter={startAnimation}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <div className="flex flex-row gap-4">
            {points.map((point) => (
              <div className="mb-3 font-medium text-gray-700 py-2 px-4 bg-zinc-200 rounded-md">
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
