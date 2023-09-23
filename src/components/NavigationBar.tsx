import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  // Makes the selected page in nav green
  const linkStying = (title: String) => {
    console.log(location.pathname);
    return (
      "font-medium transition " +
      (location.pathname === title ? "text-green-400" : "hover:text-green-200")
    );
  };

  return (
    <nav className="w-screen flex justify-center">
      <div className="flex max-w-6xl w-full justify-between mx-32 my-6 p-1">
        <div>
          <Link to={"/"} className={linkStying("/") + " underline"}>
            Liang Heng
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to={"/Achievements"} className={linkStying("/Achievements")}>
            Achievements
          </Link>
          <Link to={`/Projects`} className={linkStying("/Projects")}>
            Projects
          </Link>
          <Link to={`/Contact`} className={linkStying("/Contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
