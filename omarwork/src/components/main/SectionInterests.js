import React from "react";
import classes from "./SectionInterests.module.css";
const SectionInterests = () => {
  return (
    <section>
      <div className={`${classes["works-title"]}`}>
        <div></div>
        Interests
      </div>
      <div className={classes.interestsText}>
        <p> Horseback Riding, Tennis, Checkers, Hiking, Art, Travelling</p>
      </div>
    </section>
  );
};

export default SectionInterests;
