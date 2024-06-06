import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";


const App = () => {
  return (
    <div className="flex flex-col text-slate-400 h-screen">
      <div className=" md:mx-16 lg:mx-[10%] xl:mx-[25%]">
        <Navbar />
      </div>
      
      <div className="mx-2 md:mx-16 lg:mx-[10%] xl:mx-[25%]">
        
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default App;
