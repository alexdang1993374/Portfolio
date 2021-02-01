import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  const openLinkedIn = () => {
    window.open("https://www.linkedin.com/in/alexdang1993374/");
  };
  const openGit = () => {
    window.open("https://github.com/alexdang1993374");
  };

  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>alexdang1993374@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2 onClick={openLinkedIn} style={{ cursor: "pointer" }}>
              LinkedIn: alexdang1993374
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2 onClick={openGit} style={{ cursor: "pointer" }}>
              Github: alexdang1993374
            </h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
