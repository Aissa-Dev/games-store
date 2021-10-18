//Components and pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Switch>
        <Route exact path={["/game/:id", "/"]}>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
