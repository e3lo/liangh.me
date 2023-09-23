import ProjectCard from "./ProjectCard";

import profilePic from "../assets/profilePic.jpg";
import project1 from "../assets/project1.jpg";

const HeroBanner = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-4xl mx-32 xl:m-auto pt-24 pb-8 gap-16 items-center">
      <div className="md:basis-1/3">
        <img className="rounded-full max-h-36" src={profilePic}></img>
        <div>
          <h1 className="text-6xl font-bold py-4">Liang Heng</h1>
          Hey, I’m a front-end UI UX developer. Currently studying in the
          university of Melbourne.
        </div>
      </div>
      <div className="md:basis-2/3">
        <div className="hover:z-40 max-w-sm ml-auto">
          <ProjectCard
            points={["React", "TailwindCSS"]}
            image={project1}
            title="HI"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
