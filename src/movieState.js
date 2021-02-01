//Import Images
import seba from "./img/seba.PNG";
import seba2 from "./img/seba2.PNG";
import athlete from "./img/athlete-small.png";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import athlete2 from "./img/athlete2.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Seba",
      mainImg: seba,
      secondaryImg: seba2,
      url: "/work/seba",
      awards: [
        {
          title: "Website",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Github",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/work/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "A Tribute",
          description: "Seba is my tribute to Nujabes.",
        },
        {
          title: "Fully Functional",
          description:
            "Users can listen to a library of some of my favorite Nujabes songs with more on the way.",
        },
        {
          title: "Tech",
          description: "Seba was made using ReactJS.",
        },
      ],
    },
    {
      title: "Revive",
      mainImg: theracer,
      url: "/work/revive",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
