import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// Routes
import Home from "./routes/Home.tsx";
import Achievements from "./routes/Achievements.tsx";
import Contact from "./routes/Contact.tsx";
import Projects from "./routes/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Achievements",
    element: <Achievements />,
  },
  {
    path: "/Projects",
    element: <Projects />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
