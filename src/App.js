//Components and pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Switch>
        <Route exact path={["/game/:id", "/"]}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
