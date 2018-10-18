import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import GetSmarterPage from "./pages/GetSmarterPage";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";



const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/getsmarterpage" component={GetSmarterPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
