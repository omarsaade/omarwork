import React from "react";
import classes from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.mainNavigation}>
        <h1 className={classes.mainNavigationTitle}>
          <span className={classes.mainNavigationLeft}>
            <img
              className={classes.mainNavigationImg}
              src="https://www.howiework.com/static/media/logo.73fe7a7a.png"
              alt="logo"
            />
            <a className={classes.mainNavigationImgTitle}>Omar Work</a>
          </span>
        </h1>

        <div className={classes.mainNavigationList}>
          <img />
          <nav>
            <NavLinks />
          </nav>
          <button></button>
        </div>
      </div>
    </header>
  );
};

export default MainNavigation;
