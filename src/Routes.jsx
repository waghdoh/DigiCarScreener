import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import LoginscreenPage from "pages/Loginscreen";
import SplashscreenRow from "pages/Splashscreen/SplashscreenRow";
const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <SplashscreenRow /> },
    { path: "*", element: <NotFound /> },
    {
      path: "login",
      element: <LoginscreenPage />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
