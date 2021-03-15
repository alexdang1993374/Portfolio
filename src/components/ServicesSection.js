import React from "react";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import me from "../img/pic (2).PNG";
import pencil from "../img/pencil.svg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          What I can do for <span>you</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Efficient</h3>
            </div>
            <p>I focus on writing clean, elegant, and efficient code.</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Teamwork</h3>
            </div>
            <p>
              I have more than 6 years of experience working in diverse
              international teams.
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Skilled</h3>
            </div>
            <p>
              JavaScript, TypeScript, React, NodeJS, Golang, Flutter, Dart,
              Express, REST API, Knex, PostgreSQL
            </p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={pencil} />
              <h3>Experienced</h3>
            </div>
            <p>
              Redux, Elixir, Phoenix, Vue, Python, GraphQL, TensorFlowJS, ML5JS,
              P5JS, Mocha, Chai, Docker, Heroku, Firebase
            </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img
          className="mePic"
          style={{ borderRadius: "5%" }}
          alt="camera"
          src={me}
        />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1300px) {
    .mePic {
      height: 90rem;
      width: 70%;
    }
  }
  @media (max-width: 900px) {
    .mePic {
      height: 70rem;
    }
  }
  @media (max-width: 600px) {
    .mePic {
      height: 60rem;
    }
  }
  @media (max-width: 500px) {
    .mePic {
      height: 40rem;
    }
  }
  @media (max-width: 400px) {
    .mePic {
      height: 25rem;
    }
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
