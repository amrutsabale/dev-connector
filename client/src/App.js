import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/layouts/Landing";
import NavBar from "./components/layouts/NavBar";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </section>
    </Router>
  );
}

export default App;
