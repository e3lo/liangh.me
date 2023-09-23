import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="w-screen flex justify-center">
      <div className="flex max-w-6xl w-full justify-between mx-32 my-6 p-1">
        <div>
          <Link
            to={"/"}
            className="font-medium underline hover:text-green-300 transition"
          >
            Liang Heng
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            to={"/Achievements"}
            className="font-medium hover:text-green-300 transition"
          >
            Achievements
          </Link>
          <Link
            to={`/Projects`}
            className="font-medium hover:text-green-300 transition"
          >
            Projects
          </Link>
          <Link
            to={`/Contact`}
            className="font-medium hover:text-green-300 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
