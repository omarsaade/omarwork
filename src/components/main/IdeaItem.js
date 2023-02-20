import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./IdeaItem.module.css";
const IdeaItem = (props) => {
  return (
    <NavLink to={props.url} className={classes.dec}>
      <div className={classes.featuredPostContainer}>
        <img
          alt="img"
          src={props.image}
          className={classes.featuredPostImage}
        />
        <div className={classes.featuredPostTitle}>
          {props.title}
          <span className={classes.blogFrom}>&nbsp;({props.from})</span>
        </div>
      </div>
    </NavLink>
  );
};

export default IdeaItem;
