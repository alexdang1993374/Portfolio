import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import seba from "../img/seba.PNG";
import revive from "../img/revive.PNG";
import movieNight from "../img/Movienight1.png";
import mizu from "../img/mizu.JPG";
import fitness from "../img/fitness.PNG";
import talk from "../img/talkybox.JPG";
import ges from "../img/ges (2).JPG";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();

  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <Link to="/work/seba">
          <motion.h2 variants={fade}>Seba - ReactJS, Firebase</motion.h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Hide>
            <motion.img variants={photoAnim} src={seba} alt="Seba" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <Link to="/work/revive">
          <h2>Revive - ReactJS, Redux, Framer Motion, Heroku</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={revive} alt="Revive" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <Link to="/work/movie-night">
          <h2>Movie Night - Flutter, Dart, TypeScript, Firebase</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={movieNight} alt="Movie Night" />
        </Link>
      </Movie>
      <Movie
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <Link to="/work/mymizualise">
          <h2>MyMizualise - ReactJS, PostgreSQL, Express, Knex</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={mizu} alt="MyMizualise" />
        </Link>
      </Movie>
      <Movie
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <Link to="/work/fitness">
          <h2>Fitness Tracker - ReactJS, Golang, PostgreSQL</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={fitness} alt="Fitness Tracker" />
        </Link>
      </Movie>
      <Movie
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <Link to="/work/talkybox">
          <h2>Talkybox - ReactJS, Golang, PostgreSQL, Heroku</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={talk} alt="Talkybox" />
        </Link>
      </Movie>
      <Movie
        ref={element6}
        variants={fade}
        animate={controls6}
        initial="hidden"
      >
        <Link to="/work/geschur">
          <h2>Gechur - TeachableMachine, TensorFlowJS, P5JS</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <img src={ges} alt="Gechur" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    //cursor: pointer;
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      height: 25vh;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
