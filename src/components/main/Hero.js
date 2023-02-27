import React from "react";
import FavoritePlace from "../../assets/Untitled.jpg";
import CryptoFinderApp from "../../assets/Untitled1.jpg";
import FoodOrderApp from "../../assets/Untitled2.jpg";
import SectionWorks from "./SectionWorks";
import classes from "./Hero.module.css";

const Data = [
  {
    id: 1,
    name: "Snap App",
    tools: ["React", "Node", "ExpressJS", "MongoDB"],
    about:
      "Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.",
    url: "https://omarsaade.github.io/snap-app/",
    github: "https://github.com/omarsaade/Snap-App",
    image:
      "https://github.com/omarsaade/omarsaade/raw/main/assets/pp.jpg?raw=true",
  },
  {
    id: 2,
    name: "CryptoFinder App",
    tools: ["React", "Firebase", "ReduxToolkit", "Render"],
    about:
      "CryptoFinder App focus on using the latest version of redux (Redux Toolkit) and React Router (V6) ",
    url: "https://github.com/omarsaade/CryptoFinder",
    github: "https://github.com/omarsaade/CryptoFinder",
    image: CryptoFinderApp,
  },
  {
    id: 3,
    name: "Food Order App",
    tools: ["HTML", "PHP", "Mysql", "CSS", "Render"],
    about:
      " Food Order Website is a complete dynamic and fully functional website using PHP programming language and MySQL Database.",
    url: "https://github.com/omarsaade/Food-Order-Website",
    github: "https://github.com/omarsaade/Food-Order-Website",
    image: FoodOrderApp,
  },
];
const Hero = () => {
  return (
    <section id="works">
      <div className={`${classes["works-title"]}`}>
        <div></div>
        Some things I've built
      </div>
      {Data.map((i) => (
        <SectionWorks
          id={i.id}
          github={i.github}
          key={i.id}
          name={i.name}
          tools={i.tools}
          about={i.about}
          url={i.url}
          img={i.image}
        />
      ))}
    </section>
  );
};

export default Hero;
