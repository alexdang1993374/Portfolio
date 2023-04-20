//Import Images
import seba from "./img/seba.PNG";
import seba2 from "./img/seba2.PNG";
import revive from "./img/revive.PNG";
import revive2 from "./img/revive2.PNG";
import movie from "./img/Movienight1.png";
import movie2 from "./img/movie2.png";
import mizu from "./img/mizu.JPG";
import mizu2 from "./img/mizu2.PNG";
import fitness from "./img/fitness.PNG";
import fitness2 from "./img/tracker2.PNG";
import talk from "./img/talkybox.JPG";
import talk2 from "./img/talk2.PNG";
import ges from "./img/ges (3).JPG";
import ges2 from "./img/ges (2).JPG";
import spots from "./img/spots.JPG";
import spots2 from "./img/spots2.PNG";
import oauth from "./img/oauth.PNG";
import oauth2 from "./img/oauth2.PNG";

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
          info: "• Created a music player with fully featured play, pause, skip, and back functionality.",
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
            "A mobile app where couples can swipe movies to help choose what to watch for a night in.",
          info: "• Developed the front-end card swiping, movie filtering, and various other features as well as designed UI/UX components using Flutter and Dart in a 3 week team project of 4 members.",
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
          info: "• Engineered a multipage Front-End with dynamic animations in React, Redux, and Framer Motion.",
          info2:
            "•  Incorporated asynchronous front-end requests to rawg.io API.",
          info3: "•  Deployed app to Heroku using CI/CD methodologies.",
          // website: "https://revive-games.herokuapp.com/",
          git: "https://github.com/alexdang1993374/Revive",
        },
      ],
    },
    {
      title: "MyMizualise",
      mainImg: mizu,
      url: "/work/mymizualise",
      secondaryImg: mizu2,
      awards: [
        {
          description:
            "A web application for mymizu (a free water refill app) users to visualize the community's positive environmental impact in a fun and contextual way.",
          info: "• Utilized ReactJS and Google Maps API to construct a dynamic multi-page front-end.",
          info2:
            "•   Designed and implemented a PostgreSQL database using Knex and Express.",
          info3:
            "•  Configured front-end asynchronous Axios requests to mymizu's third party API.",
          website: "https://mymizualise.herokuapp.com/",
          git: "https://github.com/JulienTromas/MyMizualise",
        },
      ],
    },
    {
      title: "Fitness Tracker",
      mainImg: fitness,
      url: "/work/fitness",
      secondaryImg: fitness2,
      awards: [
        {
          description:
            "Fitness Tracker is a full-stack web application where users can keep track of their exercise habits.",
          info: "•   Architectured and created a RESTful API server using Golang connected to a PostgreSQL database and connected it to the client using asynchronous Axios requests.",
          info2:
            "•    Created and designed a multi-page front-end wep app using ReactJS.",
          info3:
            "•  Features full CRUD functionality where users can retrieve, edit, delete, and add to their logged exercises.",
          git: "https://github.com/alexdang1993374/FitnessTracker",
        },
      ],
    },
    {
      title: "Elixir OAuth Demo",
      mainImg: oauth,
      url: "/work/oauth",
      secondaryImg: oauth2,
      awards: [
        {
          description:
            "A demo showcasing Open Authentication login functionality using Elixir and Phoenix framework.",
          info: "•   Architectured and created a RESTful API server using Phoenix connected to a PostgreSQL database initialized using Docker.",
          info2:
            "•    Implemented sign in capabilities using email or Google account.",
          info3:
            "•  Uses hash generators to securely encrypt and store user passwords.",
          git: "https://github.com/alexdang1993374/Elixir-OAuth-Demo",
        },
      ],
    },
    {
      title: "Spots",
      mainImg: spots,
      url: "/work/spots",
      secondaryImg: spots2,
      awards: [
        {
          description:
            "A web application mapping out rest stop routes along highways in the United States.",
          info: "• Utilized ReactJS to construct a dynamic single-page front-end.",
          info2:
            "•   Designed and implemented a PostgreSQL database using Knex and Express.",
          info3:
            "•  Configured front-end asynchronous Axios requests to Google Maps third party API.",
          website: "https://truckzstaging.herokuapp.com/",
          git: "https://github.com/alexdang1993374/Spots",
        },
      ],
    },
    {
      title: "Talkybox",
      mainImg: talk,
      url: "/work/talkybox",
      secondaryImg: talk2,
      awards: [
        {
          description:
            "A full-stack web application for a nostalgic look back at timeless quotes from iconic television series.",
          info: "• Architectured and created a RESTful API server using Golang connected to a PostgreSQL database and connected it to the client using asynchronous Axios requests.",
          info2:
            "•    Built and designed a multi-page front-end wep app using ReactJS.",
          info3:
            "•   Deployed and maintained app using Heroku Pipelines following CI/CD practices.",
          website: "https://talkybox.herokuapp.com/",
          git: "https://github.com/alexdang1993374/Talkybox",
        },
      ],
    },
    {
      title: "Geschur",
      mainImg: ges,
      url: "/work/geschur",
      secondaryImg: ges2,
      awards: [
        {
          description:
            "A web application using machine learning to liven up video calls through gesture recognition.",
          info: "•  Used TeachableMachine and TensorFlowJS to create, train, and detect body gestures and match them with a specific action.",
          info2:
            "•    Constructed a single page front end client using ML5JS, P5JS, HTML5, and Flexbox CSS.",
          info3: "•    Continuously integrated and deployed app to Heroku.",
          website: "https://geschur.herokuapp.com/",
          git: "https://github.com/alexdang1993374/Geschur",
        },
      ],
    },
  ];
};
