import React from "react";
import IdeaItem from "./IdeaItem";
import classes from "./SectionIdea.module.css";

const Data = [
  {
    id: 11,
    from: "hashnode.com",
    title:
      "An Alternative to Google's Geocoding API that doesn't use a credit card",
    url: "https://omarsaade.hashnode.dev/an-alternative-to-googles-geocoding-api-that-doesnt-use-a-credit-card",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1674838683016/df046bf9-26cc-455b-978c-32f133c05b85.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 22,
    from: "stackoverflow.com",
    title: "React 18 useEffect behavior",
    url: "https://stackoverflow.com/questions/62631053/useeffect-being-called-multiple-times/74158550#74158550",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1666381162839/_nkomIV2_.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 33,
    from: "hashnode.com",
    title:
      "Why do we need to add server-side validation? Didn't we add validation in the front-end section?",
    url: "https://omarsaade.hashnode.dev/why-do-we-need-to-add-server-side-validation-didnt-we-add-validation-in-the-front-end-section",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1674576121212/2084b4ad-ae8d-45c7-a711-76d162738cae.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: 44,
    from: "hashnode.com",
    title: "Building Custom Middleware Function in Express JS",
    url: "https://omarsaade.hashnode.dev/building-custom-middleware-function",
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1669755451978/yKSWCDLKN.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

const SectionIdea = () => {
  return (
    <section id="posts">
      <div className={`${classes["works-title"]}`}>
        <div></div>
        Blogs
      </div>
      <div className={classes.selectedPostsConatiner}>
        {Data.map((i) => (
          <IdeaItem
            id={i.id}
            key={i.id}
            from={i.from}
            title={i.title}
            url={i.url}
            image={i.image}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionIdea;
