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
        <div className={`${classes["project-content-container-grid"]}`}></div>
      </div>
    </section>
  );
};

export default SectionWorks;
