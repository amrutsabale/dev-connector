import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import NavBar from "./components/layouts/NavBar";
import Routes from "./components/routing/Routes";
import "./App.css";
// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { setAuthToken } from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
