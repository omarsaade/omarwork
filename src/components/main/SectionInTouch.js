import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Sectionmsg from "./Sectionmsg";
import classes from "./SectionInTouch.module.css";

const ContactData = [
  { id: 111, name: "Github", url: "https://github.com/omarsaade" },
  { id: 222, name: "Hashnode", url: "https://omarsaade.hashnode.dev/" },
  { id: 333, name: "Email", url: "mailto:omarsaadeh11@gmail.com" },
  {
    id: 444,
    name: "Linkedin",
    url: "https://www.linkedin.com/in/omar-saade-620406122/",
  },
  {
    id: 555,
    name: "Stack Overflow",
    url: "https://stackoverflow.com/users/18497493/omar-saade",
  },
  {
    id: 666,
    name: "Instagram",
    url: "https://www.instagram.com/omar_saade/?hl=en",
  },
];

const SectionInTouch = () => {
  const [status, setStatus] = useState(false);
  const clickHandler = () => {
    setStatus(true);
  };

  const closeHandler = () => {
    setStatus(false);
  };

  return (
    <>
      {status && <Sectionmsg onClick={closeHandler} />}
      <section id="contact">
        <div className={`${classes["works-title"]}`}>
          <div></div>Get in touch
        </div>
        <div className={classes.contactContainer}>
          {ContactData.map((x) => (
            <NavLink
              target="_blank"
              key={Math.random() * 1000}
              className={classes.touchNavLink}
              to={x.url}
            >
              <div className={classes.contactText}>
                {x.name}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"></path>
                </svg>
              </div>
            </NavLink>
          ))}
        </div>
        {/* {status && <Sectionmsg onClick={closeHandler} />} */}
        <button type="button" className={classes.btn} onClick={clickHandler}>
          Send Message
        </button>
      </section>
    </>
  );
};

export default SectionInTouch;
