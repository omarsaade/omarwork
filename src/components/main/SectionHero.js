import React from "react";
import { NavLink } from "react-router-dom";
import myImage from "../../assets/sy.png";
import classes from "./SectionHero.module.css";

const SectionHero = () => {
  return (
    <section id="about" className={`${classes["section-hero"]}`}>
      <div className={`${classes["hero-title"]}`}>
        <div className={`${classes["hero-title-text"]}`}>
          <h4>Hi, I'm Omar</h4>
          <p>
            <span className={classes.pass}>Passionate</span>
            <span className={classes.software}>Software Developer</span>
          </p>
        </div>
        <div className={`${classes["hero-title-image"]}`}>
          <img src={myImage} alt="Omar Saade" />
        </div>
      </div>
      <div className={`${classes["hero-description"]}`}>
        <div>
          <p>
            My name is Omar Saade. Currently working at
            <NavLink to="http://telepaty.com/"> Telepaty Holding</NavLink>.
          </p>
        </div>
        <div>
          <p>
            As a software developer, I have a passion for creating innovative
            solutions using cutting-edge technology.
          </p>
        </div>
        <div>
          <p>
            I am constantly learning and staying up-to-date with the latest
            developments in the field, and I bring this expertise and drive to
            every project I work on. Whether working independently or as part of
            a team, I consistently strive to deliver the best possible outcome.
          </p>
        </div>
        <div>
          <p>
            In my spare time, I enjoy doing some freelancing work. My goal is to
            use technology to help clients articulate what’s in their mind to
            better express themselves.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
