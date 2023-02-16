import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import SectionHero from "./components/main/SectionHero";
import SectionWorks from "./components/main/SectionWorks";
import "./App.css";
import Hero from "./components/main/Hero";

const App = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="home-container">
        <SectionHero />
        <Hero />
      </main>
    </React.Fragment>
  );
};

export default App;
