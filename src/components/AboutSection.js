import React from "react";
import home1 from "../img/home1.png";
import me from "../img/pic (2).PNG";
import { About, Description, Image, Hide } from "../styles";
//Animation
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Full Stack Software Engineer
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide> */}
        </motion.div>
        {/* <motion.p variants={fade}>
          Contact me to get in touch about any job opportunities.
        </motion.p> */}
        {/* <motion.button variants={fade}>Contact Me</motion.button> */}
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
