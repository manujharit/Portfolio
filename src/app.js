import React from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import ContactMe from "./components/contactMe";
import WorkEx from "./components/workExperience";
import Footer from "./components/footer";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <Home />
      <About />
      <WorkEx />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
