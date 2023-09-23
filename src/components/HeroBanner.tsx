import ProjectCard from "./ProjectCard";

import profilePic from "../assets/profilePic.jpg";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";

const HeroBanner = () => {
  return (
    <div className="flex items-center h-screen gap-4">
      <div className="basis-1/3">
        <img className="rounded-full" src={profilePic}></img>
        <div>
          <h1 className="text-6xl font-bold py-4">Liang Heng</h1>
          Hey, I’m a front-end UI UX developer. Currently studying in the
          university of Melbourne.
        </div>
      </div>
      <div className="basis-2/3 grid grid-cols-6 grid-rows-6">
        <div className="col-start-2 col-end-6">
          <ProjectCard
            points={["React", "TailwindCSS"]}
            image={project1}
            title="HI"
            color="red"
          />
        </div>
        <div className="col-start-2 col-end-6">
          <ProjectCard
            points={["React", "TailwindCSS"]}
            image={project2}
            title="HI"
            color="blue"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
