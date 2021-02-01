import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import seba from "../img/seba.PNG";
import revive from "../img/revive.PNG";
import movieNight from "../img/Movienight1.png";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
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

  const openSeba = () => {
    window.open("https://seba-45e88.web.app/");
  };
  const openRevive = () => {
    window.open("https://revive-games.herokuapp.com/");
  };
  const openMN = () => {
    window.open("https://github.com/MovieNightCC/MovieNight");
  };

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
        <motion.h2 variants={fade}>Seba</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/seba">
          <Hide>
            <motion.img variants={photoAnim} src={seba} alt="Seba" />
          </Hide>
        </Link>
      </Movie>

      <Movie
        onClick={openRevive}
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Revive</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        {/* <Link to="/work/revive"> */}
        <img src={revive} alt="Revive" />
        {/* </Link> */}
      </Movie>

      <Movie
        onClick={openMN}
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Movie Night</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        {/* <Link to="/work/good-times"> */}
        <img src={movieNight} alt="Movie Night" />
        {/* </Link> */}
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

  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  cursor: pointer;
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
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
