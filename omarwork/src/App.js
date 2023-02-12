import React from "react";
import MainNavigation from "./components/Navigation/MainNavigation";
import SectionHero from "./components/main/SectionHero";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className="home-container">
        <SectionHero />
      </main>
    </React.Fragment>
  );
};

export default App;
