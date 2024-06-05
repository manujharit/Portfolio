import React from "react";
import Introduction from "./components/Introduction";
import Content from "./components/Content";
import useScreenSize from "./hooks/useScreenSize";
import ActiveSection from "./utils/ActiveSection";
import { useState } from "react";
import Socials from "./components/Socials";

const App = () => {
  const isnotMobileorTablet = useScreenSize()
  const [activeSection, setActiveSection] = useState('about')


  return (
    <ActiveSection.Provider value={{ activeSection: activeSection, setActiveSection: setActiveSection }}>
      <div className="flex flex-wrap bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
      <Socials/>
        <div className={isnotMobileorTablet ? "w-1/2" : "w-full"}>
          <Introduction />
        </div>
        <div className={isnotMobileorTablet ? "w-1/2" : "w-full"}>
          <Content />
        </div>
      </div>
    </ActiveSection.Provider>
  );
};

export default App;
