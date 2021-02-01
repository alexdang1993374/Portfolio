//Import Images
import seba from "./img/seba.PNG";
import seba2 from "./img/seba2.PNG";
import revive from "./img/revive.PNG";
import revive2 from "./img/revive2.PNG";
import movie from "./img/Movienight1.png";
import movie2 from "./img/movie2.png";

export const MovieState = () => {
  return [
    {
      title: "Seba",
      mainImg: seba,
      secondaryImg: seba2,
      url: "/work/seba",
      awards: [
        {
          description:
            "Seba is my tribute to the late and great Nujabes. Users can listen to a library of some of my favorite Nujabes songs with more on the way.",
          info:
            "• Created a music player with fully featured play, pause, skip, and back functionality.",
          info2: "• Designed a dynamically animated Front-End in React.",
          info3:
            "• Deployed and maintained app using Firebase following CI/CD practices.",
          website: "https://seba-45e88.web.app/",
          git: "https://github.com/alexdang1993374/Seba",
        },
      ],
    },
    {
      title: "Movie Night",
      mainImg: movie,
      url: "/work/movie-night",
      secondaryImg: movie2,
      awards: [
        {
          description:
            "Movie Night is a Movie-swiping app to bring users a seamless and painless Movie Night Experience.",
          info:
            "• Developed the front-end card swiping, movie filtering, and various other features as well as designed UI/UX components using Flutter and Dart in a 3 week team project of 4 members.",
          info2:
            "• Engineered back-end cloud functions using TypeScript to incorporate Firebase functionality.",
          info3:
            "• Continuously integrated and deployed app to Google Play and Apple App stores.",
          git: "https://github.com/MovieNightCC/MovieNight",
        },
      ],
    },
    {
      title: "Revive",
      mainImg: revive,
      url: "/work/revive",
      secondaryImg: revive2,
      awards: [
        {
          description:
            "A web application where users can get information about the latest and hottest videogames.",
          info:
            "• Engineered a multipage Front-End with dynamic animations in React, Redux, and Framer Motion.",
          info2:
            "•  Incorporated asynchronous front-end requests to rawg.io API.",
          info3: "•  Deployed app to Heroku using CI/CD methodologies.",
          website: "https://revive-games.herokuapp.com/",
          git: "https://github.com/alexdang1993374/Revive",
        },
      ],
    },
  ];
};
