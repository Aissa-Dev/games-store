import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);

  return <div className="App">Games Store</div>;
}

export default App;
