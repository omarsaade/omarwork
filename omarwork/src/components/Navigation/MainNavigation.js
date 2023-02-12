import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
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
              <NavLink to="/" className={classes.mainNavigationImgTitle}>
                Omar Work
              </NavLink>
            </span>
          </h1>

          <div className={classes.mainNavigationList}>
            {/* <img /> */}
            <nav className={`${classes["main-navigation__header-nav"]}`}>
              <NavLinks />
            </nav>
            <button
              className={`${classes["main-navigation__menu-btn"]}`}
              onClick={() => setDrawerIsOpen(!drawerIsOpen)}
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
