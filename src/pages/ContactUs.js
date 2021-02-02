import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import email from "../img/email.svg";
import git from "../img/github.svg";
import linked from "../img/linkedin.svg";

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
            <img src={email} alt="email icon" />
            <h2 className="email">alexdang1993374@gmail.com</h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <img src={linked} alt="LinkedIn icon" />
            <h2 onClick={openLinkedIn} style={{ cursor: "pointer" }}>
              alexdang1993374
            </h2>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <img src={git} alt="Github icon" />
            <h2 onClick={openGit} style={{ cursor: "pointer" }}>
              alexdang1993374
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
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
  @media (max-width: 1300px) {
    h2 {
      font-size: 2.5rem;
    }
    .email {
      font-size: 1.5rem;
    }
  }
`;

export default ContactUs;
