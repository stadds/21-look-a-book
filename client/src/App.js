import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Jumbotron
            addClass="text-center"
            title="Look, A Book!"
            description="Search for and save books that interest you!"
          ></Jumbotron>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search></Search>
            </Route>
            <Route exact path={["/books"]}>
              <Saved></Saved>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
