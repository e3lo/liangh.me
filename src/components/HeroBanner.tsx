import profilePic from "../assets/profilePic.jpg";

const HeroBanner = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="basis-1/3">
        <img className="rounded-full max-w-xs m" src={profilePic}></img>
        <div>
          <h1 className="text-4xl font-bold">Liang Heng</h1>
          Hey, I’m a front-end UI UX developer. Currently studying in the
          university of Melbourne.
        </div>
      </div>
      <div className="basis-1/3">Project Showcase</div>
    </div>
  );
};

export default HeroBanner;
