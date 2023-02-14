import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionWorks.module.css";
import FavoritePlace from "../../assets/Untitled.jpg";

const SectionWorks = () => {
  return (
    <section className={`${classes["section-works"]}`}>
      <div className={`${classes["works-title"]}`}>
        <div></div>
        Some things I've built
      </div>
      <div className={`${classes["project-container-grid"]}`}>
        <div className={`${classes["project-title-grid"]}`}>
          FavoritePlace App
        </div>
        <div className={`${classes["project-image-grid"]}`}>
          <img alt="FavoritePlace App" src={FavoritePlace} />
        </div>
        <div className={`${classes["project-content-container-grid"]}`}>
          <ul className={`${classes["project-technology-grid"]}`}>
            <li>React</li>
            <li>Node</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
          <div className={classes.project}>
            <p>
              Snap App focus on creating a photo sharing platform for people who
              love architecture. It integrates sharing, navigation, architecture
              information and tour planning together.
            </p>
            <div className={classes.viewProject}>
              <NavLink to="/">View Project</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
