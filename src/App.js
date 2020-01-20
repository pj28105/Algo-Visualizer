import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Navbar from "./shared/components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
