import React, { useState } from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";

//redux
import { useDispatch } from "react-redux";
import { fetchSearch, clearSearch } from "../actions/gamesAction";

function Nav() {
  const [textInput, setTextInput] = useState("");
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchSearch(textInput));
  };

  const clearSearchedGames = () => {
    dispatch(clearSearch());
  };
  return (
    <StyledNav>
      <Logo>
        <div onClick={clearSearchedGames}>
          <img src={logo} alt="" />
          <h1>Game Store</h1>
        </div>
      </Logo>
      <form className="search">
        <input
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
          type="text"
          value={textInput}
        />
        <button onClick={handleSearch} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}

const StyledNav = styled(motion.div)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.3);
    margin-top: 1rem;
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;

const Logo = styled(motion.div)`
  div {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 30%;
    padding: 1rem;
    cursor: pointer;
  }
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    transform: translateY(0.25rem);
  }
`;

export default Nav;
