import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import seba from "../img/seba.PNG";
import revive from "../img/revive.PNG";
import movie from "../img/Movienight1.png";
import mizu from "../img/mizu.JPG";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return (
    <Work
      layout="position"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>Seba</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/seba">
          <Hide>
            <motion.img variants={photoAnim} src={seba} alt="Seba" />
          </Hide>
        </Link>
      </Project>
      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Revive</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/revive">
          <img src={revive} alt="Revive" />
        </Link>
      </Project>
      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Movie Night</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/movie-night">
          <img src={movie} alt="Movie Night" />
        </Link>
      </Project>
      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>MyMizualise</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/mymizualise">
          <img src={mizu} alt="MyMizualise" />
        </Link>
      </Project>
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

const Project = styled(motion.div)`
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
  top: 0;
  width: 100%;
  height: 100%;
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

export default MyWork;
