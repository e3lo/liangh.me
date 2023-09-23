import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="w-screen flex justify-center">
      <div className="flex max-w-6xl w-full justify-between mx-32 my-6 p-1">
        <div>
          <Link to={"/"} className="underline">
            Liang Heng
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to={"/Achievements"}>Achievements</Link>
          <Link to={`/Projects`}>Projects</Link>
          <Link to={`/Contact`}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
