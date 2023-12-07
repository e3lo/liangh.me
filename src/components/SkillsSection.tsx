const SkillsSection = () => {
  return (
    <section className="flex flex-row m-auto items-center gap-2 mt-24 my-8">
      <div className="w-1/3 ml-12">
        <div className="flex flex-col gap-2 ml-auto w-fit">
          <h2 className="text-4xl font-bold">My Skills</h2>
          <p className="">Things I can do without ChatGPT (most of the time)</p>
        </div>
      </div>
      <div className="w-2/3 overflow-clip flex items-end justify-end">
        <svg width="1000" height="500">
          <rect width="1000" height="200" x="0" y="0" fill="red" />
          <rect width="200" height="500" x="0" y="0" fill="red" />
          <rect width="1000" height="200" x="0" y="300" fill="red" />
        </svg>
      </div>
    </section>
  );
};

export default SkillsSection;
