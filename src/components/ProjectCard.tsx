import { Link } from "react-router-dom";

interface Props {
  points: string[];
  image: string;
  title: string;
}

const ProjectCard = ({ points, image, title }: Props) => {
  const projectLink = "/Projects/" + title;

  return (
    <Link to={projectLink}>
      <div className="w-full bg-white border border-white rounded-lg shadow-lg hover:scale-105 transition-transform duration-500">
        <img className="rounded-t-lg w-full" src={image} alt="" />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700">{points}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
