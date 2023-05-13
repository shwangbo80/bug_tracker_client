import { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Error from "./pages/Error";
import About from "./pages/About";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    if (loggedInUser) {
      const foundUser = loggedInUser;
      setUser(foundUser);
    } else {
      return;
    }
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <Router>
        <Switch>
          <Route path="/login">
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login user={user} setUser={setUser} />
            )}
          </Route>
          <Route path="/dashboard">
            {user ? (
              <Dashboard user={user} setUser={setUser} />
            ) : (
              <Login user={user} setUser={setUser} />
            )}
          </Route>
          <Route path="/">
            <Nav />
            <Switch>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
