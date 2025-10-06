import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/home-page";
import Aboutus from "./pages/About_us";
import Events from "./pages/events";
import Projects from "./pages/projects";
import Members from "./pages/members";
import Achievements from "./pages/achievements";
import TechnicalWriting from "./pages/technical_writing";
import Hackathon from "./pages/hackathon";
import Project from "./pages/projects";
import Awards from "./pages/awards";
import Single_event from "./pages/singleEvent";
import Single_project from "./pages/singleproject";
import SingleWriting from "./pages/singleWriting";
import Error from "./pages/Error";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <Aboutus />,
    errorElement: <Error />,
  },
  {
    path: "/events",
    element: <Events />,
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <Error />,
  },
  {
    path: "/members",
    element: <Members />,
    errorElement: <Error />,
  },
  {
    path: "/achievements",
    element: <Achievements />,
    errorElement: <Error />,
  },
  {
    path: "/technicalWriting",
    element: <TechnicalWriting />,
    errorElement: <Error />,
  },
  {
    path: "/hackathon",
    element: <Hackathon />,
    errorElement: <Error />,
  },
  {
    path: "/project",
    element: <Project />,
    errorElement: <Error />,
  },
  {
    path: "/awards",
    element: <Awards />,
    errorElement: <Error />,
  },
  {
    path: "/singleEvent",
    element: <Single_event />,
    errorElement: <Error />,
  },
  {
    path: "/singleproject",
    element: <Single_project />,
    errorElement: <Error />,
  },
  {
    path: "/singleWriting",
    element: <SingleWriting />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />,
  },
  // Error page
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // Prevents rerendering
  // <React.StrictMode>
  <RouterProvider router={router} />
  //  </React.StrictMode>
);
