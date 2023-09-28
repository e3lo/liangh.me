import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  // Makes the selected page in nav green
  const linkStying = (title: String) => {
    console.log(location.pathname);
    return (
      "font-medium transition " +
      (location.pathname === title ? "text-green-600" : "hover:text-green-400")
    );
  };

  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className=" w-full flex justify-center text-zinc-50 z-50">
      <div className="flex flex-wrap max-w-4xl w-full justify-between items-center mx-16 md:mx-32 h-20">
        <div className="">
          <Link to={"/"} className={linkStying("/") + " underline"}>
            Liang Heng
          </Link>
        </div>
        <button
          className="md:hidden p-2 w-10 h-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}
        >
          <svg
            className="w-6 h-6 text-zinc-50"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={
            (!mobileMenu && "hidden ") +
            " w-full text-center md:flex md:w-auto gap-6"
          }
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-zinc-200 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <Link to={"/Achievements"} className={linkStying("/Achievements")}>
              <li className="p-2">Achievements</li>
            </Link>
            <Link to={`/Projects`} className={linkStying("/Projects")}>
              <li className="p-2">Projects</li>
            </Link>
            <Link to={`/Contact`} className={linkStying("/Contact")}>
              <li className="p-2">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
