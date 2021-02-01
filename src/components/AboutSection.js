import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Image, Hide } from "../styles";
import { Link } from "react-router-dom";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div style={{ textAlign: "center" }}>
          <motion.div>
            <Hide>
              <motion.h2 variants={titleAnim}>
                Hello, my name is Alex Dang.
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>
                I'm a <span>Full-Stack</span>
              </motion.h2>
            </Hide>
            <Hide>
              <motion.h2 variants={titleAnim}>Software Engineer.</motion.h2>
            </Hide>
          </motion.div>
          <motion.p variants={fade}>
            I have an immence passion for design thinking, video games, and
            creating fun, intuitive user experiences.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact Me</motion.button>
          </Link>
        </div>
      </Description>
      {/* <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image> */}
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
