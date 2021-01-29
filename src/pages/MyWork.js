import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const MyWork = () => {
  return (
    <Work>
      <Project>
        <h2>Seba</h2>
        <div className="line"></div>
        <Link to="/work/seba">
          <img src={athlete} alt="Seba" />
        </Link>
      </Project>
      <Project>
        <h2>Revive</h2>
        <div className="line"></div>
        <Link to="/work/revive">
          <img src={theracer} alt="Revive" />
        </Link>
      </Project>
      <Project>
        <h2>Movie Night</h2>
        <div className="line"></div>
        <Link to="/work/movie-night">
          <img src={goodtimes} alt="Movie Night" />
        </Link>
      </Project>
    </Work>
  );
};

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Project = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default MyWork;
