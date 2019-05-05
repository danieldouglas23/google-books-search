import React from "react";
import Saved from "./pages/Saved";
// import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <>
        <NavBar />
        <br />
        <br />
        <br />
        <br />
        <div className="container">
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route path="/saved" component={Saved} /> 
            {/* <Route component={NoMatch} /> */}
            <Route />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
