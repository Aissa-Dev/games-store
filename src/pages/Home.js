import { useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { useLocation } from "react-router-dom";
//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

function Home() {
  const location = useLocation();
  const pathId = location.pathname.split("/");
  //fetching games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get data
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId.length > 2 && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => {
            return (
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>

        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => {
            return (
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => {
            return (
              <Game
                name={game.name}
                id={game.id}
                released={game.released}
                image={game.background_image}
                key={game.id}
              />
            );
          })}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(365px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
