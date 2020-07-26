import React, { Component } from "react";
import Header from "./MainNav";
import { Route, HashRouter } from "react-router-dom";
import Profile from "./Profile";
import Register from "./profile/CreateAccount";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="container">
            <h1 align="center"> Geek Text </h1>
          </div>
          <Header></Header>
          <div id="route-container">
            <Route path="/Profile" component={Profile} />
            <Route path="/Register" component={Register} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
