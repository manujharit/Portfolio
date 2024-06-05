import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";

import App from "./src/App.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const WorkExperience = lazy(()=>import("./src/components/WorkExperience.js"));
const Home = lazy(()=>import("./src/components/Home.js"));
const About = lazy(()=> import("./src/components/About.js"));
const Tech = lazy(()=> import("./src/components/Tech.js"));
const Work = lazy(()=> import("./src/components/Work.js"));
import PageShimmer from "./src/components/shimmer/PageShimmer.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path: '/',
      element: <Suspense fallback={<PageShimmer/>}><Home /></Suspense>
    },
    {
      path: '/timeline',
      element: <Suspense fallback={<PageShimmer/>}><WorkExperience /></Suspense>
    },
    {
      path: '/work',
      element: <Suspense fallback={<PageShimmer/>}><Work /></Suspense>
    },
    {
      path: '/about',
      element: <Suspense fallback={<PageShimmer/>}><About /></Suspense>
    },
    {
      path: '/tech',
      element: <Suspense fallback={<PageShimmer/>}><Tech /></Suspense>
    }
  ]
}])

root.render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
);
