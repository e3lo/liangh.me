import { Link } from "react-router-dom";

interface Props {
  points: string[];
  image: string;
  title: string;
  color: "blue" | "red" | "lime";
}

const ProjectCard = ({ points, image, title, color }: Props) => {
  const projectLink = "/Projects/" + title;

  const colorVariants = {
    blue: `bg-blue-400 hover:bg-blue-500  focus:ring-blue-200`,
    red: `bg-red-400 hover:bg-red-500  focus:ring-red-200`,
    lime: `bg-lime-400 hover:bg-lime-500  focus:ring-lime-200`,
  };

  return (
    <div className="w-full bg-white border border-white rounded-lg shadow">
      <Link to={projectLink}>
        <img className="rounded-t-lg" src={image} alt="" />
      </Link>
      <div className="p-5">
        <Link to={projectLink}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700">{points}</p>
        <Link
          to={projectLink}
          className={`inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none ${colorVariants[color]}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
