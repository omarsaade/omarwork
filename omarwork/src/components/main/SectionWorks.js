import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionWorks.module.css";
// import FavoritePlace from "../../assets/Untitled.jpg";

const SectionWorks = (props) => {
  return (
    <section className={`${classes["section-works"]}`}>
      <div className={`${classes["project-container-grid"]}`}>
        <div className={`${classes["project-title-grid"]}`}>{props.name}</div>
        <div className={`${classes["project-image-grid"]}`}>
          <img alt="FavoritePlace App" src={props.img} />
        </div>
        <div className={`${classes["project-content-container-grid"]}`}>
          <ul className={`${classes["project-technology-grid"]}`}>
            {props.tools.map((i) => (
              <li key={Math.random() * 1000}>{i}</li>
            ))}
          </ul>
          <div className={classes.project}>
            <p>{props.about}</p>
            <div className={classes.viewProject}>
              <NavLink to={props.url}>View Project</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
