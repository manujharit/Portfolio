import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col text-slate-400  h-screen ">
      <div className="mx-[25%]">
      <Navbar />
      <Home />
      <Footer/>
      </div>
    </div>
  );
};

export default App;
