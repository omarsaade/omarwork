import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import SectionHero from "./components/main/SectionHero";
import SectionWorks from "./components/main/SectionWorks";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="home-container">
        <SectionHero />
        <SectionWorks />
      </main>
    </React.Fragment>
  );
};

export default App;
