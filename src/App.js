import React from 'react';
import Home from "./components/Home"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import Admin from './components/Admin';
import AddProject from './components/AddProject';
import FormEditProject from './components/FormEditProject';
function App() {
  return (
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
            <Route exact path={"/login"} component={Login}/>
            <Route exact path={"/admin"} component={Admin}/>
            <Route exact path={"/addproject"} component={AddProject}/>
            <Route exact path={"/editproject"} component={FormEditProject}/>
        </Switch>
      </Router>
  );
}

export default App;
