import ProjectCard from "./parts/ProjectCard";
import SocialBar from "./parts/SocialBar";

import profilePic from "../assets/profilePic.jpg";
import project1Img from "../assets/PortfolioProject/Wireframe.png";
import project1Gif from "../assets/project1.gif";

import { motion } from "framer-motion";
import { useRef } from "react";

const HeroBanner = () => {
  const constraintsRef = useRef(null);

  return (
    <div ref={constraintsRef} className="w-full h-full">
      <div className="h-full flex flex-col mt-24 max-w-4xl mx-8 md:flex-row md:mx-32 xl:m-auto  pb-8 gap-16 items-center">
        <div className="text-center md:text-left">
          <img
            className="rounded-full max-h-36 mx-auto md:mx-0"
            src={profilePic}
          ></img>
          <div>
            <h1 className="text-6xl font-bold py-4">Liang Heng</h1>
            Hey, I’m a front-end UI UX developer. Currently studying in the
            university of Melbourne.
          </div>
          <SocialBar xAlign={true}></SocialBar>
        </div>

        {/* Desktop Display */}
        <div className="hidden md:block w-full h-full relative">
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragMomentum={false}
            whileDrag={{ scale: 1.05 }}
            className="absolute top-1/2 left-1/2 h-0"
          >
            <div className="max-w-xs -translate-y-1/2 -translate-x-1/2 rotate-12">
              <ProjectCard
                points={["React", "TailwindCSS", "GitHub"]}
                image={project1Img}
                animation={project1Gif}
                title="Liangh.me portfolio"
              />
            </div>
          </motion.div>

          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragMomentum={false}
            whileDrag={{ scale: 1.05 }}
            className="absolute top-1/2 left-1/2 h-0"
          >
            <div className="max-w-xs -translate-y-1/2 -translate-x-1/2">
              <ProjectCard
                points={["React", "TailwindCSS", "GitHub"]}
                image={project1Img}
                animation={project1Gif}
                title="Liangh.me portfolio"
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Display */}
        <div className="max-w-xs md:hidden">
          <ProjectCard
            points={["React", "TailwindCSS", "GitHub"]}
            image={project1Img}
            animation={project1Gif}
            title="Liangh.me portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
