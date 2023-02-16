import React from "react";
import FavoritePlace from "../../assets/Untitled.jpg";
import CryptoFinderApp from "../../assets/Untitled1.jpg";
import FoodOrderApp from "../../assets/Untitled2.jpg";
import SectionWorks from "./SectionWorks";
import classes from "./Hero.module.css";

const Data = [
  {
    id: 1,
    name: "My Favorite Place",
    tools: ["React", "Node", "Express", "MongoDB", "Render"],
    about:
      "My Favorite Place is an App that allows users to save and favorite their favorite places, It integrates navigation, description and information about that place .",
    url: "https://omarsaade-favoriteplaces.onrender.com",
    github: "https://github.com/omarsaade/MernStackProject",
    image: FavoritePlace,
  },
  {
    id: 2,
    name: "CryptoFinder App",
    tools: ["React", "Firebase", "Redux Toolkit", "Render"],
    about:
      "CryptoFinder App focus on using the latest version on redux (Redux Toolkit) and React Router V6 ",
    url: "https://omarsaade-cryptofinder.onrender.com",
    github: "https://github.com/omarsaade/CryptoFinder",
    image: CryptoFinderApp,
  },
  {
    id: 3,
    name: "Food Order App & Dashboard",
    tools: ["HTML", "PHP", "Mysql", "CSS", "Render"],
    about:
      " Food Order Website , create complete dynamic and fully functional website using PHP programming language and MySQL Database.",
    url: "https://github.com/omarsaade/Food-Order-Website",
    github: "https://github.com/omarsaade/Food-Order-Website",
    image: FoodOrderApp,
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

//   const [data, setData] = useState(null);

//   const query = `
//     query GetUserArticles($page: Int!) {
//         user(username: "os921") {
//             publication {
//                 posts(page: $page) {
//                     title
//                     brief
//                     slug
//                     coverImage
//                 }
//             }
//         }
//     }
//   `;
//   const variables = { page: 0 };
//   const fetchMyBlogs = async () => {
//     const data = await fetch("https://api.hashnode.com/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         query,
//         variables,
//       }),
//     });

//     const result = await data.json();
//     const articles = result.data.user.publication.posts;
//     return articles;
//   };

//   useEffect(() => {
//     fetchMyBlogs().then((x) => {
//       setData(x);
//     });
//   }, []);
