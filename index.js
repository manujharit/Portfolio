import React from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WorkExperience from "./src/components/WorkExperience.js";
import Home from "./src/components/Home.js";
import About from "./src/components/About.js";
import Tech from "./src/components/Tech.js";
import Work from "./src/components/Work.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/timeline',
      element: <WorkExperience />
    },
    {
      path: '/work',
      element: <Work />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/tech',
      element: <Tech />
    }
  ]
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
