import React from "react";

import AnchorLink from "react-anchor-link-smooth-scroll";
// import { NavLink } from "react-router-dom";
import classes from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <ul className={classes.navLinks}>
      <li>
        {/* <NavLink to="/works">Works</NavLink> */}
        <AnchorLink offset="100" href="#works">
          Works
        </AnchorLink>
      </li>
      <li>
        {/* <NavLink to="/posts">Posts</NavLink> */}
        <AnchorLink offset="50" href="#posts">
          Posts
        </AnchorLink>
      </li>
      <li>
        {/* <NavLink to="/about">About</NavLink> */}
        <AnchorLink offset="100" href="#about">
          About
        </AnchorLink>
      </li>
      <li>
        {/* <NavLink to="/contact">Contact</NavLink> */}
        <AnchorLink href="#contact">Contact</AnchorLink>
      </li>
    </ul>
  );
};

export default NavLinks;
