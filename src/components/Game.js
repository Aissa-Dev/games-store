import React from "react";
//redux
import { useDispatch } from "react-redux";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Actions
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, image, id, released }) => {
  const dispatch = useDispatch();
  const handleDetails = () => {
    dispatch(loadDetail(id));
    console.log("loaded");
  };
  return (
    <StyledGame onClick={handleDetails}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

export default Game;

const StyledGame = styled(motion.div)`
  text-align: center;
  border-radius: 1rem;
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

/* img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  } */
/* img {
    width: 100%;
    height: 100%;
    object-fit: initial;
  }
  overflow: hidden; */
