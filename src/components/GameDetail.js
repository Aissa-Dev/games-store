import React, { useState } from "react";
//Styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { smallImage } from "../util";

//Images
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import nintendo from "../img/nintendo.svg";
import playstation from "../img/playstation.svg";
import stream from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import emptyStar from "../img/star-empty.svg";
import fullStar from "../img/star-full.svg";
import halfStar from "../img/star-half.svg";
import android from "../img/android.svg";

function GameDetail({ pathId }) {
  const history = useHistory();
  const stringPathId = pathId[2];
  //exit detail
  const exitDetailHundler = (e) => {
    const element = e.target;
    //console.log(element);
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  //Get platforms
  const getPlatform = (platform) => {
    if (platform.toLowerCase().includes("playstation".toLowerCase())) {
      platform = "playstation";
    } else if (platform.toLowerCase().includes("xbox".toLowerCase())) {
      platform = "xbox";
    } else if (platform.toLowerCase().includes("pc".toLowerCase())) {
      platform = "pc";
    } else if (platform.toLowerCase().includes("nintendo".toLowerCase())) {
      platform = "nintendo";
    } else if (platform.toLowerCase().includes("os".toLowerCase())) {
      platform = "ios";
    } else if (platform.toLowerCase().includes("android".toLowerCase())) {
      platform = "android";
    } else {
      platform = "f";
    }

    switch (platform) {
      case "playstation":
        return playstation;
      case "xbox":
        return xbox;
      case "pc":
        return stream;
      case "nintendo":
        return nintendo;
      case "ios":
        return apple;
      case "android":
        return android;
      default:
        return gamepad;
    }
  };
  const [platformName, setPlatformName] = useState("");
  const handleMouseOver = (name) => {
    setPlatformName(name);
  };

  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= rating; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={fullStar} alt="full Star" />);
      }
    }
    if (rating < game.rating) {
      stars.push(<img key={"i"} src={halfStar} alt="half Star" />);
    }
    for (let i = rating + 1; i < 5; i++) {
      stars.push(<img key={i} src={emptyStar} alt="empty Star" />);
    }

    return stars;
  };
  //data
  const { game, screenshots, isLoading } = useSelector(
    (state) => state.details
  );

  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHundler}>
          <Detail layoutId={stringPathId}>
            <Stats>
              <div className="rating">
                <motion.h3 layoutId={`title ${stringPathId}`}>
                  {game.name}
                </motion.h3>

                <p>Rating : {game.rating}</p>
                {getStars()}
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  <div>
                    {game.platforms.map((data) => (
                      //<h3 key={data.platform.id}>{data.platform.name}</h3>
                      <img
                        className="platform-image"
                        key={data.platform.id}
                        src={getPlatform(data.platform.name)}
                        onMouseOver={() => handleMouseOver(data.platform.name)}
                        onMouseLeave={() => {
                          setPlatformName("");
                        }}
                        alt={data.platform.name}
                      />
                    ))}
                  </div>
                  <div className="platform-name">
                    <p>{platformName}</p>
                  </div>
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${stringPathId}`}
                src={smallImage(game.background_image, 1280)}
                alt={game.background_image}
              />
            </Media>
            <Description>
              <p>{game.description_raw}</p>
            </Description>
            <Gallery>
              {screenshots.results.map((screen) => (
                <img
                  key={screen.id}
                  src={smallImage(screen.image, 1280)}
                  alt={screen.image}
                />
              ))}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  div {
    display: flex;
    justify-content: space-evenly;
    img {
      margin-left: 3rem;
    }
  }
  .platform-name {
    width: 100%;
    height: 2rem;
  }
  .platform-image {
    fill: green;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  text-align: justify;
`;

const Gallery = styled(motion.div)`
  img {
    margin-bottom: 0.2rem;
  }
`;
export default GameDetail;
