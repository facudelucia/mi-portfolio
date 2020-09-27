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
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <IdiomaState>
      <Router>
        <Switch>
            <Route exact path={"/"}>
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route exact path={"/aboutme"}>
              <Navbar />
              <AboutMe />
              <Footer />
            </Route>
            <Route exact path={"/contact"}>
              <Navbar />
              <Contact />
              <Footer />
            </Route>
            <Route exact path={"/projects"}>
              <Navbar />
              <Projects />
              <Footer />
            </Route>
        </Switch>
      </Router>
    </IdiomaState>
  );
}

export default App;
