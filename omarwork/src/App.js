import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import SectionHero from "./components/main/SectionHero";
import Hero from "./components/main/Hero";
import SectionIdea from "./components/main/SectionIdea";
import SectionInterests from "./components/main/SectionInterests";
import SectionInTouch from "./components/main/SectionInTouch";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="home-container">
        <SectionHero />
        <Hero />
        <SectionIdea />
        <SectionInterests />
        <SectionInTouch />
      </main>
      <footer className="footer">
        © Designed &amp; Built by Omar Saade, 2023
      </footer>
    </React.Fragment>
  );
};

export default App;
