import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import SectionHero from "./components/main/SectionHero";
import SectionWorks from "./components/main/SectionWorks";
import Hero from "./components/main/Hero";
import SectionIdea from "./components/main/SectionIdea";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="home-container">
        <SectionHero />
        <Hero />
        <SectionIdea />
      </main>
    </React.Fragment>
  );
};

export default App;
