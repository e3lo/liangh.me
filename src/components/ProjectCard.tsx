import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";

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

  document.getElementById("card")?.setAttribute("draggable", "false");

  return (
    <div className="undraggable w-full bg-white border border-white rounded-lg shadow-lg transition-transform duration-500">
      <img
        className="card rounded-t-lg w-full"
        src={animationState ? animation : image}
        alt=""
        onMouseEnter={startAnimation}
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <div className="flex flex-row gap-2">
          {points.map((point) => (
            <div className="mb-3 text-sm text-gray-700 py-2 px-2 bg-zinc-200 rounded-md">
              {point}
            </div>
          ))}
        </div>
        <Link to={projectLink} id="card">
          <button className=" bg-green-500 p-4 rounded-md font-medium hover:bg-green-600">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
