import {useState, useEffect} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Error from "./pages/Error";

function App() {
  const [user, setUser] = useState();
  const history = useHistory();

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
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
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
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
