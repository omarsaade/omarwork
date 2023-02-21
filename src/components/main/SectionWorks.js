import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SectionWorks.module.css";

const SectionWorks = (props) => {
  return (
    <section className={`${classes["section-works"]}`}>
      <div className={`${classes["project-container-grid"]}`}>
        <div className={`${classes["project-title-grid"]}`}>
          <p className={classes.pTitle}>{props.name}</p>
        </div>
        <div className={`${classes["project-image-grid"]}`}>
          <img alt="Image/OmarSaade" src={props.img} />
        </div>
        <div className={`${classes["project-content-container-grid"]}`}>
          <div className={classes.project}>
            <ul className={classes.new}>
              {props.tools.map((i) => (
                <li key={Math.random() * 1000}>{i}</li>
              ))}
            </ul>
            <p>{props.about}</p>
            <div className={classes.viewProject}>
              <NavLink to={props.url}>View&nbsp;Project</NavLink>
              <span>___</span>
              <NavLink className={classes.pr} to={props.github}>
                Github
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWorks;
