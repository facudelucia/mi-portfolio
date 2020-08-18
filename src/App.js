import React from 'react';
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import IdiomaState from "./idioma/idiomaState"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <IdiomaState>
      <Router>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/aboutme"} component={AboutMe}/>
            <Route exact path={"/contact"} component={Contact}/>
        </Switch>
      </Router>
    </IdiomaState>
  );
}

export default App;
