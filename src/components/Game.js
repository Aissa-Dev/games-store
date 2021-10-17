import React from "react";
//redux
import { useDispatch } from "react-redux";

//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

//Actions
import { loadDetail } from "../actions/detailAction";

import { Link } from "react-router-dom";

import { smallImage } from "../util";

const Game = ({ name, image, id, released }) => {
  const stringId = id.toString();
  const dispatch = useDispatch();
  const handleDetails = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <StyledGame layoutId={stringId} onClick={handleDetails}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringId}`}>{name}</motion.h3>
        <p>{released}</p>
        {/* <img src={image} alt={name} /> */}
        <motion.img
          layoutId={`image ${stringId}`}
          src={smallImage(image, 640)}
          alt={name}
        />
      </Link>
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

  /* cursor: pointer; */
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
