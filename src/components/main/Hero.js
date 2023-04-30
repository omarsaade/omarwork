import React from "react";
import CryptoFinderApp from "../../assets/Untitled1.jpg";
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
    name: "Al Markazia News App",
    tools: ["ReactNative", "Redux", "Redux Toolkit"],
    about:
      "Almarkazia is a news app designed to keep users informed and connected to the world. It offers curated news from various categories, personalized recommendations, and real-time updates. With its intuitive interface, Almarkazia provides a reliable and immersive news experience, allowing users to stay ahead and share stories effortlessly.",
    url: "https://github.com/omarsaade/almarkazia",
    github: "https://github.com/omarsaade/almarkazia",
    image:
      "https://user-images.githubusercontent.com/49005530/235341454-724e8957-a55b-4d8c-a51c-d2d088c5f333.jpg",
  },
  {
    id: 3,
    name: "CryptoFinder App",
    tools: ["React", "Firebase", "ReduxToolkit", "Render"],
    about:
      "CryptoFinder App focus on using the latest version of redux (Redux Toolkit) and React Router (V6) ",
    url: "https://github.com/omarsaade/CryptoFinder",
    github: "https://github.com/omarsaade/CryptoFinder",
    image: CryptoFinderApp,
  },
  // {
  //   id: 4,
  //   name: "Food Order App",
  //   tools: ["HTML", "PHP", "Mysql", "CSS", "Render"],
  //   about:
  //     " Food Order Website is a complete dynamic and fully functional website using PHP programming language and MySQL Database.",
  //   url: "https://github.com/omarsaade/Food-Order-Website",
  //   github: "https://github.com/omarsaade/Food-Order-Website",
  //   image: FoodOrderApp,
  // },
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
