import React, { useState } from "react";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";
import NavLinks from "./NavLinks";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      {/* Mobile */}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={`${classes["main-navigation__drawer-nav"]}`}>
          <NavLinks />
        </nav>
      </SideDrawer>

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
            <nav className={`${classes["main-navigation__header-nav"]}`}>
              <NavLinks />
            </nav>
            <button
              className={`${classes["main-navigation__menu-btn"]}`}
              onClick={openDrawerHandler}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
