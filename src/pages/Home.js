import { useEffect } from "react";
//Redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";
//Styling and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { fadeIn } from "../animation";

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
  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId.length > 2 && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched.length ? (
          <div>
            <h2>Searched Games</h2>
            <Games>
              {searched.map((game) => {
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
          </div>
        ) : (
          ""
        )}
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
  padding: 0rem 5rem 5rem 5rem;
  h2 {
    padding: 3rem 0rem;
  }
  @media (max-width: 800px) {
    padding: 1rem;
    text-align: center;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(424px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export default Home;
//365px
