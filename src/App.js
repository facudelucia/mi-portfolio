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
import Projects from './components/Projects';
function App() {
  return (
    <IdiomaState>
      <Router>
        <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/aboutme"} component={AboutMe}/>
            <Route path={"/contact"} component={Contact}/>
            <Route path={"/projects"} component={Projects}/>
        </Switch>
      </Router>
    </IdiomaState>
  );
}

export default App;
