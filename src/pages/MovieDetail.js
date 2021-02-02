import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
    console.log(setMovies);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                description={award.description}
                info={award.info}
                info2={award.info2}
                info3={award.info3}
                website={award.website}
                git={award.git}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    white-space: nowrap;
    img {
      height: 50vh;
    }
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 3rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      height: 50vh;
    }
  }
`;

//Award Component
const Award = ({ description, info, info2, info3, website, git }) => {
  const openWebsite = () => {
    window.open(`${website}`);
  };
  const openGit = () => {
    window.open(`${git}`);
  };

  return (
    <AwardStyle>
      <h3>About</h3>
      <div className="line"></div>
      <p>{description}</p>
      <p>{info}</p>
      <p>{info2}</p>
      <p>{info3}</p>
      <div className="line"></div>
      {website && (
        <p style={{ cursor: "pointer" }} onClick={openWebsite}>
          Go to Website
        </p>
      )}
      <p style={{ cursor: "pointer" }} onClick={openGit}>
        Github Repository
      </p>
    </AwardStyle>
  );
};

export default MovieDetail;
