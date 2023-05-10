import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Nav from "../components/Nav";
import Error from "./Error";
function Home() {
  return (
    <>
      <Nav />
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </>
  );
}

export default Home;
