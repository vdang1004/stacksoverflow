import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ErrorLoginPage from "./pages/ErrorLoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import GetSmarterPage from "./pages/GetSmarterPage";
import NoMatch from "./pages/NoMatch";




const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/errorloginpage" component={ErrorLoginPage} />
        <Route exact path="/signuppage" component={SignupPage} />
        <Route exact path="/homepage" component={HomePage} />
        <Route exact path="/getsmarterpage" component={GetSmarterPage} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
