import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={classes.navLinks}>
      <li>
        <NavLink to="/">Works</NavLink>
      </li>
      <li>
        <NavLink to="/">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/">About</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
