import { color } from "framer-motion";
import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const NavigationBar = () => {
  const location = useLocation();

  // Makes the selected page in nav green
  const linkStying = (title: String) => {
    switch (title) {
      case "/Achievements":
        return (
          "font-medium transition duration-500 " +
          (location.pathname === title
            ? "text-cyan-400"
            : "hover:text-cyan-400")
        );
      case "/Projects":
        return (
          "font-medium transition " +
          (location.pathname === title
            ? "text-amber-400"
            : "hover:text-amber-400")
        );
      case "/Contact":
        return (
          "font-medium transition " +
          (location.pathname === title
            ? "text-rose-400"
            : "hover:text-rose-400")
        );
    }
  };

  const [mobileMenu, setMobileMenu] = useState(false);
  const [borderStyle, setBorderStyle] = useState("border-zinc-100");

  const setBorderColor = (
    color: "green" | "grey" | "blue" | "red" | "yellow"
  ) => {
    switch (color) {
      case "green":
        setBorderStyle("border-green-500");
        break;
      case "grey":
        setBorderStyle("border-zinc-500");
        break;
      case "blue":
        setBorderStyle("border-cyan-500");
        break;
      case "red":
        setBorderStyle("border-rose-500");
        break;
      case "yellow":
        setBorderStyle("border-amber-500");
        break;
    }
  };

  return (
    <nav className="w-full flex justify-center fixed text-zinc-50 z-50">
      <div
        className={`flex flex-wrap max-w-4xl w-full justify-between items-center mx-16 md:mx-32 h-16 mt-4 px-6 border rounded-2xl transition-colors ${borderStyle} backdrop-blur-md backdrop-brightness-50`}
      >
        <div
          onMouseEnter={() => setBorderColor("green")}
          onMouseLeave={() => setBorderColor("grey")}
        >
          <Link
            to={"/"}
            className={
              "font-bold underline hover:text-green-500 transition-colors"
            }
          >
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
            <Link
              onMouseEnter={() => setBorderColor("blue")}
              onMouseLeave={() => setBorderColor("grey")}
              to={"/Achievements"}
              className={linkStying("/Achievements")}
            >
              <li className="p-2">Achievements</li>
            </Link>
            <Link
              onMouseEnter={() => setBorderColor("yellow")}
              onMouseLeave={() => setBorderColor("grey")}
              to={`/Projects`}
              className={linkStying("/Projects")}
            >
              <li className="p-2">Projects</li>
            </Link>
            <Link
              onMouseEnter={() => setBorderColor("red")}
              onMouseLeave={() => setBorderColor("grey")}
              to={`/Contact`}
              className={linkStying("/Contact")}
            >
              <li className="p-2">Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
