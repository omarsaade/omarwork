import React from "react";
import FavoritePlace from "../../assets/Untitled.jpg";
import CryptoFinderApp from "../../assets/Untitled1.jpg";
import SectionWorks from "./SectionWorks";
import classes from "./Hero.module.css";

const Data = [
  {
    id: 1,
    name: "FavoritePlace App",
    tools: ["React", "Node", "Express", "MongoDB", "Render"],
    about:
      " Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.",
    url: "https://github.com/omarsaade/MernStackProject",
    image: FavoritePlace,
  },
  {
    id: 2,
    name: "CryptoFinder App",
    tools: ["React", "Firebase", "Redux Toolkit", "React Router v6", "Render"],
    about:
      " Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.",
    url: "https://github.com/omarsaade/MernStackProject",
    image: CryptoFinderApp,
  },
  {
    id: 3,
    name: "FavoritePlace App",
    tools: ["React", "Node", "Express", "MongoDB", "Render"],
    about:
      " Snap App focus on creating a photo sharing platform for people who love architecture. It integrates sharing, navigation, architecture information and tour planning together.",
    url: "https://github.com/omarsaade/MernStackProject",
    image: CryptoFinderApp,
  },
];
const Hero = () => {
  return (
    <section>
      <div className={`${classes["works-title"]}`}>
        <div></div>
        Some things I've built
      </div>
      {Data.map((i) => (
        <SectionWorks
          id={i.id}
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
