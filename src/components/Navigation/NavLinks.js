import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks = () => {
  const clickHandler = () => {
    alert(
      "Hello everyone! I just wanted to let you know that this website was built using ReactJS, ExpressJS, and MongoDB, etc. I'm currently working on making some updates and improvements to the website, so please bear with me as I continue to work on it. Thank you for visiting!"
    );
  };

  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to="/" onClick={clickHandler}>
          Works
        </NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={clickHandler}>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={clickHandler}>
          About
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
