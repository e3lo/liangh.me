import SkillIcon from "./parts/SkillIcon";

import conveyorBelt from "../assets/SushiTrain/belt.png";

const SkillsSection = () => {
  return (
    <section className="flex flex-row m-auto items-center gap-2 mt-24 my-8">
      <div className="w-1/3 ml-12">
        <div className="flex flex-col gap-2 ml-auto w-fit">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="">Things I can do without ChatGPT (most of the time)</p>
        </div>
      </div>
      <div className="w-2/3 overflow-clip flex flex-col items-end justify-end">
        <img
          src={conveyorBelt}
          className="h-[500px] w-[1000] object-cover object-left"
        ></img>
        <SkillIcon title="Hi" body="Hello" iconPath="no" />
      </div>
    </section>
  );
};

export default SkillsSection;
